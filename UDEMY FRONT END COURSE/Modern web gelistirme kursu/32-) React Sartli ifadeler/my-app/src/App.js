import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import React, { Component } from "react";

// [ json-server --watch db.json ] json api icin terminale yazilmasi gerekiyor

export default class App extends Component {
  // category deki datayi product a tasimak icin, category datasini ilk basta app{bir class olusturarak function degil} e sonra producta tasiyoruz.
  // component ler arasi veri transferini ancak bu sekilde yapabiliyoruz ne yazik ki

  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    // console.log(category);
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(
      (cartItem) => cartItem.product.id === product.id
    );

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(AcartItem => AcartItem.product.id !== product.id)
    this.setState({cart:newCart})
  }

  render() {

    //  props ile encapsulation (kapsulleme)
    let categoryInfo = {
      title: "This is Category List",
      something: "An other Something",
    }; // sadece burada degisiklik yapmamiz yeterli
    let productInfo = { title: "This is Product List" };
    // yukaridaki gibi degisken atama yontemi ile de islemlerimiz gerceklestirilebilinir

    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// function App() {

// }

// export default App;

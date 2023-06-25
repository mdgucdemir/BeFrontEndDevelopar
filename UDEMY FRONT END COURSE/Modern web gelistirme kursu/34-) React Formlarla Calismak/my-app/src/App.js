import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";

import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";

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
    alertify.success(product.productName + " added to cart!", 2); // burada ki 2; 2 sn calisicagini gosteriyor
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(
      (AcartItem) => AcartItem.product.id !== product.id
    );
    this.setState({ cart: newCart });
    alertify.error(product.productName + " deleted to cart!", 2); // 2 sn calisacak
  };

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
              <Routes>
                <Route
                  exact
                  path="/"
                  Component={(props) => (
                    <ProductList
                      {...props} // props kopyasini al kopyasini gonder
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  Component={(props) => (
                    <CartList
                      {...props} // props kopyasini al kopyasini gonder
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route path="form1" Component={FormDemo1}/>
                <Route path="/*" element={<NotFound />} />
              </Routes>
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


import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import React, { Component } from "react";

export default class App extends Component {

  state = {currentCategory: ""}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {

    //  props ile encapsulation (kapsulleme)
    let categoryInfo = {title : "This is Category List", something : "An other Something"}; // sadece burada degisiklik yapmamiz yeterli
    let productInfo = {title : "This is Product List"};
    // yukaridaki gibi degisken atama yontemi ile de islemlerimiz gerceklestirilebilinir

    return (           
      
      <div>
        {/* <h1>Hello react :D</h1> */},
  
        {/* <Navi></Navi> bu yapiyi asagida sade bir bicim de yazilmis hali mevcuttur */};
        {/*[npm install bootsrap] ve [npm install reactstrap] yapmalisin. ikisinide yuklemelisin yoksa calismaz*/},
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory = {this.state.currentCategory} changeCategory = {this.changeCategory} info = {categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory = {this.state.currentCategory} info = {productInfo} />
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

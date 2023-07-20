import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

export default class DashBoard extends Component {
  // Category ve Product buranin icerisinde olucak
  // reactstrap 12 parcaya boluyor. Biz 3 parca Category e 9 parca Product a vericez
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>
          <Col xs="9">
            <ProductList />
          </Col>
        </Row>
      </div>
    );
  }
}

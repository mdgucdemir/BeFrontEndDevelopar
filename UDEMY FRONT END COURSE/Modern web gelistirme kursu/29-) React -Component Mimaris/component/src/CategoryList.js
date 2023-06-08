import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {

    // constructor(props) {
    //     super(props);
    //     state : {}
    // }

    // react props yontemi
    // props = [properties]
    // react e yeni gelen guncellemeler ile birlik yukardaki gibi bir yazim olmadan da assagidaki {this.props.title} ornegini yapabiliriz

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          <ListGroupItem>Hello</ListGroupItem>
          <ListGroupItem>React</ListGroupItem>
          <ListGroupItem>This</ListGroupItem>
          <ListGroupItem>is</ListGroupItem>
          <ListGroupItem>Me</ListGroupItem>
          <ListGroupItem>:)</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

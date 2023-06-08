import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>This is Category List</h3>
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

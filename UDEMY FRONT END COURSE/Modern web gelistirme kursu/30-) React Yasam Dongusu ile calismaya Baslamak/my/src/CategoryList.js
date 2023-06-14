import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // State Sade yazim

  state = {
    categories: [],
  };

  componentDidMount() {
    this.getcategories();
  }

  getcategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}

          <h4>{this.props.currentCategory}</h4>
        </ListGroup>
      </div>
    );
  }
}

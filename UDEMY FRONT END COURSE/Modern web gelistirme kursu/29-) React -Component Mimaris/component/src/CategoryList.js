import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state : {}
  // }

  // react props yontemi
  // props = [properties] = probs ta bir companent den digerine bir degisken, data, bir event tasinir.
  // react e yeni gelen guncellemeler ile birlik yukardaki gibi bir yazim olmadan da assagidaki {this.props.title} ornegini yapabiliriz

  // props = bir companent ten digerine data tasima yontemidir
  // state = bir companent in data sidir. Bir companent e ozel bir veri tutmak istiyorsaniz bunu state ile yapabilirsiniz

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

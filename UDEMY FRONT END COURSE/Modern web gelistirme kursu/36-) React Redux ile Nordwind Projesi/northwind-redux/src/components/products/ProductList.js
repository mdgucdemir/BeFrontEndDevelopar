import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // state baglama (bind)
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateToProps)(ProductList);

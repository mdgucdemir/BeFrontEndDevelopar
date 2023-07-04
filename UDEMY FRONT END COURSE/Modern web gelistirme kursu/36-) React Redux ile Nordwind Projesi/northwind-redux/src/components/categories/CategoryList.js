import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Categories</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateToProps)(CategoryList);
 
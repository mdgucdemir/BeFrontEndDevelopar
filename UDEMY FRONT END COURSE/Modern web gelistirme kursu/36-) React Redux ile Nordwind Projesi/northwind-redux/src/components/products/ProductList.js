import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions"

class ProductList extends Component {
  componentDidMount(){
    this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Units In Stock</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map(product=>(// her bir product icin map et
                <tr>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
              </tr>
              ))}
              
            </tbody>
          </Table>
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // state baglama (bind)
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions baglama

    actions: {
      getProducts: bindActionCreators(
        productActions.getProducts,
        dispatch
      ),      
    },
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList);

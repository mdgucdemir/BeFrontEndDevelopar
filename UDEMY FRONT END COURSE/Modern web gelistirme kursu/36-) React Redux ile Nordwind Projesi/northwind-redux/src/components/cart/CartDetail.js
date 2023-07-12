import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"

class CartDetail extends Component {
  render() {
    return (
      <div>
        <h1>cart</h1>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
    return {
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      },
    };
  }
  
  function mapStateToProps(state) {
    return {
      cart: state.cartReducer, // cart state tini cekme
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
  
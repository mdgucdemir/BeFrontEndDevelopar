import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

class CartSummery extends Component {
  // sustainable coding [ surdurulebilir codlama ] ornegidir asagidaki yazim sekli

  removeFromCart (product) {
    this.props.actions.removeFromCart(product)
    alertify.error(product.productName + " deleted from cart");
    
}

  renderEmpty() {
    return (
      // return de Jsx dondurme sekli
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }

  renderSummery() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() =>
                  this.removeFromCart(cartItem.product)
                  
                }
              >
                X
              </Badge>

              {cartItem.product.productName}

              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to={"/cart"}>Go To Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {
          this.props.cart.length > 0 ? this.renderSummery() : this.renderEmpty()
          // cart elemani varsa renderSummery i dondur, degilse renderEmpty yi dondur demektir
        }
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummery);

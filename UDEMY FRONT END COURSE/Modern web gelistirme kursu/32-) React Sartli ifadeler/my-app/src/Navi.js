import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink  
} from "reactstrap";
import CartSummery from "./CartSummery";


export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">My App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/reactstrap/reactstrap"
                  target="_blank"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummery removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>   
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

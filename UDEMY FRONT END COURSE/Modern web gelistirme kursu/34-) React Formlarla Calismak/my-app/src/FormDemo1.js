import React, { Component } from "react";
import { Form, Input } from "reactstrap";

export default class FormDemo1 extends Component {
  state = { userName: "" };

  onChangeHandler = (event) => {
    this.setState({userName:event.target.value})
  }

  render() {
    return (
      <div>
        <Form>
            <h3>User Name</h3>
            <Input onChange={this.onChangeHandler} type="text"></Input>
            <h3>User Name is {this.state.userName}</h3>
        </Form>
      </div>
    );
  }
}

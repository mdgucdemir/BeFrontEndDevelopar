import React, { Component } from "react";
import { Form, Input } from "reactstrap";

export default class FormDemo1 extends Component {
  state = { userName: "" };

  onChangeHandler = (event) => {
    this.setState({userName:event.target.value})
  }

  onSubmitHandler = (event) => {
    event.preventDefault(); /* Default davranisi ugulama demek. bu da bize submit edildikten sonra cart taki elemanlarin kaybolmamasini sagliyor.
     Cunku ugulamamiz single page uygulamadir */
    alert(this.state.userName);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <Input onChange={this.onChangeHandler} type="text"></Input>
            <h3>User Name is {this.state.userName}</h3>
            <Input type="submit" value="save"></Input>
        </Form>
      </div>
    );
  }
}

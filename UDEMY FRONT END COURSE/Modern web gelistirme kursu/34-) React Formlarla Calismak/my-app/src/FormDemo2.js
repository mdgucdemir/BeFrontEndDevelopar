import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " add to db!");
    alertify.success(this.state.password + " add to db!");
    alertify.success(this.state.description + " add to db!");
    alertify.success(this.state.city + " add to db!");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Write description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Austin</option>
              <option>San Antoino</option>
              <option>San Diego</option>
              <option>Los Angeles</option>
              <option>New York City</option>
              <option>Berlin</option>
              <option>London</option>
              <option>Paris</option>
              <option>Madrid</option>
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
          
        </Form>
      </div>
    );
  }
}

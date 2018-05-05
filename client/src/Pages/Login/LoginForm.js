import React, { Component } from "react";
import { Form, Input, Icon } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;

class LoginForm extends Component {
  state = {};

  render() {
    const {
      getFieldDecorator,
      isFieldTouched,
      getFieldError
    } = this.props.form;
    return (
      <Form>
        <FormItem label="Username" required>
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                message: "this field is required",
                whitespace: true
              }
            ]
          })(
            <Input
              prefix={<Icon type="user" />}
              size="large"
              required
              placeholder="Enter your username here"
            />
          )}
        </FormItem>
        <FormItem label="Password" required>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "this field is required",
                whitespace: true
              }
            ]
          })(
            <Input
              prefix={<Icon type="key" />}
              size="large"
              type="password"
              required
              placeholder="Enter your password here"
            />
          )}
        </FormItem>
        <FormItem>
          <h4 className="mb-0 text-center uppercase">
            <Link to="/password-forget" className="text-muted">
              Password Forget
            </Link>
          </h4>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);

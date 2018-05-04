import React, { Component } from "react";
import { Form, Input, Icon } from "antd";

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
        <FormItem label="Username" className="mb-3" required>
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
        <FormItem label="Password" className="mb-3" required>
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
              prefix={<Icon type="user" />}
              size="large"
              type="password"
              required
              placeholder="Enter your password here"
            />
          )}
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);

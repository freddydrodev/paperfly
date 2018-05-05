import React, { Component } from "react";
import { Form, Input, Icon } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;

class PasswordForgetForm extends Component {
  state = {};

  render() {
    const {
      getFieldDecorator,
      isFieldTouched,
      getFieldError
    } = this.props.form;
    return (
      <Form>
        <FormItem label="Email Address" required colon={false}>
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: "this field is required",
                whitespace: true
              },
              { type: 'email', message: 'Must be a valid Email Address'}
            ]
          })(
            <Input
              prefix={<Icon type="mail" />}
              size="large"
              required
              type="email"
              placeholder="Enter your email here"
            />
          )}
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(PasswordForgetForm);

import React, { Component } from "react";
import { Form, Input, Icon, Row, Col, Select, message } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
const { Option } = Select;

class RegistrationForm extends Component {
  state = {};

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const {
      getFieldDecorator,
      isFieldTouched,
      getFieldError
    } = this.props.form;
    return (
      <Form>
        <Row gutter={16}>
          <Col span={12}>
            <FormItem label="Username" required>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "This field is required",
                    whitespace: true
                  },
                  {
                    type: "string",
                    pattern: /^[a-z0-9]{6,32}$/i,
                    message: "Wrong Format only letters and numbers are allowed"
                  },
                  {
                    min: 6,
                    message: "Must be at least 6 characters",
                    transform: (value) => value && value.trim()
                  },
                  {
                    max: 32,
                    message: "Must be at most 32 characters"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  size="large"
                  required
                  placeholder="Your username here"
                />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Company Name" required>
              {getFieldDecorator("companyName", {
                rules: [
                  {
                    required: true,
                    message: "This field is required",
                    whitespace: true
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  size="large"
                  required
                  placeholder="Your company name here"
                />
              )}
            </FormItem>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={16}>
            <FormItem label="Email" required>
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    message: "This field is required",
                    whitespace: true
                  },
                  {
                    type: "email",
                    message: "Enter a valid email address"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  type="email"
                  size="large"
                  required
                  placeholder="Your email here"
                />
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="Gender" required>
              {getFieldDecorator("gender", {
                initialValue: "Male",
                rules: [
                  {
                    required: true,
                    message: "This field is required",
                    whitespace: true
                  }
                ]
              })(
                <Select size="large">
                  <Option value="Male">
                    <Icon type="man" size="large" className="mr-2" />Male
                  </Option>
                  <Option value="Female">
                    <Icon type="woman" size="large" className="mr-2" />Female
                  </Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <FormItem label="Password" required>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "This field is required",
                    whitespace: true
                  },
                  {
                    type: "string",
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,32}$/,
                    message:
                      "Must have 1 lowercase, 1 uppercase, 1 number, 1 special character"
                  },
                  {
                    min: 8,
                    message: "Must be at least 8 characters",
                    transform: (value) => value && value.trim()
                  },
                  {
                    max: 32,
                    message: "Must be at most 32 characters"
                  },
                  { validator: this.validateToNextPassword }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  size="large"
                  type="password"
                  required
                  placeholder="Your password here"
                />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Confirm Password" required>
              {getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "This field is required",
                    whitespace: true
                  },
                  { validator: this.compareToFirstPassword }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  size="large"
                  type="password"
                  required
                  placeholder="Confirm your password"
                />
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(RegistrationForm);

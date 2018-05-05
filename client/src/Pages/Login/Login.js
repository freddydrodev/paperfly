import React, { Component } from "react";
import { Col } from "antd";
import { Redirect } from "react-router-dom";

import Box from "../../components/LogPages/Box/Box.js";
import LoginForm from "./LoginForm.js";

class Login extends Component {
  LoginHandler = () => {
    const form = this.comp.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      //verification here

      console.log("Login: ", values);
      form.resetFields();
      this.props.history.push("/app/dashboard");
    });
  };

  render() {
    return (
      <Col>
        <Box
          btn={{ title: "Login", action: this.LoginHandler }}
          link={{ title: "Registration", to: "/registration" }}
          content={
            <LoginForm wrappedComponentRef={(comp) => (this.comp = comp)} />
          }
        />
      </Col>
    );
  }
}

export default Login;

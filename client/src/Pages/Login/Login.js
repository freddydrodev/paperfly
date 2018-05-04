import React, { Component } from "react";
import { Col } from "antd";

import Box from "../../components/LogPages/Box/Box.js";
import LoginForm from "./LoginForm.js";

class Login extends Component {
  render() {
    return (
      <Col>
        <Box content={<LoginForm />} />
      </Col>
    );
  }
}

export default Login;

import React, { Component } from "react";
import { Col } from "antd";

import Box from "../../components/LogPages/Box/Box.js";
import RegistrationForm from "./RegistrationForm.js";

class Registration extends Component {
  RegistrationHandler = () => {
    const form = this.comp.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      //verification here

      console.log("Received values of form: ", values);
      form.resetFields();
    });
  };

  render() {
    return (
      <Col>
        <Box
          btn={{ title: "Register", action: this.RegistrationHandler }}
          link={{ to: "/", title: "Login" }}
          content={
            <RegistrationForm
              wrappedComponentRef={(comp) => (this.comp = comp)}
            />
          }
        />
      </Col>
    );
  }
}

export default Registration;

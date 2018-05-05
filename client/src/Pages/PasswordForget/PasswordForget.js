import React, { Component } from "react";
import { Col, message } from "antd";
import { Redirect } from "react-router-dom";

import Box from "../../components/LogPages/Box/Box.js";
import PasswordForgetForm from "./PasswordForgetForm.js";

class PasswordForget extends Component {
  PasswordForgetHandler = () => {
    const form = this.comp.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      //verification here

      console.log("PasswordForget: ", values);
      message.success(
        `A recovery link has been sent to your email address "${values.email}"`,
        5
      );
      // form.resetFields();
      // this.props.history.push("/app/dashboard");
    });
  };

  render() {
    return (
      <Col>
        <Box
          btn={{ title: "Recover", action: this.PasswordForgetHandler }}
          link={{ title: "Login", to: "/" }}
          content={
            <PasswordForgetForm
              wrappedComponentRef={(comp) => (this.comp = comp)}
            />
          }
        />
      </Col>
    );
  }
}

export default PasswordForget;

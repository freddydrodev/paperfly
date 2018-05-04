import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import PropTypes from "prop-types";

import "./Box.less";

class Box extends Component {
  componentDidMount() {}
  render() {
    const {
      logo,
      description,
      title,
      onButtonRightClick,
      onButtonLeftClick
    } = this.props;
    return (
      <div className="logBox">
        <div className="logBoxHeader p-3">
          <span className="logo icon-react" />
          <div>
            <h1>PaperFly</h1>
            <h3>
              Do not have an account you can click register and create one now.
            </h3>
          </div>
        </div>
        <div className="px-3">
          <h2>Login</h2>
          {this.props.content}
        </div>
        <Row type="flex">
          <Col span={12}>
            <Button
              size="large"
              type="secondary"
              className="border-0 rounded-0 w-100 py-3"
              onClick={onButtonLeftClick}
            >
              Register
            </Button>
          </Col>
          <Col span={12}>
            <Button
              size="large"
              type="dark"
              htmlType="submit"
              className="border-0 rounded-0 w-100 py-3"
              onClick={onButtonRightClick}
            >
              Sign In
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Box;

Box.propTypes = {
  logo: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
  onButtonLeftClick: PropTypes.func.isRequired,
  onButtonRightClick: PropTypes.func.isRequired
};

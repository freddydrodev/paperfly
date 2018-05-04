import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
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
      link,
      btn
    } = this.props;
    return (
      <div className="logBox">
        <div className="logBoxHeader px-3 pt-3">
          <span className="logo icon-react" />
          <div>
            <h1>PaperFly</h1>
            {description && (
              <h3>
                Do not have an account you can click register and create one
                now.
              </h3>
            )}
          </div>
        </div>
        <div className="px-3">
          {title && <h2>{title}</h2>}
          {this.props.content}
        </div>
        <Row type="flex" className="border-top">
          <Col span={12}>
            <Button
              size="large"
              className="border-0 rounded-0 w-100 py-3 text-left bold uppercase"
            >
              <Link to={link.to}>{link.title}</Link>
            </Button>
          </Col>
          <Col span={12}>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="border-0 rounded-0 w-100 py-3 text-right bold uppercase"
              onClick={btn.action}
            >
              {btn.title}
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
  link: PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  btn: PropTypes.shape({
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }).isRequired
};

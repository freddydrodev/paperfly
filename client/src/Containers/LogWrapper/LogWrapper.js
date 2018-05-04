import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Row } from "antd";

import "./LogWrapper.less";
import routes from "../../Routes/LogRoutes.js";

class LogWrapper extends Component {
  render() {
    return <div className="vh-100 vw-100">
        <div className="bg-design" />
        <Row type="flex" justify="center" align="middle" className="vh-100 vw-100">
          <Switch>
            {routes.map((params) => (
              <Route {...params} key={params.title} />
            ))}
          </Switch>
        </Row>
      </div>;
  }
}

export default LogWrapper;

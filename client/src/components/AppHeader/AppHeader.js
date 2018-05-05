import React, { Component } from "react";
import {
  Layout,
  Menu,
  Icon,
  Input,
  Row,
  Col,
  Button,
  Badge,
  Tooltip
} from "antd";
import { Link } from "react-router-dom";

import config from "./menuTopRight.js";

const { Header } = Layout;
const MenuItem = Menu.Item;
const { Search } = Input;
const menuRight = (
  <Menu mode="horizontal">
    {config.map((menu) => (
      <MenuItem key={menu.title} className={`p-0 m-0 h-100`}>
        {menu.content ? (
          <Button
            className={`border-0 rounded-0 no-shadow`}
            style={{
              height: 64
            }}
          />
        ) : (
          <Badge>
            <Tooltip title={menu.title || ""}>
              <Button
                icon={menu.icon}
                shape={`circle`}
                className={`border-0 rounded-0 no-shadow text-center`}
                style={{
                  lineHeight: "64px",
                  height: 64,
                  width: 52,
                  fontSize: 24
                }}
              />
            </Tooltip>
          </Badge>
        )}
      </MenuItem>
    ))}
  </Menu>
);
class AppHeader extends Component {
  render() {
    return (
      <Header className="p-0 AppHeader">
        <Row type="flex" gutter={16} justify="space-between">
          <Col>
            <Input
              prefix={<Icon type="search" />}
              className={`h-100`}
              placeholder="Search something here..."
            />
          </Col>
          <Col>
            <Icon type="api" style={{ fontSize: 24 }} />
          </Col>
          <Col>{menuRight}</Col>
        </Row>
      </Header>
    );
  }
}

export default AppHeader;

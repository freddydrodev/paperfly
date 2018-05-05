import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;
const MenuItem = Menu.Item;
const menuLeft = (
  <Menu>
    <MenuItem>
      <NavLink to="/app/dashboard" exact>
        <Icon type="icon-align-right" />
        <span>Dashboard</span>
      </NavLink>
    </MenuItem>
  </Menu>
);
class AppHeader extends Component {
  render() {
    return <Header className="px-3">header</Header>;
  }
}

export default AppHeader;

import React, { Component } from "react";
import { Layout, Menu, Icon, Button, Collapse } from "antd";
import { NavLink } from "react-router-dom";

import config from "./siderMenu.js";
import "./AppSider.less";

const { Sider } = Layout;
const MenuItem = Menu.Item;
const iconStyle = { fontSize: 24, lineHeight: "64px", height: 64 };

class AppSider extends Component {
  render() {
    const { collapsed, collapseHandler } = this.props;
    const menuLeft = <Menu className="leftMenu">
        {config.map((menu) => (
          <MenuItem
            key={menu.title}
            className={`m-0 flex middle ${
              collapsed ? "center p-0" : "left"
            } border-0`}
          >
            <NavLink
              to={menu.to}
              exact={menu.exact ? true : false}
              className={`flex middle w-100 ${
                collapsed ? "center" : "left"
              }`}
            >
              <Icon type={menu.icon} style={iconStyle} />
              <span style={{ fontSize: 13 }}>{menu.title}</span>
            </NavLink>
          </MenuItem>
        ))}
      </Menu>;
    return (
      <Sider
        collapsed={collapsed}
        collapsedWidth={64}
        className="vh-100 fixed left top AppSider"
      >
        <Button
          icon={collapsed ? "icon-align-right" : "icon-align-left"}
          type="primary"
          shape="circle"
          size="large"
          className="rounded-0 w-100"
          style={iconStyle}
          onClick={collapseHandler}
        />
        {menuLeft}
      </Sider>
    );
  }
}

export default AppSider;

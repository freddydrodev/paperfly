import React, { Component } from "react";
import { Layout, Collapse } from "antd";
import AppSider from "../../components/AppSider/AppSider";
import AppHeader from "../../components/AppHeader/AppHeader";

const { Content } = Layout;

class AppWrapper extends Component {
  state = {
    collapse: false
  };

  collapseHandler = () => {
    const collapse = this.state.collapse;

    this.setState({
      collapse: !collapse
    });
  };

  render() {
    const { collapse } = this.state;
    return (
      <Layout>
        <AppSider collapseHandler={this.collapseHandler} collapsed={collapse} />
        <Layout style={{ marginLeft: collapse ? 64 : 200 }}>
          <AppHeader />
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppWrapper;

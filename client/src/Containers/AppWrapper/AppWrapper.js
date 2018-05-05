import React, { Component } from "react";
import { Layout } from "antd";
import AppSider from "../../components/AppSider/AppSider";
import AppHeader from "../../components/AppHeader/AppHeader";

const { Content } = Layout;

class AppWrapper extends Component {
  render() {
    return (
      <Layout>
        <AppSider />
        <Layout>
          <AppHeader />
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppWrapper;

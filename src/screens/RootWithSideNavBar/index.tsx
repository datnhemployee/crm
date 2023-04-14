import React from "react"
import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import SideBar from "./Sidebar"
import { Content, Screen, Sider } from "./components"

type RootWithSideNavBarProps = {}

const RootWithSideNavBar: React.FunctionComponent<
  RootWithSideNavBarProps
> = () => (
  <Screen>
    <Layout.Header>
      <div className="logo" />
    </Layout.Header>

    <Layout>
      <Sider collapsible trigger={null}>
        <SideBar />
      </Sider>

      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Screen>
)

export default RootWithSideNavBar

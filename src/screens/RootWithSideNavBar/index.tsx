import { Layout } from "antd"
import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./Sidebar"
import { Content, Screen } from "./components"
import { forwardCollapse } from "./context"

type RootWithSideNavBarProps = {}

const RootWithSideNavBar: React.FunctionComponent<
  RootWithSideNavBarProps
> = () => (
  <Screen>
    <Header />

    <Layout>
      <SideBar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Screen>
)

export default forwardCollapse(RootWithSideNavBar)

import { Layout } from "antd"
import SidebarComp from "components/Sidebar"
import React, { useContext } from "react"
import styled from "styled-components"
import { CollapseContext } from "../context"
import useHook from "./hook"

const Sider = styled(Layout.Sider)`
  overflow-y: scroll;
`

type SideBarProps = {}

const SideBar: React.FunctionComponent<SideBarProps> = () => {
  const { isCollapsed } = useContext(CollapseContext)
  const hook = useHook()

  return (
    <Sider collapsible trigger={null} collapsed={isCollapsed}>
      <SidebarComp
        mode="inline"
        onSelect={hook.onSelect}
        items={hook.items.data}
      />
    </Sider>
  )
}

export default SideBar

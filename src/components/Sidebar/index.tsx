import { Menu } from "antd"
import React from "react"
import styled from "styled-components"

const SidebarFullHeight = styled(Menu)`
  min-height: 100%;
`

type SidebarProps = React.ComponentProps<typeof Menu>

type SidebarComp = React.FunctionComponent<SidebarProps>

const Sidebar: SidebarComp = (props) => <SidebarFullHeight {...props} />

export default Sidebar

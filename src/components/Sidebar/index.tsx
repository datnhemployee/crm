import { Menu } from "antd"
import React from "react"

type SidebarProps = React.ComponentProps<typeof Menu>

type SidebarComp = React.FunctionComponent<SidebarProps>

const Sidebar: SidebarComp = (props) => <Menu {...props} />

export default Sidebar

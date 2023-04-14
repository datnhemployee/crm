import { Menu, MenuProps } from "antd"
import React, { useState } from "react"
import styled from "styled-components"

const TransparentMenu = styled(Menu)`
  background-color: transparent;
`

type TopProps = Pick<MenuProps, "items"> & {
  defaultKey: string
}

const TopNavBar: React.FunctionComponent<TopProps> = (props) => {
  const [selectedKey, setSelectedKey] = useState([props?.defaultKey])

  const onClick: MenuProps["onClick"] = (e) => setSelectedKey([e?.key])

  return (
    <TransparentMenu
      onClick={onClick}
      mode="horizontal"
      selectedKeys={selectedKey}
      {...props}
    />
  )
}

export default TopNavBar

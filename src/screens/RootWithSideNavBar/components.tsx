import { Layout } from "antd"
import styled from "styled-components"

export const Screen = styled(Layout)`
  overflow: hidden;
  height: 100vh;
`
export const Sider = styled(Layout.Sider)`
  overflow-y: scroll;
`
export const Content = styled(Layout)`
  height: 100%;
  padding: 24px;
`

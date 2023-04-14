import { Col, Row, Space } from "antd"
import React from "react"

type HeaderLeftProps = React.PropsWithChildren<{}>

const HeaderLeft: React.FunctionComponent<HeaderLeftProps> = (props) => (
  <Col span={8}>
    <Space direction="horizontal">{props.children}</Space>
  </Col>
)

type HeaderRightProps = React.PropsWithChildren<{}>

const HeaderRight: React.FunctionComponent<HeaderRightProps> = (props) => (
  <Col span={8} offset={8}>
    <Row justify="end">
      <Space>{props.children}</Space>
    </Row>
  </Col>
)

type HeaderProps = React.PropsWithChildren<{}>
type CompoundedHeader<P> = React.FunctionComponent<P> & {
  Left: typeof HeaderLeft
  Right: typeof HeaderRight
}

const Header: CompoundedHeader<HeaderProps> = (props) => (
  <Row>{props.children} </Row>
)

Header.Left = HeaderLeft
Header.Right = HeaderRight

type DashboardScreenProps = {}
type CompoundedDashboard<P> = React.FunctionComponent<P> & {
  Header: typeof Header
}

const DashboardScreen: CompoundedDashboard<
  React.PropsWithChildren<DashboardScreenProps>
> = (props) => {
  return (
    <Space direction="vertical" size="large">
      {props.children}
    </Space>
  )
}

DashboardScreen.Header = Header

export default DashboardScreen

import { Space, SpaceProps } from "antd"
import React from "react"

type BlankProps = SpaceProps

const Blank: React.FunctionComponent<BlankProps> = (props) => {
  return (
    <Space direction="horizontal" size="large" {...props}>
      <div />
      <div />
    </Space>
  )
}

export default Blank

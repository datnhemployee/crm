import { Typography } from "antd"
import React from "react"
import styled from "styled-components"

const AntTitle = styled(Typography.Title)`
  &.ant-typography {
    color: ${(props) => props?.color};
    margin: 0px;
  }
`

type TitleProps = React.ComponentProps<typeof Typography["Title"]> & {}

const Title: React.FunctionComponent<React.PropsWithChildren<TitleProps>> = (
  props
) => <AntTitle {...props}>{props.children}</AntTitle>

export default Title

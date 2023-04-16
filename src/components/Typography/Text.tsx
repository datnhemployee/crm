import { Typography } from "antd"
import React from "react"
import styled from "styled-components"

const AntText = styled(Typography.Text)`
  &.ant-typography {
    color: ${(props) => props?.color};
    margin: 0px;
    text-align: ${(props) => (props as any)?.align};
  }
`

type TextProps = React.ComponentProps<typeof Typography["Text"]> & {
  align?: "center" | "left" | "right"
}

const Text: React.FunctionComponent<React.PropsWithChildren<TextProps>> = (
  props
) => <AntText {...props}>{props.children}</AntText>

export default Text

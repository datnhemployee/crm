import React from "react"
import { TTheme } from "./default"
import { ConfigProvider, ThemeConfig, theme } from "antd"

const useToken = () => theme.useToken().token as TTheme["token"]
const forwardTheme =
  <T extends ThemeConfig>(theme: T, Comp: React.ElementType) =>
  (props: any) =>
    (
      <ConfigProvider theme={theme}>
        <Comp {...props} />
      </ConfigProvider>
    )

const CrmTheme = {
  useToken,
  forwardTheme,
}
export default CrmTheme

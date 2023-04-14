/* eslint-disable jsx-a11y/alt-text */
import React, { useMemo } from "react"
import AntIcon from "@ant-design/icons"
import CrmTheme from "theme"

type AntIconProps = React.ComponentProps<typeof AntIcon>

type PngIconProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>
type IconProps = Omit<PngIconProps & AntIconProps, "type" | "size"> & {
  type?: "svg" | "png"
  size?: "large" | "medium" | "small"
  isDarkTheme?: boolean
}

const useSize = (props: IconProps) => {
  const currentThemeToken = CrmTheme.useToken()

  const size = useMemo(() => {
    switch (props?.size) {
      case "large":
        return currentThemeToken.iconSizeL
      case "medium":
        return currentThemeToken.iconSizeM
      case "small":
      default:
        return currentThemeToken.iconSizeS
    }
  }, [props?.size, currentThemeToken])

  return size
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const size = useSize(props)
  const themeToken = CrmTheme.useToken()

  switch (props?.type) {
    case "svg":
      return (
        <AntIcon
          {...(props as AntIconProps)}
          style={{
            color: props?.isDarkTheme
              ? themeToken.colorIconDark
              : themeToken.colorPrimary,
            fontSize: size,
          }}
        />
      )
    case "png":
    default:
      return (
        <img
          {...(props as PngIconProps)}
          style={{ height: size, width: size }}
        />
      )
  }
}

Icon.defaultProps = {
  size: "small",
  isDarkTheme: false,
}

export default Icon

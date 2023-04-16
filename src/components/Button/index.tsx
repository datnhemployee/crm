import { Button as AntButton } from "antd"
import Icon from "components/Icon"
import React from "react"
import ButtonUploadAvatar from "./ButtonAvatar"

type PureButtonProps = Omit<React.ComponentProps<typeof AntButton>, "type"> & {
  type?: "icon" | "status" | "action" | "avatar"
  iconType?: React.ComponentProps<typeof Icon>["type"]
  iconSrc?: string
  iconComponent?: React.ComponentProps<typeof Icon>["component"]
  iconIsDarkTheme?: React.ComponentProps<typeof Icon>["isDarkTheme"]
}
type ButtonProps = PureButtonProps

const Button: React.FunctionComponent<React.PropsWithChildren<ButtonProps>> = (
  props
) => {
  switch (props.type) {
    case "avatar":
      return <ButtonUploadAvatar {...props} />

    case "action":
      return (
        <AntButton
          {...props}
          onClick={props?.onClick}
          type="primary"
          icon={
            !!props?.iconComponent && (
              <Icon
                type={props?.iconType}
                component={props?.iconComponent}
                src={(props as PureButtonProps)?.iconSrc}
                isDarkTheme={props?.iconIsDarkTheme ?? true}
              />
            )
          }
          size="large"
        >
          {props.children}
        </AntButton>
      )

    case "status":
      return (
        <AntButton
          {...props}
          onClick={props?.onClick}
          type="primary"
          shape="round"
          size="large"
        >
          {props.children}
        </AntButton>
      )

    case "icon":
    default:
      return (
        <AntButton
          onClick={props?.onClick}
          shape="circle"
          icon={
            <Icon
              type={props?.iconType}
              component={props?.iconComponent}
              src={(props as PureButtonProps)?.iconSrc}
              isDarkTheme={props?.iconIsDarkTheme}
            />
          }
          size="large"
          {...props}
          type="text"
        />
      )
  }
}

export default Button

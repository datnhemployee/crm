import { Input, Popconfirm } from "antd"
import Language from "lang"
import React, { useState } from "react"

export type PopUpProps = Pick<
  React.ComponentProps<typeof Popconfirm>,
  "title" | "okText" | "cancelText" | "description" | "onConfirm" | "onCancel"
> & {
  onChangeOpen?: React.ComponentProps<typeof Popconfirm>["onOpenChange"]
}

const PopUp: React.FunctionComponent<React.PropsWithChildren<PopUpProps>> = (
  props
) => {
  const [value, setValue] = useState("")

  const onChangeOpen: React.ComponentProps<
    typeof Popconfirm
  >["onOpenChange"] = (...args) => {
    setValue("")
    props?.onChangeOpen?.(...args)
  }
  const onChangeValue: React.ComponentProps<typeof Input>["onChange"] = (
    event
  ) => setValue(event.target.value)
  const onCancel = () => {
    setValue("")
    props?.onCancel?.()
  }

  return (
    <Popconfirm
      placement="bottomRight"
      description={
        props?.description ?? (
          <Input
            value={value}
            placeholder={Language.popUp.exampleByName}
            onChange={onChangeValue}
          />
        )
      }
      onConfirm={props?.onConfirm}
      okText={Language.popUp.search}
      cancelText={Language.popUp.clear}
      onOpenChange={onChangeOpen}
      onCancel={onCancel}
      {...props}
    >
      {props.children}
    </Popconfirm>
  )
}

export default PopUp

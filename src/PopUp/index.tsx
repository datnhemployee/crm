import { Input, Popconfirm } from "antd"
import Language from "lang"
import React, { useState } from "react"

type PopUpProps = Pick<
  React.ComponentProps<typeof Popconfirm>,
  "title" | "okText" | "cancelText"
>

const PopUp: React.FunctionComponent<React.PropsWithChildren<PopUpProps>> = (
  props
) => {
  const [value, setValue] = useState("")

  const onChangeOpen = () => setValue("")
  const onChangeValue: React.ComponentProps<typeof Input>["onChange"] = (
    event
  ) => setValue(event.target.value)
  const onConfirm = async () => {}
  const onCancel = () => setValue("")

  return (
    <Popconfirm
      placement="bottomRight"
      title={props?.title}
      description={
        <Input
          value={value}
          placeholder={Language.popUp.exampleByName}
          onChange={onChangeValue}
        />
      }
      onConfirm={onConfirm}
      okText={Language.popUp.search}
      cancelText={Language.popUp.clear}
      onOpenChange={onChangeOpen}
      onCancel={onCancel}
    >
      {props.children}
    </Popconfirm>
  )
}

export default PopUp

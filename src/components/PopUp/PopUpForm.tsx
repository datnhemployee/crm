import React, { useRef } from "react"
import PopUp, { PopUpProps } from "."
import Form, { FormProps } from "components/Form"

type PopUpFormProps = PopUpProps & FormProps

const PopUpForm: React.FunctionComponent<
  React.PropsWithChildren<PopUpFormProps>
> = (props) => {
  const refForm = useRef<React.ElementRef<typeof Form> | null>(null)
  const onChangeOpen = () => {
    props?.form?.resetFields?.()
  }
  const onCancel = () => {
    props?.form?.resetFields?.()
  }
  const onConfirm = () => {
    props?.form?.submit?.()
  }

  return (
    <PopUp
      {...props}
      onChangeOpen={onChangeOpen}
      onCancel={onCancel}
      onConfirm={onConfirm}
      description={
        <Form
          ref={refForm}
          onFinish={props?.onFinish}
          onFinishFailed={props?.onFinishFailed}
          inputList={props?.inputList}
        />
      }
    >
      {props.children}
    </PopUp>
  )
}

export default PopUpForm

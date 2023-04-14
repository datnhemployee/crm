import { Form as AntForm, FormInstance } from "antd"
import React, { forwardRef } from "react"
import styled from "styled-components"
import { Option } from "types"

const CustomForm = styled(AntForm)`
  max-height: 600px;
  overflow-y: scroll;
`

export type FormInputProps = React.ComponentProps<typeof AntForm["Item"]> & {
  key?: string
  inputType?: "secure" | "date" | "select" | "paragraph"
  options?: Option[]
  disabled?: boolean
}

export type FormProps = Pick<
  React.ComponentProps<typeof AntForm>,
  | "onFinish"
  | "onFinishFailed"
  | "form"
  | "labelAlign"
  | "defaultValue"
  | "children"
> & {
  renderHeader?: React.FunctionComponent<any>
  renderFooter?: React.FunctionComponent<any>
  inputList?: FormInputProps[]
}

type TForm = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<FormProps> & React.RefAttributes<FormInstance>
>

const BasicForm: TForm = forwardRef((props, ref) => (
  <CustomForm
    ref={ref}
    name="basic"
    labelCol={{ span: 8 }}
    autoComplete="off"
    size="large"
    {...(props as React.ComponentProps<typeof AntForm>)}
  >
    {props?.children}
  </CustomForm>
))

BasicForm.defaultProps = {
  inputList: [],
}

export default BasicForm

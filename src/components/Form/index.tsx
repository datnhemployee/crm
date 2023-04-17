import {
  DatePicker as AntDatePicker,
  Form as AntForm,
  Input as AntInput,
  Select as AntSelect,
  FormInstance,
} from "antd"
import { ModalFormProps } from "components/Modal/ModalForm"
import { DATE_FORMAT } from "constants/date"
import React, { forwardRef } from "react"
import styled from "styled-components"
import { Option } from "types"
import Lodash from "utils/lodash"

const CustomForm = styled(AntForm)`
  max-height: 600px;
  overflow-y: scroll;
`
const FormItem = styled(AntForm.Item)`
  margin-right: 16px;
  margin-left: 16px;
`
const DatePicker = styled(AntDatePicker)`
  display: flex;
`

export type FormInputProps = React.ComponentProps<typeof AntForm["Item"]> & {
  key?: string
  inputType?: "secure" | "date" | "select" | "paragraph"
  options?: Option[]
  disabled?: boolean
}

const setOptions = (
  {
    columnList,
    name,
    options,
  }: {
    columnList: NonNullable<ModalFormProps["inputList"]>
    name: string
    options: any[]
  },
  opts?: { mapper?: (item: any) => Option }
) => {
  const mapper = !opts?.mapper
    ? (item: any) => ({ value: item?.value, label: item?.label })
    : opts?.mapper
  const result: ModalFormProps["inputList"] = Lodash.deepClone(
    columnList
  ).map?.((column) => {
    if (column?.name === name) {
      column.options = Lodash.deepClone(options).map(mapper)
    }
    return column
  })
  return result
}

const setDisable = ({
  columnList,
  name,
  isDisabled,
}: {
  columnList: NonNullable<ModalFormProps["inputList"]>
  name: string
  isDisabled: boolean
}) => {
  const result: ModalFormProps["inputList"] = Lodash.deepClone(
    columnList
  ).map?.((column) => {
    if (column?.name === name) {
      column.disabled = isDisabled
    }
    return column
  })
  return result
}

const InputList = {
  setOptions,
  setDisable,
}

export type FormProps = Pick<
  React.ComponentProps<typeof AntForm>,
  "onFinish" | "onFinishFailed" | "form" | "labelAlign" | "defaultValue"
> & {
  renderHeader?: React.FunctionComponent<any>
  renderFooter?: React.FunctionComponent<any>
  inputList?: FormInputProps[]
  onSelect?: (inputProps: FormInputProps) => void
}

type TForm = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<FormProps> & React.RefAttributes<FormInstance>
> & {
  InputList?: typeof InputList
}

const Form: TForm = forwardRef((props, ref) => {
  const onSelect =
    (
      inputProps: FormInputProps
    ): React.ComponentProps<typeof AntSelect>["onChange"] =>
    () =>
      props?.onSelect?.(inputProps as FormInputProps)

  return (
    <CustomForm
      ref={ref}
      name="basic"
      labelCol={{ span: 8 }}
      autoComplete="off"
      size="large"
      {...(props as React.ComponentProps<typeof AntForm>)}
    >
      {props?.renderHeader?.({})}

      {props?.inputList?.map?.((inputProps) => (
        <FormItem {...inputProps}>
          {inputProps?.inputType === "paragraph" ? (
            <AntInput.TextArea rows={4} />
          ) : inputProps?.inputType === "select" ? (
            <AntSelect
              placeholder="Select a option and change input text above"
              onChange={onSelect(inputProps)}
              allowClear
            >
              {inputProps?.options?.map((option) => (
                <AntSelect.Option value={option.value}>
                  {option.label}
                </AntSelect.Option>
              ))}
            </AntSelect>
          ) : inputProps?.inputType === "secure" ? (
            <AntInput.Password />
          ) : inputProps?.inputType === "date" ? (
            <DatePicker format={DATE_FORMAT.DD_MM_YYYY} />
          ) : (
            <AntInput disabled={inputProps?.disabled} />
          )}
        </FormItem>
      ))}

      {props?.renderFooter?.({})}
    </CustomForm>
  )
})

Form.defaultProps = {
  inputList: [],
}

Form.InputList = InputList

export default Form

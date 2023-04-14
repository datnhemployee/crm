import {
  DatePicker as AntDatePicker,
  Form as AntForm,
  Input as AntInput,
  Select as AntSelect,
  Input,
  Modal,
} from "antd"
import { DATE_FORMAT } from "constants/date"
import Language from "lang"
import { FunctionComponent, useRef } from "react"
import styled from "styled-components"

const Form = styled(AntForm)`
  max-height: 600px;
  overflow-y: scroll;
`
const FormItem = styled(Form.Item)`
  margin-right: 16px;
  margin-left: 16px;
`
const DatePicker = styled(AntDatePicker)`
  display: flex;
`

type Item<Arr> = Arr extends (infer I)[] ? I : never
type Option = { value: string; label: string }

export type ModalFormProps = Pick<
  React.ComponentProps<typeof Modal>,
  "open" | "onCancel" | "title"
> &
  Pick<
    React.ComponentProps<typeof AntForm>,
    "onFinish" | "onFinishFailed" | "form"
  > & {
    inputList: (React.ComponentProps<typeof AntForm["Item"]> & {
      inputType?: "secure" | "date" | "select" | "paragraph"
      options?: Option[]
    })[]
    renderHeader?: React.FunctionComponent<any>
    renderFooter?: React.FunctionComponent<any>
  }

type ModalFormComp = FunctionComponent<ModalFormProps> & {
  createOptionsFromLanguage: (languagKey: keyof typeof Language) => Option[]
}

const ModalForm: ModalFormComp = (props) => {
  const formRef = useRef<React.ElementRef<typeof AntForm>>(null)

  const onOk = () => formRef.current?.submit?.()

  const onFinish: ModalFormProps["onFinish"] = (...args) => {
    props?.onFinish?.(...args)
  }

  const onCancel: ModalFormProps["onCancel"] = (...args) => {
    props?.onCancel?.(...args)
  }

  const onSelect =
    (
      inputProps: Item<ModalFormProps["inputList"]>
    ): React.ComponentProps<typeof AntSelect>["onChange"] =>
    (value) =>
      formRef.current?.setFieldsValue?.({
        [inputProps.name as string]: value,
      })

  return (
    <Modal
      title={props.title}
      centered
      open={props?.open}
      onOk={onOk}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form
        ref={formRef}
        name="basic"
        labelCol={{ span: 8 }}
        onFinish={onFinish}
        onFinishFailed={props?.onFinishFailed}
        autoComplete="off"
        size="large"
        form={props?.form}
      >
        {props?.renderHeader?.({})}
        {props.inputList.map((inputProps) => (
          <FormItem {...inputProps}>
            {inputProps?.inputType === "paragraph" ? (
              <Input.TextArea rows={4} />
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
              <AntInput />
            )}
          </FormItem>
        ))}

        {props?.renderFooter?.({})}
      </Form>
    </Modal>
  )
}

ModalForm.createOptionsFromLanguage = (languageKey) =>
  Object.keys(Language[languageKey] as object).map((key) => ({
    value: key,
    label: (Language[languageKey] as object)[
      key as keyof typeof Language[typeof languageKey]
    ],
  }))

export default ModalForm

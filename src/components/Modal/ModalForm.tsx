import { Modal } from "antd"
import Form, { FormProps } from "components/Form"
import Language from "lang"
import { FunctionComponent, useRef } from "react"
import { Option } from "types"

export type ModalFormProps = Pick<
  React.ComponentProps<typeof Modal>,
  "open" | "onCancel" | "title"
> &
  FormProps

type ModalFormComp = FunctionComponent<ModalFormProps> & {
  createOptionsFromLanguage: (languagKey: keyof typeof Language) => Option[]
}

const ModalForm: ModalFormComp = (props) => {
  const formRef = useRef<React.ElementRef<typeof Form>>(null)

  const onOk = () => formRef.current?.submit?.()

  return (
    <Modal
      title={props.title}
      centered
      open={props?.open}
      onOk={onOk}
      onCancel={props?.onCancel}
      destroyOnClose
    >
      <Form
        ref={formRef}
        onFinish={props?.onFinish}
        onFinishFailed={props?.onFinishFailed}
        form={props?.form}
        renderHeader={props?.renderHeader}
        renderFooter={props?.renderFooter}
        onSelect={props?.onSelect}
        inputList={props?.inputList}
      />
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

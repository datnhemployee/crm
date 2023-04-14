import { Modal } from "antd"
import React from "react"

type ModalConfirmProps = React.ComponentProps<typeof Modal>

const ModalConfirm: React.FunctionComponent<
  React.PropsWithChildren<ModalConfirmProps>
> = (props) => {
  return (
    <Modal centered destroyOnClose {...props}>
      {props.children}
    </Modal>
  )
}

export default ModalConfirm

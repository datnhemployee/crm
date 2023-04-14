import { Modal } from "antd"
import React, { useEffect } from "react"
import Promisy from "utils/promisy"

type ModalConfirmProps = React.ComponentProps<typeof Modal>

type TModalConfirm = React.FunctionComponent<
  React.PropsWithChildren<ModalConfirmProps>
> & {
  delayForOpen?: () => Promise<void>
}

const ModalConfirm: TModalConfirm = (props) => {
  return (
    <Modal centered destroyOnClose {...props}>
      {props.children}
    </Modal>
  )
}

ModalConfirm.delayForOpen = async () => {
  await Promisy.delay(300)
}

export default ModalConfirm

import PopUp from "components/PopUp"
import { Form, Space } from "antd"
import Assets from "asset"
import Button from "components/Button"
import ModalConfirm from "components/Modal/ModalConfirm"
import ModalForm from "components/Modal/ModalForm"
import DashboardScreen from "components/Screen/DashboardScreen"
import Table from "components/Table"
import {
  INPUT_LIST_RESET_PASSWORD,
  INPUT_LIST_USER_PROFILE,
  USER_COLUMN_LIST,
} from "constants/list"
import Language from "lang"
import MOCK_USER_LIST from "mock/user"
import User, { createUserForm } from "model/user"
import React, { useState } from "react"
import { AvatarWrapper } from "./components"

type UserManagementProps = {}

const UserManagement: React.FunctionComponent<UserManagementProps> = () => {
  const [isOpenAddUser, setOpenAddUser] = useState(false)

  const [isOpenActiveUser, setOpenActiveUser] = useState(false)
  const [activeUser, setActiveUser] = useState<User | null>(null)

  const [isOpenEditUser, setOpenEditUser] = useState(false)
  const [editUserForm] = Form.useForm()

  const [isOpenResetPassword, setOpenResetPassword] = useState(false)
  const [resetPasswordForm] = Form.useForm()
  const [userResetPassword, setUserResetingPassword] = useState<User | null>(
    null
  )

  const onToggleActiveUser = (user: User) => () => {
    setOpenActiveUser(true)
    setActiveUser(user)
  }
  const onResetPassword = (user: User) => () => {
    setUserResetingPassword(user)
    setOpenResetPassword(true)
  }
  const onCancelResetPassword = () => {
    resetPasswordForm.resetFields()
    setOpenResetPassword(false)
  }
  const onFinishResetPassword = () => {
    resetPasswordForm.resetFields()
    setOpenResetPassword(false)
  }

  const onClickAddUser = () =>
    setOpenAddUser((prevOpenAddUser) => !prevOpenAddUser)
  const onFinishAddUser = () => {
    setOpenAddUser(false)
  }
  const onCancelAddUser = () => {
    setOpenAddUser(false)
  }

  const onClickEditUser = (user: User) => () => {
    const userForm = createUserForm(user)
    editUserForm.setFieldsValue(userForm)
    setOpenEditUser(true)
  }
  const onFinishEditUser = () => {
    setOpenEditUser(false)
  }
  const onCancelEditUser = () => {
    setOpenEditUser(false)
  }

  const onOkActivateUser = () => setOpenActiveUser(false)
  const onCancelActivateUser = () => setOpenActiveUser(false)

  const USER_COLUMNS_WITH_ACTIONS = USER_COLUMN_LIST.concat([
    {
      title: "Actions",
      key: "userColumn-actions",
      fixed: "right",
      width: "50px",
      align: "right",
      render: (_: any, user: User) => (
        <Space size="small">
          <Button
            type="icon"
            onClick={onClickEditUser(user)}
            iconSrc={Assets.Edit}
          />

          <Button
            type="icon"
            iconType="svg"
            onClick={onToggleActiveUser(user)}
            iconComponent={
              user.disabled ? Assets.UserActiveSvg : Assets.UserDeactiveSvg
            }
          />

          <Button
            type="icon"
            iconType="svg"
            onClick={onResetPassword(user)}
            iconComponent={Assets.ResetPasswordSvg}
          />
        </Space>
      ),
    },
  ])

  const renderAvatarAddNewUser = () => (
    <AvatarWrapper size="large" direction="vertical">
      <Button type="avatar" />
      <div />
    </AvatarWrapper>
  )

  const renderAvatarEditUser = () => (
    <AvatarWrapper size="large" direction="vertical">
      <Button type="avatar" />
      <div />
    </AvatarWrapper>
  )

  return (
    <DashboardScreen>
      <DashboardScreen.Header>
        <DashboardScreen.Header.Left>
          <Button type="action" onClick={onClickAddUser}>
            {Language.userManagement.addNewUser}
          </Button>
        </DashboardScreen.Header.Left>

        <DashboardScreen.Header.Right>
          <Button
            type="action"
            iconType="svg"
            iconComponent={Assets.ExportExcel}
          >
            {Language.userManagement.exportExcel}
          </Button>

          <Button type="action" iconType="svg" iconComponent={Assets.ExportCvs}>
            {Language.userManagement.exportCsv}
          </Button>

          <PopUp
            title={Language.popUp.searchByName}
            okText={Language.popUp.search}
            cancelText={Language.popUp.clear}
          >
            <Button
              type="action"
              iconType="svg"
              iconComponent={Assets.SearchSvg}
            >
              {Language.action.search}
            </Button>
          </PopUp>
        </DashboardScreen.Header.Right>
      </DashboardScreen.Header>

      <Table columns={USER_COLUMNS_WITH_ACTIONS} dataSource={MOCK_USER_LIST} />

      <ModalForm
        title={Language.userManagement.addNewUser}
        inputList={INPUT_LIST_USER_PROFILE}
        open={isOpenAddUser}
        onCancel={onCancelAddUser}
        onFinish={onFinishAddUser}
        renderHeader={renderAvatarAddNewUser}
      />

      <ModalForm
        title={Language.userManagement.editUser}
        inputList={INPUT_LIST_USER_PROFILE}
        open={isOpenEditUser}
        onCancel={onCancelEditUser}
        onFinish={onFinishEditUser}
        renderHeader={renderAvatarEditUser}
        form={editUserForm}
      />

      <ModalConfirm
        title={
          activeUser?.disabled
            ? Language.popUp.activateUser
            : Language.popUp.deactivateUser
        }
        okText={
          activeUser?.disabled
            ? Language.popUp.activate
            : Language.popUp.deactivate
        }
        cancelText={Language.popUp.cancel}
        open={isOpenActiveUser}
        onCancel={onCancelActivateUser}
        onOk={onOkActivateUser}
      >
        {activeUser?.fullName
          ? Language.format?.(
              activeUser?.disabled
                ? Language.popUp.areYouSureYouWantToActivate
                : Language.popUp.areYouSureYouWantToDeactivate,
              { fullName: activeUser?.fullName }
            )
          : ""}
      </ModalConfirm>

      <ModalForm
        title={Language.format?.(Language.popUp.resetPasswordFor, {
          fullName: userResetPassword?.fullName,
        })}
        inputList={INPUT_LIST_RESET_PASSWORD}
        open={isOpenResetPassword}
        onCancel={onCancelResetPassword}
        onFinish={onFinishResetPassword}
        form={resetPasswordForm}
      />
    </DashboardScreen>
  )
}

export default UserManagement

import { MenuProps } from "antd"
import { ColumnsType } from "antd/es/table"
import Assets from "asset"
import Button from "components/Button"
import Icon from "components/Icon"
import ModalForm, { ModalFormProps } from "components/Modal/ModalForm"
import Language from "lang"
import User from "model/user"
import ROUTE_NAME from "routes/name"
import Compare from "utils/compare"
import Constants from "./constants"
import Validation from "utils/validation"
import { Store } from "model/store"

export const STORE_COLUMN_LIST = [
  {
    title: "POS Code",
    dataIndex: "posCode",
    key: "storeColum-posCode",
    fixed: "left",
    width: "50px",
    sorter: (source: Required<Store>, dest: Required<Store>) =>
      Compare.ascendingString(source.posCode, dest.posCode),
  },
  {
    title: "Store Name",
    dataIndex: "storeName",
    key: "storeColum-storeName",
    fixed: "left",
    width: "100px",
    sorter: (source: Required<Store>, dest: Required<Store>) =>
      Compare.ascendingString(source.storeName, dest.storeName),
  },
  {
    title: "Partner",
    dataIndex: "partner",
    key: "storeColum-partner",
    width: "100px",
    sorter: (source: Required<Store>, dest: Required<Store>) =>
      Compare.ascendingString(source.partner, dest.partner),
  },
  {
    title: "Province",
    dataIndex: "province",
    key: "storeColum-province",
    width: "100px",
    sorter: (source: Required<Store>, dest: Required<Store>) =>
      Compare.ascendingString(source.province, dest.province),
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "storeColum-address",
    width: "200px",
    sorter: (source: Required<Store>, dest: Required<Store>) =>
      Compare.ascendingString(source.partner, dest.partner),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "storeColum-status",
    width: "50px",
    fixed: "right",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "storeColum-action",
    width: "50px",
    fixed: "right",
  },
]

export const USER_COLUMN_LIST: ColumnsType<any> = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "userColumn-fullName",
    fixed: "left",
    width: "50px",
    sorter: (source: User, dest: User) =>
      Compare.ascendingString(source.fullName, dest.fullName),
  },
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userColumn-userName",
    width: "50px",
    sorter: (source: User, dest: User) =>
      Compare.ascendingString(
        source.userName as string,
        dest.userName as string
      ),
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "userColumn-email",
    width: "50px",
    sorter: (source: User, dest: User) =>
      Compare.ascendingString(source.email ?? "", dest.email ?? ""),
  },
  {
    title: "Channel",
    dataIndex: ["channel", "name"],
    key: "userColumn-channel",
    width: "50px",
    sorter: (source: User, dest: User) =>
      Compare.ascendingString(
        source.channel.name ?? "",
        dest.channel.name ?? ""
      ),
  },
  {
    title: "Role",
    dataIndex: ["position", "name"],
    key: "userColumn-role",
    width: "50px",
    sorter: (source: User, dest: User) =>
      Compare.ascendingString(
        source.position.name ?? "",
        dest.position.name ?? ""
      ),
  },
  {
    title: "Status",
    dataIndex: "disabled",
    key: "userColumn-status",
    width: "50px",
    render: (_: any, user: User) => (
      <Button danger={user.disabled} type="status">
        {user.disabled ? "Deactive" : "Active"}
      </Button>
    ),
    sorter: (source: User, dest: User) =>
      Compare.descendingBoolean(source.disabled, dest.disabled),
  },
]

export const SIDEBAR: Required<MenuProps>["items"] = [
  {
    key: ROUTE_NAME.APP_CHECKING,
    icon: <Icon src={Assets.AppChecking} />,
    label: Language.sidebar.appChecking,
  },
  {
    key: "/admin",
    icon: <Icon src={Assets.ActualPerformanceIcon} />,
    label: Language.sidebar.posAdmin,
    children: [
      {
        key: ROUTE_NAME.POS_ADMIN_STORE,
        icon: <Icon src={Assets.ActualPerformanceIcon} />,
        label: Language.sidebar.posAdminStore,
      },
    ],
  },
  {
    key: "/upload-center",
    icon: <Icon src={Assets.ActualPerformanceIcon} />,
    children: [
      {
        key: ROUTE_NAME.ADMIN_TOOL.USER_MANAGEMENT,
        icon: <Icon src={Assets.ActualPerformanceIcon} />,
        label: Language.sidebar.adminToolsUserManagement,
      },
      {
        key: ROUTE_NAME.ADMIN_TOOL.UPLOAD_CENTER,
        icon: <Icon src={Assets.ActualPerformanceIcon} />,
        label: Language.sidebar.adminToolsUploadCenter,
      },
    ],
    label: Language.sidebar.adminTools,
  },
]

const SECURE_ADD_USER_INPUT_KEY_LIST = [Language.userProfile.password]
const DATE_ADD_USER_INPUT_KEY_LIST = [
  Language.userProfile.dateOfBirth,
  Language.userProfile.joiningDate,
  Language.userProfile.endingDate,
]

const REQUIRED_ADD_USER_INPUT_KEY_LIST = [
  Language.userProfile.userName,
  Language.userProfile.email,
  Language.userProfile.phoneNumber,
  Language.userProfile.gender,
  Language.userProfile.joiningDate,
  Language.userProfile.hrCode,
]

const ADD_USER_SELECT_KEY_LIST = [
  Language.userProfile.position,
  Language.userProfile.gender,
  Language.userProfile.identifierType,
]

const PARAGRAPH_USER_INPUT_KEY_LIST = [
  Language.userProfile.permanentAddress,
  Language.userProfile.currentAddress,
]

export const INPUT_LIST_USER_PROFILE: ModalFormProps["inputList"] = Object.keys(
  Language.userProfile
).map((inputKey) => {
  const name = inputKey as keyof typeof Language.userProfile
  const label = Language.userProfile[name]
  return {
    key: `addUserInput-${name}`,
    label,
    name,
    rules: REQUIRED_ADD_USER_INPUT_KEY_LIST.includes(label)
      ? [{ required: true, message: Language.placeholder.thisFieldIsRequired }]
      : undefined,
    inputType: SECURE_ADD_USER_INPUT_KEY_LIST.includes(label)
      ? "secure"
      : DATE_ADD_USER_INPUT_KEY_LIST.includes(label)
      ? "date"
      : ADD_USER_SELECT_KEY_LIST.includes(label)
      ? "select"
      : PARAGRAPH_USER_INPUT_KEY_LIST.includes(label)
      ? "paragraph"
      : undefined,
    options:
      label === Language.userProfile.gender
        ? ModalForm.createOptionsFromLanguage("gender")
        : label === Language.userProfile.position
        ? ModalForm.createOptionsFromLanguage("position")
        : label === Language.userProfile.identifierType
        ? ModalForm.createOptionsFromLanguage("identifierType")
        : undefined,
  }
})

export const INPUT_LIST_RESET_PASSWORD: ModalFormProps["inputList"] = [
  {
    label: Language.userProfile.password,
    name: Constants.FIELD_NAME.PASSWORD,
    rules: [
      { required: true, message: Language.placeholder.thisFieldIsRequired },
    ],
  },
  {
    label: Language.userProfile.confirmPassword,
    name: Constants.FIELD_NAME.CONFIRM_PASSWORD,
    rules: [
      { required: true, message: Language.placeholder.thisFieldIsRequired },
      Validation.validateConfirmPassword,
    ],
  },
]

const REQUIRED_ADD_STORE_INPUT_KEY_LIST = Object.values(Language.storeInfo)
const ADD_STORE_SELECT_KEY_LIST = [
  Language.storeInfo.province,
  Language.storeInfo.partner,
]

export const INPUT_LIST_ADD_STORE: ModalFormProps["inputList"] = Object.keys(
  Language.storeInfo
).map((inputKey) => {
  const name = inputKey as keyof typeof Language.storeInfo
  const label = Language.storeInfo[name]
  return {
    key: `addStoreInput-${name}`,
    label,
    name,
    rules: REQUIRED_ADD_STORE_INPUT_KEY_LIST.includes(label)
      ? [{ required: true, message: Language.placeholder.thisFieldIsRequired }]
      : undefined,
    inputType: ADD_STORE_SELECT_KEY_LIST.includes(label) ? "select" : undefined,
    options: ADD_STORE_SELECT_KEY_LIST.includes(label) ? [] : undefined,
  }
})

export const INPUT_LIST_SEARCH_STORE: ModalFormProps["inputList"] = [
  {
    key: `addStoreInput-${Language.obj.keyword}`,
    label: Language.obj.keyword,
    name: "keyword",
  },
  {
    key: `addStoreInput-${Language.storeInfo.province}`,
    label: Language.storeInfo.province,
    name: "province",
    inputType: "select",
    options: [
      /** Need to fulfill with response from Api */
    ],
  },
  {
    key: `addStoreInput-${Language.storeInfo.partner}`,
    label: Language.storeInfo.partner,
    name: "partner",
    inputType: "select",
    options: [
      /** Need to fulfill with response from Api */
    ],
  },
]

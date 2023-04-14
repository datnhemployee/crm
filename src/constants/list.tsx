import { MenuProps } from "antd"
import { ColumnsType } from "antd/es/table"
import Assets from "asset"
import Button from "components/Button"
import Icon from "components/Icon"
import ModalForm, { ModalFormProps } from "components/Modal/ModalForm"
import Language from "lang"
import { TProduct } from "model/product"
import { TScheme } from "model/scheme"
import { Store } from "model/store"
import User from "model/user"
import ROUTE_NAME from "routes/name"
import Compare from "utils/compare"
import Validation from "utils/validation"
import Constants from "./constants"
import { TAssigningProduct } from "model/assigningProduct"
import Text from "components/Typography/Text"

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
    key: ROUTE_NAME.SALE_PERFORMANCE,
    icon: <Icon src={Assets.SalePerformance} />,
    label: Language.sidebar.salesPerformance,
  },
  {
    key: ROUTE_NAME.TARGET_PERFORMANCE,
    icon: <Icon src={Assets.TargetPerformance} />,
    label: Language.sidebar.targetPerformance,
  },
  {
    key: ROUTE_NAME.ACTUAL_PERFORMANCE,
    icon: <Icon src={Assets.ActualPerformanceIcon} />,
    label: Language.sidebar.actualPerformance,
  },
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

export const SCHEME_COLUMN_LIST: ColumnsType<any> = [
  {
    title: "Scheme Group",
    dataIndex: "masterSchemeGroupName",
    key: "storeColum-masterSchemeGroupName",
    fixed: "left",
    width: "50px",
    sorter: (source: Required<TScheme>, dest: Required<TScheme>) =>
      Compare.ascendingString(
        source.masterSchemeGroupName,
        dest.masterSchemeGroupName
      ),
  },
  {
    title: "Scheme Id",
    dataIndex: "masterSchemeId",
    key: "storeColum-masterSchemeId",
    width: "50px",
    sorter: (source: Required<TScheme>, dest: Required<TScheme>) =>
      Compare.ascendingNumber(source.masterSchemeId, dest.masterSchemeId),
  },
  {
    title: "Scheme Desc",
    dataIndex: "masterSchemeName",
    key: "storeColum-masterSchemeName",
    width: "100px",
    sorter: (source: Required<TScheme>, dest: Required<TScheme>) =>
      Compare.ascendingString(source.masterSchemeName, dest.masterSchemeName),
  },
  {
    title: "Min Amount",
    dataIndex: "minLoanAmount",
    key: "storeColum-minLoanAmount",
    width: "50px",
    sorter: (source: Required<TScheme>, dest: Required<TScheme>) =>
      Compare.ascendingNumber(source.minLoanAmount, dest.minLoanAmount),
  },
  {
    title: "Maxs Amount",
    dataIndex: "maxLoanAmount",
    key: "storeColum-maxLoanAmount",
    width: "50px",
    sorter: (source: Required<TScheme>, dest: Required<TScheme>) =>
      Compare.ascendingNumber(source.maxLoanAmount, dest.maxLoanAmount),
  },
  {
    title: "Tenure Min",
    dataIndex: "minTenure",
    key: "storeColum-minTenure",
    width: "50px",
    sorter: (source: Required<TScheme>, dest: Required<TScheme>) =>
      Compare.ascendingNumber(source.minTenure, dest.minTenure),
  },
  {
    title: "Tenure Max",
    dataIndex: "maxTenure",
    key: "storeColum-maxTenure",
    width: "50px",
    sorter: (source: Required<TScheme>, dest: Required<TScheme>) =>
      Compare.ascendingNumber(source.maxTenure, dest.maxTenure),
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "storeColum-startDate",
    width: "50px",
    sorter: (source: Required<TScheme>, dest: Required<TScheme>) =>
      Compare.ascendingString(source.startDate, dest.startDate),
  },
]

export const PRODUCT_COLUMN_LIST = [
  {
    title: "Name",
    dataIndex: "productName",
    key: "storeColum-productName",
    width: "100px",
    sorter: (source: Required<TProduct>, dest: Required<TProduct>) =>
      Compare.ascendingString(source.productName, dest.productName),
  },
  {
    title: "Product Type",
    dataIndex: "masterProductCategoryDescription",
    key: "storeColum-masterProductCategoryDescription",
    width: "50px",
    sorter: (source: Required<TProduct>, dest: Required<TProduct>) =>
      Compare.ascendingString(
        source.masterProductCategoryDescription,
        dest.masterProductCategoryDescription
      ),
  },
  {
    title: "Brand",
    dataIndex: "productBrandName",
    key: "storeColum-productBrandName",
    width: "50px",
    sorter: (source: Required<TProduct>, dest: Required<TProduct>) =>
      Compare.ascendingString(source.productBrandName, dest.productBrandName),
  },
  {
    title: "Type",
    dataIndex: "",
    key: "storeColum-isMainProduct",
    width: "50px",
    sorter: (source: Required<TProduct>, dest: Required<TProduct>) =>
      Compare.descendingBoolean(source.isMainProduct, dest.isMainProduct),
  },
  {
    title: "Action",
    dataIndex: "",
    key: "storeColum-action",
    width: "24px",
  },
]

export const PROMOTION_COLUMN_LIST = [
  {
    title: "Name",
    dataIndex: "",
    key: "storeColum-name",
    width: "100px",
  },
  {
    title: "Product Type",
    dataIndex: "",
    key: "storeColum-productType",
    width: "100px",
  },
  {
    title: "Brand",
    dataIndex: "",
    key: "storeColum-brand",
    width: "50px",
  },
  {
    title: "Type",
    dataIndex: "",
    key: "storeColum-type",
    width: "50px",
  },
  {
    title: "Cost Min",
    dataIndex: "",
    key: "storeColum-costMin",
    width: "50px",
  },
  {
    title: "Cost Max",
    dataIndex: "",
    key: "storeColum-costMax",
    width: "50px",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "storeColum-action",
    width: "24px",
  },
]

export const SALES_CODE_COLUMN_LIST = [
  {
    title: "Sales Code",
    dataIndex: "userName",
    key: "storeColum-salesCode",
    width: "50px",
  },
  {
    title: "Name",
    dataIndex: "fullName",
    key: "storeColum-name",
    width: "50px",
  },
  {
    title: "Current Address",
    dataIndex: "currentAddress",
    key: "storeColum-currentAddress",
    width: "100px",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "storeColum-action",
    width: "24px",
  },
]

export const INPUT_LIST_MAP_USER: ModalFormProps["inputList"] = [
  {
    style: { marginRight: 0, marginLeft: 0 },
    key: `mapStoreInput-${Language.storeInfo.storeName}`,
    label: Language.storeInfo.storeName,
    name: "storeName",
    disabled: true,
    labelCol: { span: 4 },
  },
]

export const COLUMN_LIST_SALE = [
  {
    title: "User Name",
    dataIndex: "userName",
    key: "mapUser-userName",
    width: "50px",
  },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "mapUser-fullName",
    width: "100px",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "mapUser-email",
    width: "50px",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "mapUser-phone",
    width: "50px",
  },
  {
    title: "Current Address",
    dataIndex: "currentAddress",
    key: "mapUser-currentAddress",
    width: "100px",
  },
]

export const INPUT_LIST_MAP_PRODUCT: ModalFormProps["inputList"] = [
  {
    style: { marginRight: 0, marginLeft: 0 },
    key: `mapStoreInput-${Language.storeInfo.posCode}`,
    label: Language.storeInfo.posCode,
    name: "posCode",
    disabled: true,
    labelCol: { span: 4 },
  },
  {
    style: { marginRight: 0, marginLeft: 0 },
    key: `mapStoreInput-${Language.storeInfo.storeName}`,
    label: Language.storeInfo.storeName,
    name: "storeName",
    disabled: true,
    labelCol: { span: 4 },
  },
]

export const COLUMN_LIST_ASSIGNING_PRODUCT = [
  {
    title: "name",
    dataIndex: "name",
    key: "mapUser-name",
    width: "100px",
  },
  {
    title: "Product Type",
    dataIndex: "masterProductCategoryDescription",
    key: "mapUser-masterProductCategoryDescription",
    width: "50px",
  },
  {
    title: "Brand",
    dataIndex: "productBrandName",
    key: "mapUser-productBrandName",
    width: "50px",
  },
  {
    title: "Type",
    dataIndex: "",
    key: "mapUser-isMain",
    width: "50px",
    render: (_: any, product: TAssigningProduct) => (
      <Text>{product.isMain ? "Main" : "Accessories"}</Text>
    ),
  },
  {
    title: "Status",
    dataIndex: "",
    key: "mapUser-status",
    width: "50px",
    render: (_: any, product: TAssigningProduct) => (
      <Text>{product.status === 1 ? "Active" : "Deactive"}</Text>
    ),
  },
]

export const COLUMN_LIST_MAP_PROMOTION_PRODUCT = [
  {
    title: "Name",
    dataIndex: "productName",
    key: "mapUser-productName",
    width: "50px",
  },
  {
    title: "Product Type",
    dataIndex: "masterProductCategoryDescription",
    key: "mapUser-masterProductCategoryDescription",
    width: "50px",
  },
  {
    title: "Brand",
    dataIndex: "productBrandName",
    key: "mapUser-productBrandName",
    width: "50px",
  },
  {
    title: "Type",
    dataIndex: "",
    key: "mapUser-isMainProduct",
    width: "50px",
  },
  {
    title: "Status",
    dataIndex: "",
    key: "mapUser-productStatus",
    width: "50px",
  },
  {
    title: "Cost Min",
    dataIndex: "",
    key: "mapUser-costMin",
    width: "100px",
  },
  {
    title: "Cost Max",
    dataIndex: "",
    key: "mapUser-costMax",
    width: "100px",
  },
]

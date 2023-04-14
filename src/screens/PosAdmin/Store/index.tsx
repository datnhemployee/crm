import { UploadOutlined } from "@ant-design/icons"
import { Switch as AntSwitch, Typography, Upload } from "antd"
import { useForm } from "antd/es/form/Form"
import Assets from "asset"
import Button from "components/Button"
import Form from "components/Form"
import ModalForm, { ModalFormProps } from "components/Modal/ModalForm"
import PopUp from "components/PopUp"
import PopUpForm from "components/PopUp/PopUpForm"
import DashboardScreen from "components/Screen/DashboardScreen"
import Table from "components/Table"
import {
  INPUT_LIST_ADD_STORE,
  INPUT_LIST_SEARCH_STORE,
  STORE_COLUMN_LIST,
} from "constants/list"
import Language from "lang"
import MOCK_PARTNER from "mock/partner"
import MOCK_PROVINCE from "mock/province"
import { MOCK_STORE_LIST } from "mock/store"
import { Store } from "model/store"
import React, { useMemo, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import ROUTE_NAME from "routes/name"
import { Item, Option } from "types"

type StoresProps = {}

const Stores: React.FunctionComponent<StoresProps> = () => {
  const navigate = useNavigate()

  const [isOpenAddStore, setOpenAddStore] = useState(false)
  const [formAddStore] = useForm()

  const [isOpenEditStore, setOpenEditStore] = useState(false)
  const [formEditStore] = useForm()

  const [formSearchStore] = useForm()

  const onClickAddStore = () => setOpenAddStore(true)
  const onCancelAddStore = () => {
    formAddStore.resetFields()
    setOpenAddStore(false)
  }
  const onFinishAddStore = () => {
    formAddStore.resetFields()
    setOpenAddStore(false)
  }

  const onEditStore = (store: Store) => () => {
    formEditStore.setFieldsValue(store)
    setOpenEditStore(true)
  }
  const onCancelEditStore = () => {
    formEditStore.resetFields()
    setOpenEditStore(false)
  }
  const onFinishEditStore = () => {
    formEditStore.resetFields()
    setOpenEditStore(false)
  }

  const onClickStore = (store: Store) => () => {
    navigate(ROUTE_NAME.POS_ADMIN_STORE_DETAIL)
  }

  const inputListAddStore = useMemo(() => {
    const inputListIncludeProvinceList = Form?.InputList?.setOptions(
      {
        columnList: INPUT_LIST_ADD_STORE as NonNullable<
          ModalFormProps["inputList"]
        >,
        name: "province",
        options: MOCK_PROVINCE,
      },
      {
        mapper: (province: Item<typeof MOCK_PROVINCE>) =>
          ({
            value: `${province.id}`,
            label: province.name,
          } as Option),
      }
    )
    const inputListIncludeProvinceListAndPartnerList =
      Form?.InputList?.setOptions(
        {
          columnList: inputListIncludeProvinceList as NonNullable<
            typeof inputListIncludeProvinceList
          >,
          name: "partner",
          options: MOCK_PARTNER,
        },
        {
          mapper: (partner: Item<typeof MOCK_PARTNER>) =>
            ({
              value: `${partner.id}`,
              label: partner.name,
            } as Option),
        }
      )

    return inputListIncludeProvinceListAndPartnerList
  }, [])

  const inputListEditStore = useMemo(() => {
    let result = Form?.InputList?.setDisable({
      columnList: inputListAddStore as NonNullable<typeof inputListAddStore>,
      name: "id",
      isDisabled: true,
    })
    result = Form?.InputList?.setDisable({
      columnList: result as NonNullable<typeof result>,
      name: "posCode",
      isDisabled: true,
    })

    return result
  }, [inputListAddStore])

  const inputListSearchStore = useMemo(() => {
    const inputListIncludeProvinceList = Form?.InputList?.setOptions(
      {
        columnList: INPUT_LIST_SEARCH_STORE as NonNullable<
          ModalFormProps["inputList"]
        >,
        name: "province",
        options: MOCK_PROVINCE,
      },
      {
        mapper: (province: Item<typeof MOCK_PROVINCE>) =>
          ({
            value: `${province.id}`,
            label: province.name,
          } as Option),
      }
    )
    const inputListIncludeProvinceListAndPartnerList =
      Form?.InputList?.setOptions(
        {
          columnList: inputListIncludeProvinceList as NonNullable<
            typeof inputListIncludeProvinceList
          >,
          name: "partner",
          options: MOCK_PARTNER,
        },
        {
          mapper: (partner: Item<typeof MOCK_PARTNER>) =>
            ({
              value: `${partner.id}`,
              label: partner.name,
            } as Option),
        }
      )

    return inputListIncludeProvinceListAndPartnerList
  }, [])

  const columnList = STORE_COLUMN_LIST.map((column) => ({
    ...column,
    render:
      column.key === "storeColum-posCode"
        ? (_: any, store: Store) => (
            <Typography.Link onClick={onClickStore(store)}>
              {store.posCode}
            </Typography.Link>
          )
        : column.key === "storeColum-status"
        ? (_: any, store: Store) => <AntSwitch defaultChecked={store.status} />
        : column.key === "storeColum-action"
        ? (_: any, store: Store) => (
            <Button
              onClick={onEditStore(store)}
              type="icon"
              iconSrc={Assets.Edit}
            />
          )
        : undefined,
  }))

  return (
    <DashboardScreen>
      <DashboardScreen.Header>
        <DashboardScreen.Header.Left>
          <Button type="action" onClick={onClickAddStore}>
            {Language.format?.(Language.action.addNew, {
              obj: Language.store.store,
            })}
          </Button>

          <Button type="action" iconType="svg" iconComponent={Assets.ExportCvs}>
            {Language.userManagement.exportCsv}
          </Button>

          <PopUp
            title={Language.format?.(Language.action.map, {
              obj: Language.store.storeSales,
            })}
            okText={Language.action.browse}
            cancelText={Language.popUp.clear}
            description={
              <Upload multiple={false} maxCount={1}>
                <Button
                  shape="default"
                  iconType="svg"
                  iconComponent={() => <UploadOutlined />}
                >
                  {Language.action.uploadFile}
                </Button>
              </Upload>
            }
          >
            <Button
              type="action"
              iconType="svg"
              iconComponent={Assets.ExportCvs}
            >
              {Language.format?.(Language.action.map, {
                obj: Language.store.storeSales,
              })}
            </Button>
          </PopUp>
        </DashboardScreen.Header.Left>

        <DashboardScreen.Header.Right>
          <PopUpForm
            title={Language.popUp.search}
            okText={Language.popUp.search}
            cancelText={Language.popUp.clear}
            form={formSearchStore}
            inputList={inputListSearchStore}
          >
            <Button
              type="action"
              iconType="svg"
              iconComponent={Assets.SearchSvg}
            >
              {Language.action.search}
            </Button>
          </PopUpForm>
        </DashboardScreen.Header.Right>
      </DashboardScreen.Header>

      <Table columns={columnList} dataSource={MOCK_STORE_LIST} />

      <ModalForm
        title={Language.format?.(Language.action.addNew, {
          obj: Language.store.store,
        })}
        inputList={inputListAddStore as ModalFormProps["inputList"]}
        open={isOpenAddStore}
        onCancel={onCancelAddStore}
        onFinish={onFinishAddStore}
        form={formAddStore}
      />

      <ModalForm
        title={Language.format?.(Language.action.addNew, {
          obj: Language.store.store,
        })}
        inputList={inputListEditStore as ModalFormProps["inputList"]}
        open={isOpenEditStore}
        onCancel={onCancelEditStore}
        onFinish={onFinishEditStore}
        form={formEditStore}
      />

      <Outlet />
    </DashboardScreen>
  )
}

export default Stores

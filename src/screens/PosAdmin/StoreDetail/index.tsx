import { UploadOutlined } from "@ant-design/icons"
import { Col, Row, Space, Tabs, Upload } from "antd"
import Assets from "asset"
import Button from "components/Button"
import Card from "components/Card"
import Form from "components/Form"
import ModalConfirm from "components/Modal/ModalConfirm"
import PopUp from "components/PopUp"
import DashboardScreen from "components/Screen/DashboardScreen"
import Table from "components/Table"
import Text from "components/Typography/Text"
import Title from "components/Typography/Title"
import {
  COLUMN_LIST_ASSIGNING_PRODUCT,
  COLUMN_LIST_SALE,
  INPUT_LIST_MAP_PRODUCT,
  INPUT_LIST_MAP_USER,
  PRODUCT_COLUMN_LIST,
  PROMOTION_COLUMN_LIST,
  SALES_CODE_COLUMN_LIST,
  SCHEME_COLUMN_LIST,
} from "constants/list"
import Language from "lang"
import MOCK_ASSIGNING_PRODUCT from "mock/assigningProduct"
import MOCK_PRODUCT_LIST from "mock/product"
import MOCK_SALE_LIST from "mock/sale"
import MOCK_SALES_CODE_LIST from "mock/saleCode"
import MOCK_SCHEME_LIST from "mock/scheme"
import { TProduct } from "model/product"
import { TSale } from "model/sale"
import { TSaleCode } from "model/saleCode"
import React, { useRef, useState } from "react"
import { useGoBack } from "routes"
import ButtonMapPromotion from "./components/ButtonMapPromotion"

type StoreDetailProps = {}

const StoreDetail: React.FunctionComponent<StoreDetailProps> = () => {
  const goBack = useGoBack()

  const [isOpenDeleteProduct, setOpenDeleteProduct] = useState(false)
  const [deletingProduct, setDeletingProduct] = useState<TProduct | null>(null)

  const [isOpenDeleteSaleCode, setOpenDeleteSaleCode] = useState(false)
  const [deletingSaleCode, setDeletingSaleCode] = useState<TSaleCode | null>(
    null
  )

  const [isOpenMapUser, setOpenMapUser] = useState(false)
  const mapUserFormRef = useRef<React.ElementRef<typeof Form>>(null)

  const [isOpenMapProduct, setOpenMapProduct] = useState(false)
  const mapProductFormRef = useRef<React.ElementRef<typeof Form>>(null)

  const onDeleteProduct = (product: TProduct) => () => {
    setOpenDeleteProduct(true)
    setDeletingProduct(product)
  }
  const onCancelDeleteProduct = () => {
    setOpenDeleteProduct(false)
  }
  const onOkDeleteProduct = () => {
    setOpenDeleteProduct(false)
  }

  const onDeleteSaleCode = (saleCode: TSaleCode) => () => {
    setOpenDeleteSaleCode(true)
    setDeletingSaleCode(saleCode)
  }
  const onCancelDeleteSaleCode = () => {
    setOpenDeleteSaleCode(false)
  }
  const onOkDeleteSaleCode = () => {
    setOpenDeleteSaleCode(false)
  }

  const onClickMapUser = async () => {
    setOpenMapUser(true)

    await ModalConfirm?.delayForOpen?.()

    mapUserFormRef.current?.setFieldsValue({
      storeName: "Táo Đẹp - Kp Phước Mỹ - Đồng Nai",
    })
  }
  const onCancelMapUser = () => {
    setOpenMapUser(false)
  }
  const onOkMapUser = () => {
    setOpenMapUser(false)
  }

  const onClickMapProduct = async () => {
    setOpenMapProduct(true)

    await ModalConfirm?.delayForOpen?.()

    mapProductFormRef.current?.setFieldsValue({
      storeName: "Táo Đẹp - Kp Phước Mỹ - Đồng Nai",
      posCode: "CD-TDEP01",
    })
  }
  const onCancelMapProduct = () => {
    setOpenMapProduct(false)
  }
  const onOkMapProduct = () => {
    setOpenMapProduct(false)
  }

  const productColumnList = PRODUCT_COLUMN_LIST.map((column) => ({
    ...column,
    render:
      column.key === "storeColum-isMainProduct"
        ? (_: any, product: TProduct) => (
            <Text>{product.isMainProduct ? "Main" : "Accessories"}</Text>
          )
        : column.key === "storeColum-action"
        ? (_: any, product: TProduct) => (
            <Button
              iconType="svg"
              iconComponent={Assets.TrashSvg}
              onClick={onDeleteProduct(product)}
            />
          )
        : undefined,
  }))

  const saleCodeColumList = SALES_CODE_COLUMN_LIST.map((column) => ({
    ...column,
    render:
      column.key === "storeColum-action"
        ? (_: any, saleCode: TSaleCode) => (
            <Button
              iconType="svg"
              iconComponent={Assets.TrashSvg}
              onClick={onDeleteSaleCode(saleCode)}
            />
          )
        : undefined,
  }))

  return (
    <DashboardScreen>
      <DashboardScreen.Header>
        <DashboardScreen.Header.Left>
          <Button type="action" onClick={goBack}>
            Back
          </Button>
        </DashboardScreen.Header.Left>

        <DashboardScreen.Header.Right>
          <Button type="action" onClick={onClickMapUser}>
            Map User
          </Button>

          <Button type="action" onClick={onClickMapProduct}>
            Map Product
          </Button>

          <ButtonMapPromotion />

          <Button type="action" onClick={() => {}}>
            Export Product
          </Button>

          <PopUp
            title={"Select File"}
            okText={Language.action.uploadFile}
            cancelText={Language.popUp.clear}
            description={
              <Upload multiple={false} maxCount={1}>
                <Button
                  shape="default"
                  iconType="svg"
                  iconComponent={() => <UploadOutlined />}
                >
                  {Language.action.browse}
                </Button>
              </Upload>
            }
          >
            <Button
              type="action"
              iconType="svg"
              iconComponent={Assets.ExportCvs}
            >
              Import Product
            </Button>
          </PopUp>
        </DashboardScreen.Header.Right>
      </DashboardScreen.Header>

      <Card
        title="General"
        rowList={[
          [
            {
              title: "POS Code",
              content: "CD-TDEP01",
            },
            {
              title: "Province",
              content: "Đồng Nai",
            },
          ],
          [
            {
              title: "Name",
              content: "Táo Đẹp - Kp Phước Mỹ - Đồng Nai",
            },
            {
              title: "Status",
              content: "Táo Đẹp - Kp Phước Mỹ - Đồng Nai",
              Comp: (props) => (
                <Button type="status" size="middle">
                  Active
                </Button>
              ),
            },
          ],
          [
            {
              title: "Partner",
              content: "HO KINH DOANH TAO DEP",
            },
          ],
          [
            {
              title: "Address",
              content:
                "Tổ 9, Kp Phước Mỹ, Tt Hiệp Phước, Huyện Nhơn Trạch, Tỉnh Đồng Nai",
            },
          ],
        ]}
      />

      <Tabs
        defaultActiveKey="scheme-list"
        items={[
          {
            label: "SCHEME LIST",
            key: "scheme-list",
            children: (
              <Table
                columns={SCHEME_COLUMN_LIST}
                dataSource={MOCK_SCHEME_LIST}
              />
            ),
          },
          {
            label: "PRODUCT LIST",
            key: "product-list",
            children: (
              <Table
                columns={productColumnList}
                dataSource={MOCK_PRODUCT_LIST}
              />
            ),
          },
          {
            label: "PRODUCT PROMOTION",
            key: "product-promotion",
            children: <Table columns={PROMOTION_COLUMN_LIST} />,
          },
          {
            label: "SALES CODE",
            key: "sales-code",
            children: (
              <Table
                columns={saleCodeColumList}
                dataSource={MOCK_SALES_CODE_LIST}
              />
            ),
          },
        ]}
      />

      <ModalConfirm
        title={Language.format?.(Language.action.delete, {
          obj: Language.obj.product,
        })}
        okText={Language.popUp.delete}
        cancelText={Language.popUp.cancel}
        open={isOpenDeleteProduct}
        onCancel={onCancelDeleteProduct}
        onOk={onOkDeleteProduct}
      >
        {Language.format?.(Language.popUp.areYouSureYouWantToDelete, {
          obj: deletingProduct?.productName,
        })}
      </ModalConfirm>

      <ModalConfirm
        title={Language.format?.(Language.action.delete, {
          obj: Language.obj.sale,
        })}
        okText={Language.popUp.delete}
        cancelText={Language.popUp.cancel}
        open={isOpenDeleteSaleCode}
        onCancel={onCancelDeleteSaleCode}
        onOk={onOkDeleteSaleCode}
      >
        {Language.format?.(Language.popUp.areYouSureYouWantToDelete, {
          obj: deletingSaleCode?.fullName,
        })}
      </ModalConfirm>

      <ModalConfirm
        title={Language.store.general}
        okText={Language.popUp.save}
        cancelText={Language.popUp.cancel}
        open={isOpenMapUser}
        onCancel={onCancelMapUser}
        onOk={onOkMapUser}
        width={1000}
      >
        <Space direction="vertical" size="small">
          <div />
        </Space>

        <Form
          ref={mapUserFormRef}
          inputList={INPUT_LIST_MAP_USER}
          labelAlign="left"
        />

        <Space direction="vertical" size="large">
          <Row align="middle">
            <Col span={2}>
              x<Title level={5}>{Language.obj.sale}</Title>
            </Col>

            <Col span={2} offset={20}>
              <PopUp
                title={Language.popUp.search}
                okText={Language.popUp.search}
                cancelText={Language.popUp.clear}
              >
                <Button type="action" onClick={() => {}} size="middle">
                  {Language.action.search}
                </Button>
              </PopUp>
            </Col>
          </Row>

          <Table
            scroll={{ y: 350 }}
            columns={COLUMN_LIST_SALE}
            dataSource={MOCK_SALE_LIST}
            notACard
            hasSelection
            rowKey={(sale: TSale) => sale.userId}
          />
        </Space>
      </ModalConfirm>

      <ModalConfirm
        title={Language.store.general}
        okText={Language.popUp.save}
        cancelText={Language.popUp.cancel}
        open={isOpenMapProduct}
        onCancel={onCancelMapProduct}
        onOk={onOkMapProduct}
        width={1000}
      >
        <Space direction="vertical" size="small">
          <div />
        </Space>

        <Form
          ref={mapProductFormRef}
          inputList={INPUT_LIST_MAP_PRODUCT}
          labelAlign="left"
        />

        <Space direction="vertical" size="large">
          <Row align="middle">
            <Col span={2}>
              <Title level={5}>{Language.obj.product}</Title>
            </Col>

            <Col span={2} offset={20}>
              <PopUp
                title={Language.popUp.search}
                okText={Language.popUp.search}
                cancelText={Language.popUp.clear}
              >
                <Button type="action" onClick={() => {}} size="middle">
                  {Language.action.search}
                </Button>
              </PopUp>
            </Col>
          </Row>

          <Table
            scroll={{ y: 350 }}
            columns={COLUMN_LIST_ASSIGNING_PRODUCT}
            dataSource={MOCK_ASSIGNING_PRODUCT}
            notACard
            hasSelection
            rowKey={(sale: TSale) => sale.userId}
          />
        </Space>
      </ModalConfirm>
    </DashboardScreen>
  )
}

export default StoreDetail

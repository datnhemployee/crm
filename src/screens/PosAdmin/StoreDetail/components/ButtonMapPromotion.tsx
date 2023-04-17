import {
  Form as AntForm,
  Input as AntInput,
  Select as AntSelect,
  Col,
  Input,
  ModalProps,
  Radio,
  Row,
  SelectProps,
  Space,
} from "antd"
import { RadioButtonProps } from "antd/es/radio/radioButton"
import Button from "components/Button"
import BasicForm from "components/Form/Basic"
import ModalConfirm from "components/Modal/ModalConfirm"
import PopUp from "components/PopUp"
import Table from "components/Table"
import Text from "components/Typography/Text"
import Title from "components/Typography/Title"
import { COLUMN_LIST_MAP_PROMOTION_PRODUCT } from "constants/list"
import Language from "lang"
import MOCK_BRAND_LIST from "mock/brand"
import MOCK_MAP_PROMOTION_PRODUCT from "mock/mapPromotionProduct"
import MOCK_SCHEME_DESC from "mock/schemeDesc"
import MOCK_SCHEME_GROUP_LIST from "mock/schemeGroup"
import { TMapPromotionProduct } from "model/mapPromotionProduct"
import { TSale } from "model/sale"
import React, { useRef, useState } from "react"

type ModalMapPromotionProps = Pick<ModalProps, "open" | "onCancel" | "onOk">

const ButtonMapPromotion: React.FunctionComponent<
  ModalMapPromotionProps
> = () => {
  const [isOpenMapPromotion, setOpenMapPromotion] = useState(false)
  const mapPromotionFormRef = useRef<React.ElementRef<typeof AntForm>>(null)

  const [schemeDescList, setSchemeDescList] = useState<any[]>([])

  const [productType, setProductType] = useState<"brand" | "product">("brand")

  const onClickMapPromotion = () => {
    setOpenMapPromotion(true)
  }
  const onCancelMapPromotion = () => {
    setOpenMapPromotion(false)
  }
  const onOkMapPromotion = () => {
    mapPromotionFormRef.current?.submit?.()
  }

  const onSelectSchemeGroup: SelectProps["onChange"] = (schemeGroupId) => {
    setSchemeDescList(
      MOCK_SCHEME_DESC?.[schemeGroupId as keyof typeof MOCK_SCHEME_DESC] ?? []
    )
  }

  const onChangeProductType: RadioButtonProps["onChange"] = (e) => {
    const value = e?.target?.value as typeof productType
    setProductType(value)
  }

  const columListProduct = COLUMN_LIST_MAP_PROMOTION_PRODUCT.map((column) => ({
    ...column,
    render:
      column.key === "mapUser-isMainProduct"
        ? (_: any, product: TMapPromotionProduct) => (
            <Text>{product.isMainProduct ? "Main" : "Accessories"}</Text>
          )
        : column.key === "mapUser-productStatus"
        ? (_: any, product: TMapPromotionProduct) => (
            <Text>{product.productStatus === 1 ? "Active" : "Deactive"}</Text>
          )
        : column.key === "mapUser-costMin" || column.key === "mapUser-costMax"
        ? (_: any, product: TMapPromotionProduct) => <Input />
        : undefined,
  }))

  return (
    <>
      <Button type="action" onClick={onClickMapPromotion}>
        Map Promotion
      </Button>

      <ModalConfirm
        title={Language.store.general}
        okText={Language.popUp.save}
        cancelText={Language.popUp.cancel}
        open={isOpenMapPromotion}
        onCancel={onCancelMapPromotion}
        onOk={onOkMapPromotion}
        width={1000}
      >
        <BasicForm ref={mapPromotionFormRef}>
          <Row align="middle">
            <Col span={11}>
              <AntForm.Item
                name="posCode"
                label={Language.storeInfo.posCode}
                labelAlign="left"
              >
                <AntInput disabled />
              </AntForm.Item>
            </Col>

            <Col span={2} />

            <Col span={11}>
              <AntForm.Item
                name="storeName"
                label={Language.storeInfo.storeName}
                labelAlign="left"
              >
                <AntInput disabled />
              </AntForm.Item>
            </Col>
          </Row>

          <Row align="middle">
            <Col span={11}>
              <AntForm.Item
                name="schemeGroup"
                label={Language.store.schemeGroup}
                labelAlign="left"
              >
                <AntSelect
                  placeholder="Select a option and change input text above"
                  onChange={onSelectSchemeGroup}
                  allowClear
                >
                  {MOCK_SCHEME_GROUP_LIST.map((schemeGroup) => (
                    <AntSelect.Option value={schemeGroup.id}>
                      {schemeGroup.name}
                    </AntSelect.Option>
                  ))}
                </AntSelect>
              </AntForm.Item>
            </Col>

            <Col span={2} />

            <Col span={11}>
              <AntForm.Item
                name="schemeDesc"
                label={Language.store.schemeDesc}
                labelAlign="left"
              >
                <AntSelect
                  placeholder="Select a option and change input text above"
                  onChange={() => {}}
                  allowClear
                >
                  {schemeDescList?.map?.((desc: any) => (
                    <AntSelect.Option value={desc?.id}>
                      {desc?.name}
                    </AntSelect.Option>
                  ))}
                </AntSelect>
              </AntForm.Item>
            </Col>
          </Row>

          <Row align="middle">
            <Col span={11}>
              <AntForm.Item
                name="productType"
                label={Language.store.productType}
                labelAlign="left"
              >
                <Radio.Group onChange={onChangeProductType}>
                  <Radio value="brand">Brand</Radio>
                  <Radio value="product">product</Radio>
                </Radio.Group>
              </AntForm.Item>
            </Col>

            <Col flex={2} />
            <Col span={11} />
          </Row>

          {productType === "brand" && (
            <>
              <Row align="middle">
                <Col flex={1}>
                  <AntForm.Item
                    name="brand"
                    label={Language.store.brand}
                    labelAlign="left"
                    labelCol={{ flex: 4 }}
                    wrapperCol={{ flex: 19 }}
                  >
                    <AntSelect
                      placeholder="Select a option and change input text above"
                      onChange={() => {}}
                      allowClear
                    >
                      {MOCK_BRAND_LIST.map?.((desc: any) => (
                        <AntSelect.Option value={desc?.id}>
                          {desc?.name}
                        </AntSelect.Option>
                      ))}
                    </AntSelect>
                  </AntForm.Item>
                </Col>
              </Row>

              <Row align="middle">
                <Col span={11}>
                  <AntForm.Item
                    name="costMin"
                    label={Language.store.costMin}
                    labelAlign="left"
                  >
                    <AntInput disabled />
                  </AntForm.Item>
                </Col>

                <Col flex={2} />

                <Col span={11}>
                  <AntForm.Item
                    name="costMax"
                    label={Language.store.costMax}
                    labelAlign="left"
                  >
                    <AntInput disabled />
                  </AntForm.Item>
                </Col>
              </Row>
            </>
          )}

          {productType === "product" && (
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
                columns={columListProduct}
                dataSource={MOCK_MAP_PROMOTION_PRODUCT}
                notACard
                hasSelection
                rowKey={(sale: TSale) => sale.userId}
              />
            </Space>
          )}
        </BasicForm>
      </ModalConfirm>
    </>
  )
}

export default ButtonMapPromotion

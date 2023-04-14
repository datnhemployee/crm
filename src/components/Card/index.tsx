import React from "react"
import {
  Card as AntCard,
  CardProps as AntCardProps,
  Col,
  Row as AntRow,
  Space,
} from "antd"
import styled from "styled-components"
import Text from "components/Typography/Text"

const Content = styled(Space)`
  width: 100%;
`
const Row = styled(AntRow)`
  align-items: center;
`

type TInfo = { title: string; content: string; Comp?: React.ElementType<any> }

type CardProps = AntCardProps & {
  rowList: TInfo[][]
}
type TCard = React.FunctionComponent<CardProps>

const Card: TCard = (props) => {
  return (
    <AntCard hoverable {...props}>
      <Content direction="vertical">
        {props.rowList.map((row) => (
          <AntRow>
            {row?.map?.((info, index) => {
              const Comp = info?.Comp
              return (
                <Col span={index !== 0 ? 12 : 10}>
                  <Row>
                    <Col span={4}>
                      <Text strong>{info?.title}:</Text>
                    </Col>

                    <Col span={18}>
                      {Comp ? (
                        <Comp info={info} />
                      ) : (
                        <Text>{info?.content}</Text>
                      )}
                    </Col>
                  </Row>
                </Col>
              )
            })}
          </AntRow>
        ))}
      </Content>
    </AntCard>
  )
}

export default Card

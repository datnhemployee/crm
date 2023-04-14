import { Table as AntTable, Card } from "antd"
import { Store } from "model/store"
import React, { useState } from "react"
import styled from "styled-components"
import CrmTheme from "theme"
import { TableTheme } from "theme/default"

const Div: React.FunctionComponent<any> = (props) => (
  <div>{props?.children}</div>
)

type TableProps = React.ComponentProps<typeof AntTable> & {
  onEditStore?: (store: Store) => void
  notACard?: boolean
  hasSelection?: boolean
}

const Table: React.FunctionComponent<TableProps> = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const bgHeaderColor = CrmTheme.useToken()?.tableColorBgHeader

  const ThemeTable = styled(AntTable)`
    & .ant-table-thead .ant-table-cell {
      background-color: ${bgHeaderColor};
    }
  `

  const onSelectChange = (newSelectedRowKeys: React.Key[]) =>
    setSelectedRowKeys(newSelectedRowKeys)

  const rowSelection = props?.hasSelection
    ? {
        selectedRowKeys,
        onChange: onSelectChange,
      }
    : undefined

  const Wrapper = props?.notACard ? Div : Card

  return (
    <Wrapper bordered={false}>
      <ThemeTable
        rowSelection={rowSelection}
        pagination={{ position: ["bottomCenter"] }}
        scroll={{ x: 1500, y: 350 }}
        {...props}
      />
    </Wrapper>
  )
}

Table.defaultProps = {
  dataSource: [],
  columns: [],
}

export default CrmTheme.forwardTheme(TableTheme, Table)

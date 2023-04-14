import { Table as AntTable, Card } from "antd"
import { Store } from "model/store"
import React from "react"
import styled from "styled-components"
import CrmTheme from "theme"
import { TableTheme } from "theme/default"

type TableProps = React.ComponentProps<typeof AntTable> & {
  onEditStore?: (store: Store) => void
}

const Table: React.FunctionComponent<TableProps> = (props) => {
  const bgHeaderColor = CrmTheme.useToken()?.tableColorBgHeader

  const ThemeTable = styled(AntTable)`
    & .ant-table-thead .ant-table-cell {
      background-color: ${bgHeaderColor};
    }
  `

  return (
    <Card
      bordered={false}
      cover={
        <ThemeTable
          pagination={{ position: ["bottomCenter"] }}
          {...props}
          scroll={{ x: 1500, y: 500 }}
        />
      }
    />
  )
}

export default CrmTheme.forwardTheme(TableTheme, Table)

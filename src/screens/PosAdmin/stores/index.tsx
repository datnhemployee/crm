import Assets from "asset"
import Button from "components/Button"
import Icon from "components/Icon"
import Table from "components/Table"
import { STORE_COLUMN_LIST } from "constants/list"
import { MOCK_STORE_LIST } from "mock/store"
import { Store } from "model/store"
import React from "react"

type StoresProps = {}

const Stores: React.FunctionComponent<StoresProps> = () => {
  const onEditStore = (store: Store) => () => console.log(store)

  const STORE_COLUMNS_WITH_EDIT_BUTTON = STORE_COLUMN_LIST.map((column) => ({
    ...column,
    render:
      column.key === "storeColum-action"
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
    <>
      <Table
        columns={STORE_COLUMNS_WITH_EDIT_BUTTON}
        dataSource={MOCK_STORE_LIST}
      />
    </>
  )
}

export default Stores

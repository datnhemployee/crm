import React from "react"
import SidebarComp from "components/Sidebar"
import useHook from "./hook"

type SideBarProps = {}

const SideBar: React.FunctionComponent<SideBarProps> = () => {
  const hook = useHook()

  return (
    <SidebarComp
      style={{ minHeight: "100%" }}
      mode="inline"
      onSelect={hook.onSelect}
      items={hook.items.data}
    />
  )
}

export default SideBar

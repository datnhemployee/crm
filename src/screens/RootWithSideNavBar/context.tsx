import React, { useState } from "react"

const DEFAULT_COLLAPSED = false

export const CollapseContext = React.createContext<
  Partial<{
    isCollapsed: boolean
    toggleCollapsed: () => void
  }>
>({})

export const forwardCollapse =
  (Comp: React.ElementType<any>): typeof Comp =>
  (props: any) => {
    const [isCollapsed, setCollapsed] = useState(DEFAULT_COLLAPSED)

    const toggleCollapsed = () => {
      setCollapsed((prevIsCollapsed) => {
        console.log("toggleCollapsed", prevIsCollapsed)

        return !prevIsCollapsed
      })
    }

    return (
      <CollapseContext.Provider value={{ isCollapsed, toggleCollapsed }}>
        <Comp {...props} />
      </CollapseContext.Provider>
    )
  }

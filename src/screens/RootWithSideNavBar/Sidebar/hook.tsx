import { ComponentProps, useMemo } from "react"
import SidebarComp from "components/Sidebar"
import { SIDEBAR } from "constants/list"
import { useNavigate } from "react-router-dom"

type SidebarProps = ComponentProps<typeof SidebarComp>

const useHook = () => {
  const navigate = useNavigate()

  const items = useMemo(() => {
    const rootKeys = SIDEBAR.map((item) => item?.key)
    return { data: SIDEBAR, rootKeys }
  }, [])

  const onSelect: SidebarProps["onSelect"] = ({ key }) =>
    navigate(key, { replace: true })

  return {
    items,
    onSelect,
  }
}

export default useHook

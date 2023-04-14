import { MenuItemType, SubMenuType } from "antd/es/menu/hooks/useItems"
import { SIDEBAR } from "constants/list"
import {
  createBrowserRouter,
  matchRoutes,
  useLocation,
  useNavigate,
} from "react-router-dom"
import UploadCenter from "screens/AdminTool/UploadCenter"
import UserManagement from "screens/AdminTool/UserManager"
import AppChecking from "screens/AppChecking"
import Stores from "screens/PosAdmin/Store"
import RootWithSideNavBar from "screens/RootWithSideNavBar"
import { Item } from "types"
import ROUTE_NAME from "./name"
import StoreDetail from "screens/PosAdmin/StoreDetail"
import POSAdmin from "screens/PosAdmin"

const routes = [
  {
    path: "/",
    element: <RootWithSideNavBar />,
    children: [
      {
        index: true,
        element: <UserManagement />,
      },
      {
        path: ROUTE_NAME.APP_CHECKING,
        element: <AppChecking />,
      },
      {
        path: ROUTE_NAME.POS_ADMIN_STORE,
        element: <POSAdmin />,
        children: [
          {
            index: true,
            element: <Stores />,
          },
          {
            path: ROUTE_NAME.POS_ADMIN_STORE_DETAIL,
            element: <StoreDetail />,
          },
        ],
      },
      {
        path: ROUTE_NAME.ADMIN_TOOL.USER_MANAGEMENT,
        element: <UserManagement />,
      },
      {
        path: ROUTE_NAME.ADMIN_TOOL.UPLOAD_CENTER,
        element: <UploadCenter />,
      },
      {
        path: ROUTE_NAME.ADMIN_TOOL.UPLOAD_CENTER,
        element: <UploadCenter />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router

export const useLatestRoute = () => {
  const location = useLocation()
  const currentRoutes = matchRoutes(routes, location)
  const latestRoute = currentRoutes?.[currentRoutes.length - 1]
  return latestRoute
}

export const getScreen = (
  screenName: string,
  sidebar: typeof SIDEBAR
): Item<typeof SIDEBAR> | undefined => {
  for (let item of sidebar) {
    if (item?.key === screenName) return item
    const submenuItem = item as SubMenuType
    if (!submenuItem?.children?.length) {
      continue
    }
    const nested = getScreen(screenName, submenuItem?.children)
    if (!!nested) return nested
  }
  return undefined
}

export const useLastestScreenName = () => {
  const latestRoute = useLatestRoute()
  const latestPath = latestRoute?.pathname

  const latestScreen = getScreen(latestPath as string, SIDEBAR)

  return (latestScreen as MenuItemType)?.label
}

export const useGoBack = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return goBack
}

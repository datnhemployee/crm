import { createBrowserRouter } from "react-router-dom"
import RootWithSideNavBar from "screens/RootWithSideNavBar"
import Stores from "screens/PosAdmin/stores"
import UserManagement from "screens/AdminTool/UserManager"
import AppChecking from "screens/AppChecking"
import ROUTE_NAME from "./name"
import UploadCenter from "screens/AdminTool/UploadCenter"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWithSideNavBar />,
    children: [
      {
        path: "/",
        element: <Stores />,
      },
      {
        path: ROUTE_NAME.APP_CHECKING,
        element: <AppChecking />,
      },
      {
        path: ROUTE_NAME.POS_ADMIN_STORE,
        element: <Stores />,
      },
      {
        path: ROUTE_NAME.ADMIN_TOOL.USER_MANAGEMENT,
        element: <UserManagement />,
      },
      {
        path: ROUTE_NAME.ADMIN_TOOL.UPLOAD_CENTER,
        element: <UploadCenter />,
      },
    ],
  },
])

export default router

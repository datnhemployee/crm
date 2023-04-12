import { createBrowserRouter } from "react-router-dom"
import Root from "screens/root"
import Stores from "screens/stores"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "store",
        element: <Stores />,
      },
    ],
  },
])

export default router

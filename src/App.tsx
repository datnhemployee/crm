import { RouterProvider } from "react-router-dom"
import router from "routes"
import CrmTheme from "theme"
import defaultTheme from "theme/default"

const App = () => <RouterProvider router={router} />

export default CrmTheme.forwardTheme(defaultTheme, App)

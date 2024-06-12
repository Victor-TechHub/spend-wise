import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./styles/theme/styles"
import ToastElement from "./components/Toast"
import useTheme from "./screens/hook/useTheme"
import { AuthProvider } from "./context/Auth"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ACCESS_ROUTE, PRIVATE_ROUTE } from "./routes/path"
import SignIn from "./screens/auth/sign_in"
import SignUp from "./screens/auth/sign_up"
import ProtectedRoutes from "./layout/ProtectedRoutes"
import Home from "./screens/private/Home"
import Access from "./layout/Access"

const routes = createBrowserRouter([

  {
    element: <Access />,
    children: [
      {
        path: ACCESS_ROUTE.SIGNIN,
        element: <SignIn />
      },
      {
        path: ACCESS_ROUTE.SIGNUP,
        element: <SignUp />
      },
    ]
  },

  {
    path: PRIVATE_ROUTE.DASHBOARD,
    element: <ProtectedRoutes children={<Home />} />
  }
])

const App = () => {
  const { theme } = useTheme()
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AuthProvider>
        <ToastElement />
        <RouterProvider router={routes} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
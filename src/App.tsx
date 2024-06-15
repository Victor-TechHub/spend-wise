import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./styles/theme/styles"
import ToastElement from "./components/Toast"
import useTheme from "./screens/hook/useTheme"
import { AuthProvider } from "./context/Auth"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/base"
import Loader from "./components/Loader"

const App = () => {
  const { theme } = useTheme()
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AuthProvider>
        <ToastElement />
        <Loader />
        <RouterProvider router={routes} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./styles/theme/styles"
import ToastElement from "./components/Toast"
import { AuthProvider } from "./context/Auth"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/base"
import Loader from "./components/Loader"
import { useThemeCtx } from "./context/theme"

const App = () => {
  const { theme } = useThemeCtx()

  return (
    <AuthProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> {/* Styled Components */}
        <ToastElement />
        <Loader />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
import { ThemeProvider } from "styled-components"
import SignUp from "./screens/auth/sign_up"
import { darkTheme, lightTheme } from "./styles/theme/styles"
import ToastElement from "./components/Toast"
import useTheme from "./screens/hook/useTheme"

const App = () => {
  const { theme } = useTheme()
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ToastElement />
      <SignUp />
    </ThemeProvider>
  )
}

export default App
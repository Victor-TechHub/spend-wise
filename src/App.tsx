import { ThemeProvider } from "styled-components"
import SignUp from "./screens/auth/sign_up"
import { darkTheme } from "./styles/theme/styles"

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <SignUp />
    </ThemeProvider>
  )
}

export default App
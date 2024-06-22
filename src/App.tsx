import ToastElement from "./components/Toast"
import { AuthProvider } from "./context/Auth"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/base"
import Loader from "./components/Loader"

const App = () => {
  return (
    <AuthProvider>
      <ToastElement />
      <Loader />
      <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App
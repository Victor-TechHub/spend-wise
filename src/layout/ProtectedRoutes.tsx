// import { useAuthCtx } from "@/context/Auth"
import { useAuthCtx } from "@/context/Auth"
import { ACCESS_ROUTE } from "@/routes/path"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
    const { currentUser } = useAuthCtx()
    // const user = true

    return !!currentUser ? children : <Navigate to={ACCESS_ROUTE.SIGNIN} replace />
}

export default ProtectedRoutes
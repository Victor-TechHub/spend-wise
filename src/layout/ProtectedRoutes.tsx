// import { useAuthCtx } from "@/context/Auth"
import SideBar from "@/components/Sidebar"
import TopNavbar from "@/components/TopNavbar"
import { useAuthCtx } from "@/context/Auth"
import { ACCESS_ROUTE } from "@/routes/path"
import { DashboardWrapper } from "@/styles/private/dashboard"
import { MainContainer } from "@/styles/private/style"
import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
    const { currentUser } = useAuthCtx()
    const user = true
    const [isNavOpen, setIsNavOpen] = useState(false)

    return !!currentUser
        ?
        <MainContainer>
            <SideBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            <DashboardWrapper $fullWidth={isNavOpen}>
                <TopNavbar setIsNavOpen={setIsNavOpen} />
                <Outlet />
            </DashboardWrapper>
        </MainContainer>
        :
        <Navigate to={ACCESS_ROUTE.SIGNIN} replace />
}

export default ProtectedRoutes
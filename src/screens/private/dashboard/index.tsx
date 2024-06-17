import { useAuthCtx } from "@/context/Auth"
import { PRIVATE_ROUTE } from "@/routes/path"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { MainContainer } from "@/styles/private/style"
import SideBar from "@/components/Sidebar"
import { DashboardWrapper } from "@/styles/private/dashboard"
import TopNavbar from "@/components/TopNavbar"

const Home = () => {
    const { currentUser } = useAuthCtx()
    const navigate = useNavigate()
    useEffect(() => {
        if (currentUser) {
            navigate(PRIVATE_ROUTE.DASHBOARD)
        }
    }, [currentUser])

    return (
        <MainContainer>
            <SideBar />
            <DashboardWrapper>
                <TopNavbar />
            </DashboardWrapper>
        </MainContainer>
    )
}

export default Home
import { useAuthCtx } from "@/context/Auth"
import { PRIVATE_ROUTE } from "@/routes/path"
import { useNavigate } from "react-router-dom"
const Home = () => {
    const { currentUser } = useAuthCtx()
    const navigate = useNavigate()
    if (currentUser) {
        navigate(PRIVATE_ROUTE.DASHBOARD)
    }
    return (
        <div>Home</div>
    )
}

export default Home
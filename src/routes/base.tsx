import { createBrowserRouter } from "react-router-dom"
import Access from "@/layout/Access"
import { ACCESS_ROUTE, PRIVATE_ROUTE } from "./path"
import SignIn from "@/screens/auth/sign_in"
import SignUp from "@/screens/auth/sign_up"
import ProtectedRoutes from "@/layout/ProtectedRoutes"
import Home from "@/screens/private/dashboard"

export const routes = createBrowserRouter([

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
        element: <ProtectedRoutes children={< Home />} />
    }
])
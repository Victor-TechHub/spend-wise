import { createBrowserRouter } from "react-router-dom"
import Access from "@/layout/Access"
import { ACCESS_ROUTE, PRIVATE_ROUTE } from "./path"
import SignIn from "@/screens/auth/sign_in"
import SignUp from "@/screens/auth/sign_up"
import ProtectedRoutes from "@/layout/ProtectedRoutes"
import Dashboard from "@/screens/private/dashboard"
import Messages from "@/screens/private/messages"
import Settings from "@/screens/private/settings"

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
        element: <ProtectedRoutes />,
        children: [
            {
                path: PRIVATE_ROUTE.DASHBOARD,
                element: <Dashboard />
            },
            {
                path: PRIVATE_ROUTE.MESSAGES,
                element: <Messages />
            },
            {
                path: PRIVATE_ROUTE.SETTINGS,
                element: <Settings />
            }
        ]
    }
])
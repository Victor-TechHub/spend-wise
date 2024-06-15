import { User } from "firebase/auth"
import { NavigateFunction } from "react-router-dom"

export interface IAuthCtx {
    currentUser: User | null,
    signUp: (email: string, password: string, username: string, navigate: NavigateFunction) => Promise<void>
    login: (email: string, password: string, navigate: NavigateFunction) => Promise<void>
    logOut: () => Promise<void>
    signInWithGoogle: (navigate: NavigateFunction) => Promise<void>
    isSigningUp: boolean
    isLoggingIn: boolean
}
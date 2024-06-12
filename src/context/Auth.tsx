import { auth, database, googleAuth } from "@/lib/firebase"
import { ACCESS_ROUTE, PRIVATE_ROUTE } from "@/routes/path"
import { IAuthCtx } from "@/types/Auth"
import { User, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { ReactNode, createContext, useContext, useState } from "react"
import { NavigateFunction } from "react-router-dom"
import { toast } from "react-toastify"

const AuthCtx = createContext<IAuthCtx>({
    currentUser: null,
    signUp: async () => { },
    login: async () => { },
    logOut: async () => { },
    signInWithGoogle: async () => { }
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    const signUp = async (email: string, password: string, username: string, navigate: NavigateFunction): Promise<void> => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user, { displayName: username })
            setCurrentUser(user)
            toast.success(`👋 Welcome aboard ${user?.displayName}!`)
            setTimeout(() => navigate(ACCESS_ROUTE.SIGNIN), 3000)

            await addDoc(collection(database, "users"), {
                id: user.uid,
                email,
                username,
                password,
                createdAt: serverTimestamp()
            })
        } catch (err) {
            err instanceof Error && toast.error(err.message)
        }
    }

    const login = async (email: string, password: string, navigate: NavigateFunction): Promise<void> => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast.success(`👋 Welcome back ${currentUser?.displayName}`)
            setTimeout(() => navigate(PRIVATE_ROUTE.DASHBOARD), 3000)
        } catch (err) {
            err instanceof Error && toast.error(err.message)
        }
    }

    const signInWithGoogle = async (navigate: NavigateFunction): Promise<void> => {
        try {
            const { user } = await signInWithPopup(auth, googleAuth)
            setCurrentUser(user)
            toast.success(`👋 Welcome back ${user?.displayName}`)
            setTimeout(() => navigate(PRIVATE_ROUTE.DASHBOARD), 3000)
        } catch (err) {
            err instanceof Error && toast.error(err.message)
        }
    }

    const logOut = async (): Promise<void> => {
        await signOut(auth)
        setCurrentUser(null)
    }

    const values = {
        currentUser,
        signUp,
        login,
        logOut,
        signInWithGoogle
    }

    return <AuthCtx.Provider value={values}>{children}</AuthCtx.Provider>
}

export const useAuthCtx = () => useContext(AuthCtx)
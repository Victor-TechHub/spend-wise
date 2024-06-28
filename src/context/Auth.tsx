import { auth, database, googleAuth } from "@/lib/firebase"
import { ACCESS_ROUTE, PRIVATE_ROUTE } from "@/routes/path"
import { IAuthCtx } from "@/types/Auth"
import {
    User,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    onAuthStateChanged,
    setPersistence,
    browserSessionPersistence
} from "firebase/auth"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { Navigate, NavigateFunction } from "react-router-dom"
import { toast } from "react-toastify"

const AuthCtx = createContext<IAuthCtx>({
    currentUser: null,
    signUp: async () => { },
    login: async () => { },
    logOut: async () => { },
    signInWithGoogle: async () => { },
    isSigningUp: false,
    isLoggingIn: false,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [isSigningUp, setIsSigningUp] = useState(false)
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setPersistence(auth, browserSessionPersistence)
                .then(() => setCurrentUser(user))
        })
        return () => unsubscribe()
    }, [currentUser]) // listens for authenticated user

    const signUp = async (
        email: string,
        password: string,
        username: string,
        navigate: NavigateFunction
    ): Promise<void> => {
        try {
            setIsSigningUp(true)
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user, { displayName: username })
            toast.success(`👋 Welcome aboard ${user?.displayName}!`)
            setTimeout(() => navigate(ACCESS_ROUTE.SIGNIN), 3000)
            setTimeout(() => setIsLoggingIn(false), 3000)

            await addDoc(collection(database, "users"), {
                id: user.uid,
                email,
                username,
                password,
                createdAt: serverTimestamp(),
            }) // adds new users to firestore

            setTimeout(() => setIsSigningUp(false), 3000)
        } catch (err) {
            err instanceof Error && toast.error(err.message)
            setIsSigningUp(false)
        }
    }

    const login = async (
        email: string,
        password: string,
        navigate: NavigateFunction
    ): Promise<void> => {
        try {
            setIsLoggingIn(true)
            const res = await signInWithEmailAndPassword(auth, email, password)
            toast.success(`👋 Welcome back ${res.user?.displayName}`)
            setTimeout(() => navigate(PRIVATE_ROUTE.DASHBOARD, { replace: true }), 3000)
            setTimeout(() => setIsLoggingIn(false), 3000)
        } catch (err) {
            setIsLoggingIn(false)
            err instanceof Error && toast.error("Invalid credentials")
        }
    }

    const signInWithGoogle = async (navigate: NavigateFunction): Promise<void> => {
        try {
            setIsLoggingIn(true)
            const res = await signInWithPopup(auth, googleAuth)
            toast.success(`👋 Welcome back ${res?.user?.displayName}`)
            setTimeout(() => navigate(PRIVATE_ROUTE.DASHBOARD), 3000)
            setTimeout(() => setIsLoggingIn(false), 3000)
        } catch (err) {
            setIsLoggingIn(false)
            err instanceof Error && toast.error("Oops! something went wrong")
        }
    }

    const logOut = async (): Promise<void> => {
        try {
            toast.success(`You have been successfully logged out. Have a great day! ${currentUser?.displayName} 😉`)
            setTimeout(() => <Navigate to={ACCESS_ROUTE.SIGNIN} />, 3000)
            await signOut(auth)
            setCurrentUser(null)
        } catch (err) {
            err instanceof Error && toast.error(err.message)
        }
    }

    const values = {
        currentUser,
        signUp,
        login,
        logOut,
        signInWithGoogle,
        isSigningUp,
        isLoggingIn,
    }

    return (
        <AuthCtx.Provider value={values}>
            {children}
        </AuthCtx.Provider>
    )
}

export const useAuthCtx = () => useContext(AuthCtx)
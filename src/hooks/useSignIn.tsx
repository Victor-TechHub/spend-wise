import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/utils/zod"
import { FormData, IuseFormValiation } from "@/types/form"
import { useNavigate } from "react-router-dom";
import { useAuthCtx } from "@/context/Auth"

const useSignIn = (): IuseFormValiation => {
    const navigate = useNavigate()
    const { login, signInWithGoogle } = useAuthCtx()

    const { register, formState: { errors }, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(loginSchema)
    })
    const onSubmit = (data: FormData): void => {
        const { email, password } = data
        login(email, password, navigate)
    }

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault()
        signInWithGoogle(navigate)
    }
    return { register, errors, handleSubmit, onSubmit, handleClick }
}

export default useSignIn
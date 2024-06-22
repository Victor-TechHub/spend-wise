import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "@/utils/zod"
import { FormData, IuseFormValiation } from "@/types/form"
import { useNavigate } from "react-router-dom";
import { useAuthCtx } from "@/context/Auth"

const useSignUp = (): IuseFormValiation => {
    const navigate = useNavigate()
    const { signUp, signInWithGoogle } = useAuthCtx()

    const { register, formState: { errors }, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(schema)
    })
    const onSubmit = (data: FormData): void => {
        const { email, password, username } = data
        signUp(email, password, username, navigate)
    }

    const handleClick = () => {
        signInWithGoogle(navigate)
    }
    return { register, errors, handleSubmit, onSubmit, handleClick }
}

export default useSignUp
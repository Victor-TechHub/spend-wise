import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "@/utils/zod"
import { FormData, IuseFormValiation } from "@/types/form"
import { toast } from "react-toastify"


const useFormValidation = (): IuseFormValiation => {
    const { register, formState: { errors }, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(schema)
    })
    const onSubmit = (data: FormData): void => {
        toast.success("Welcome!")
        console.log(data)
    }
    return { register, errors, handleSubmit, onSubmit }
}

export default useFormValidation
import { FieldError, FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"

export interface FormData {
    email: string
    password: string
    username: string
}

export interface IuseFormValiation {
    register: UseFormRegister<FormData>
    errors: FieldErrors<FormData>
    handleSubmit: UseFormHandleSubmit<FormData>
    onSubmit: (data: FormData) => void
}

export interface InputProps {
    label: string
    type: string
    placeholder: string
    name: InputNames
    register: UseFormRegister<FormData>
    error: FieldError | undefined
    setIsTypePassword?: React.Dispatch<React.SetStateAction<boolean>>
    isTypePassword?: boolean
}

type InputNames = "email" | "password" | "username"

import { ErrorElement, Field, InputField } from "./styles"
import { FaRegEye } from "react-icons/fa6";
import { InputProps } from "@/types/form";
import { FaRegEyeSlash } from "react-icons/fa6";

const TextField = (props: InputProps) => {

    const {
        label,
        type,
        placeholder,
        name,
        register,
        error,
        setIsTypePassword,
        isTypePassword
    } = props
    return (
        <InputField>
            <label htmlFor={name}>{label}</label>
            <Field
                style={{ borderColor: error && "red" }}
            >
                <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    name={name}
                />
                <i onClick={() => setIsTypePassword!(state => !state)}>
                    {
                        !!isTypePassword && name === "password"
                            ?
                            <FaRegEyeSlash size={18} />
                            :
                            !isTypePassword && name === "password"
                                ?
                                <FaRegEye size={18} />
                                : ""
                    }
                </i>
            </Field>
            {error && <ErrorElement>{error.message}</ErrorElement>}
        </InputField>
    )
}

export default TextField
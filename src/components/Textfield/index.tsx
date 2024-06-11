import { Field, InputField } from "./styles"
import { FaRegEye } from "react-icons/fa6";

type PropType = {
    label: string
    type: string
    placeholder: string
    name: "email" | "password"
}

const TextField = (props: PropType) => {
    const { label, type, placeholder, name } = props
    return (
        <InputField>
            <label htmlFor={name}>{label}</label>
            <Field>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                />
                {name === "password" && <FaRegEye size={18} />}
            </Field>
        </InputField>
    )
}

export default TextField
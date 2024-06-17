import { useThemeCtx } from "@/context/theme";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const ToastElement = () => {
    const context = useThemeCtx()
    return (
        <ToastContainer
            position="top-left"
            stacked
            draggable
            theme={context.theme}
        />
    )
}

export default ToastElement
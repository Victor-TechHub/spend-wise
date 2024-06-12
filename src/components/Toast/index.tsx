import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const ToastElement = () => {
    return (
        <ToastContainer position="top-left" stacked draggable theme="light" />
    )
}

export default ToastElement
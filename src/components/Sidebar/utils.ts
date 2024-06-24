import { RxDashboard } from "react-icons/rx";
import { VscGraph, VscGraphLeft } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsExclamationCircle } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { PRIVATE_ROUTE } from "@/routes/path";
import { useAuthCtx } from "@/context/Auth";
import { useState } from "react";

const { DASHBOARD, MESSAGES, SETTINGS } = PRIVATE_ROUTE

export const MenuNavLinks = [
    {
        name: "Dashboard",
        icon: RxDashboard,
        location: DASHBOARD
    },
    {
        name: "Statistics",
        icon: VscGraph,
        location: ""
    },
    {
        name: "Savings",
        icon: SlBadge,
        location: ""
    },
    {
        name: "Messages",
        icon: BiMessageSquareDetail,
        location: MESSAGES
    },
    {
        name: "Transactions",
        icon: VscGraphLeft,
        location: ""
    },
]

export const GeneralNavLinks = [
    {
        name: "Settings",
        icon: IoSettingsOutline,
        location: SETTINGS
    },
    {
        name: "Appearance",
        icon: AiOutlinePieChart,
        location: ""
    },
    {
        name: "Help",
        icon: BsExclamationCircle,
        location: ""
    },
]

interface IuseLogout {
    logOut: () => Promise<void>;
    showModal: () => void;
    handleCancel: () => void;
    handleOk: () => void;
    confirmLoading: boolean;
    modalText: string;
    open: boolean;
}

export const useLogout = (): IuseLogout => {
    const { logOut } = useAuthCtx()
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Are you sure you want to log out?');

    const showModal = () => {
        setOpen(true);
        setModalText('Are you sure you want to log out?');
    };

    const handleOk = () => {
        setModalText('Logging out');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            logOut()
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);

    };

    return {
        logOut,
        showModal,
        handleCancel,
        handleOk,
        confirmLoading,
        modalText,
        open
    }
}


//Animations (Framer-Motion)
export const sidebarParent = {
    hide: { x: "-100%", opaciy: 0, },
    show: { x: 0, opacity: 1, },
}

export const sidebarChildren = {
    hide: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1 },
}
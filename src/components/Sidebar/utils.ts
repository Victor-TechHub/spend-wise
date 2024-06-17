import { RxDashboard } from "react-icons/rx";
import { VscGraph, VscGraphLeft } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsExclamationCircle } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";

export const MenuNavLinks = [
    {
        name: "Dashboard",
        icon: RxDashboard,
        location: ""
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
        location: ""
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
        location: ""
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
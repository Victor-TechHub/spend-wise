import { Logo } from "@/styles/body"
import { LogoutBtn, NavigationLinks, SideBarContainer } from "./style"
import LOGO from "/spendwise_logo.png"
import { GeneralNavLinks, MenuNavLinks, useLogout } from "./utils"
import { Link } from "react-router-dom"
import { SlLogout } from "react-icons/sl";
import { Modal } from 'antd';
import { GoAlert } from "react-icons/go";
import { motion } from "framer-motion"

type SideBarProps = {
    isNavOpen: boolean
}

const SideBar = (props: SideBarProps) => {
    const properties = props
    console.log(properties)
    const {
        handleOk,
        confirmLoading,
        handleCancel,
        modalText,
        open,
        showModal
    } = useLogout()

    const MotionSideBarContainer = motion(SideBarContainer)

    return (
        <MotionSideBarContainer>
            <Logo><img src={LOGO} width={40} alt="Logo" />pendWise</Logo>
            <NavigationLinks>
                <header>Menu</header>
                {MenuNavLinks.map((nav, idx) => {
                    return (
                        <Link key={idx} to={nav.location}>
                            <li>
                                <nav.icon size={16} />
                                {nav.name}
                            </li>
                        </Link>
                    )
                })}
            </NavigationLinks>

            <NavigationLinks>
                <header>General</header>
                {GeneralNavLinks.map((nav, idx) => {
                    return (
                        <Link key={idx} to={nav.location}>
                            <li>
                                <nav.icon size={16} />
                                {nav.name}
                            </li>
                        </Link>
                    )
                })}
            </NavigationLinks>

            <LogoutBtn onClick={showModal}>
                <SlLogout />
                Log Out
            </LogoutBtn>

            <Modal
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >

                <p style={
                    {
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                    <GoAlert
                        size={45}
                        color="#ff9966"
                    />
                    {modalText}
                </p>
            </Modal>
        </MotionSideBarContainer>
    )
}

export default SideBar
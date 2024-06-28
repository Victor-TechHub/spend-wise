import { Logo } from "@/styles/body"
import { LogoutBtn, NavigationLinks, SideBarContainer } from "./style"
import LOGO from "/spendwise_logo.png"
import { GeneralNavLinks, MenuNavLinks, sidebarChildren, sidebarParent, useLogout } from "./utils"
import { Link } from "react-router-dom"
import { SlLogout } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from 'antd';
import { GoAlert } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion"

interface SideBarProps {
    isNavOpen: boolean
    setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar = (props: SideBarProps) => {
    const { isNavOpen, setIsNavOpen } = props
    const {
        handleOk,
        confirmLoading,
        handleCancel,
        modalText,
        open,
        showModal
    } = useLogout()

    const MotionSideBarContainer = motion(SideBarContainer)
    const MotionNavigationLinks = motion(NavigationLinks)

    return (
        <>
            {
                isNavOpen &&
                <AnimatePresence>
                    <MotionSideBarContainer
                        initial="hide"
                        animate="show"
                        transition={{
                            type: "tween",
                        }}
                        variants={sidebarParent}
                    >
                        <header>
                            <Logo>
                                <img
                                    src={LOGO}
                                    width={40}
                                    alt="Logo"
                                />
                                pendWise
                            </Logo>
                            <AiOutlineClose
                                size={16}
                                onClick={() => setIsNavOpen(false)}
                            />
                        </header>
                        <MotionNavigationLinks
                            initial="hide"
                            animate="show"
                            variants={sidebarChildren}
                        >
                            <header>Menu</header>
                            {MenuNavLinks.map((nav, idx) => {
                                return (
                                    <Link key={idx} to={nav.location}>
                                        <li onClick={() => setIsNavOpen(false)}>
                                            <nav.icon size={16} />
                                            {nav.name}
                                        </li>
                                    </Link>
                                )
                            })}
                        </MotionNavigationLinks>

                        <MotionNavigationLinks
                            initial="hide"
                            animate="show"
                            variants={sidebarChildren}
                        >
                            <header>General</header>
                            {GeneralNavLinks.map((nav, idx) => {
                                return (
                                    <Link key={idx} to={nav.location}>
                                        <li onClick={() => setIsNavOpen(false)}>
                                            <nav.icon size={16} />
                                            {nav.name}
                                        </li>
                                    </Link>
                                )
                            })}
                        </MotionNavigationLinks>

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
                </AnimatePresence>
            }

        </>

    )
}

export default SideBar
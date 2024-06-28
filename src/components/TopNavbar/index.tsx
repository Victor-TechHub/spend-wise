import {
    Actions,
    DoubleActionBtn,
    Greetings,
    NavContainer,
    SingleActionBtn,
    UserInfoBtn
} from "./style"
import {
    MdOutlineWavingHand,
    MdOutlineLightMode,
    MdOutlineDarkMode
} from "react-icons/md";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import user from "/demo_user.jpg"
import { useThemeCtx } from "@/context/theme";
import { useAuthCtx } from "@/context/Auth";
import { Tooltip } from "antd";

type TopNavBarProps = {
    setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TopNavbar = (props: TopNavBarProps) => {
    const { setIsNavOpen } = props
    const { LightThemeHandler, DarkThemeHandler, theme } = useThemeCtx()
    const { currentUser } = useAuthCtx()

    function greetUser() {
        const timezone = new Date().getHours()
        const greetings = timezone >= 6 && timezone < 12
            ? "Morning"
            :
            timezone >= 12 && timezone < 18
                ? "Afternoon"
                : "Night"
        return greetings
    }

    return (
        <NavContainer>
            <Greetings>
                <h3>Good {greetUser()} {currentUser?.displayName} <MdOutlineWavingHand size={19} color="#F4C469" /></h3>
                <p>Here's what happened In Your Account Today</p>
            </Greetings>

            <Actions>
                <SingleActionBtn>
                    <CiSearch size={19} />
                </SingleActionBtn>

                <SingleActionBtn>
                    <GoBell size={19} />
                </SingleActionBtn>

                <DoubleActionBtn>
                    <span
                        onClick={LightThemeHandler}
                        style={{
                            background: theme === "light" ? "#377CF6" : "",
                            color: theme === "light" ? "#FFF" : ""
                        }}>
                        <MdOutlineLightMode size={19} />
                    </span>
                    <span
                        onClick={DarkThemeHandler}
                        style={{
                            background: theme === "dark" ? "#377CF6" : "",
                            color: theme === "light" ? "rgb(9, 9, 9)" : ""
                        }}>
                        <MdOutlineDarkMode size={19} />
                    </span>
                </DoubleActionBtn>

                <UserInfoBtn>
                    <img src={user} alt="Demo User" />
                    <div>
                        <h3>{currentUser?.displayName}</h3>
                        <p>{currentUser?.email}</p>
                    </div>
                    <i><IoIosArrowDown size={19} /></i>
                </UserInfoBtn>

                <SingleActionBtn>
                    <Tooltip title="Toggle Sidebar">
                        <HiBars3CenterLeft
                            size={19}
                            onClick={() => setIsNavOpen(state => !state)} />
                    </Tooltip>
                </SingleActionBtn>
            </Actions>
        </NavContainer>
    )
}

export default TopNavbar
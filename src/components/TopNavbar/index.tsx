import {
    Actions,
    DoubleActionBtn,
    Greetings,
    NavContainer,
    SingleActionBtn,
    UserInfoBtn
} from "./style"
import { MdOutlineWavingHand, MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import user from "/demo_user.jpg"
import { useThemeCtx } from "@/context/theme";
import { useAuthCtx } from "@/context/Auth";

const TopNavbar = () => {
    const { LightThemeHandler, DarkThemeHandler, theme } = useThemeCtx()
    const { currentUser } = useAuthCtx()
    return (
        <NavContainer>
            <Greetings>
                <h3>Good Morning {currentUser?.displayName} <MdOutlineWavingHand size={19} color="#F4C469" /></h3>
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
                    <IoIosArrowDown size={19} />
                </UserInfoBtn>
            </Actions>
        </NavContainer>
    )
}

export default TopNavbar
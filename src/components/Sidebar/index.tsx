import { Logo } from "@/styles/body"
import { NavigationLinks, SideBarContainer } from "./style"
import LOGO from "/spendwise_logo.png"
import { GeneralNavLinks, MenuNavLinks } from "./utils"


const SideBar = () => {
    return (
        <SideBarContainer>
            <Logo><img src={LOGO} width={40} alt="Logo" />pendWise</Logo>
            <NavigationLinks>
                <header>Menu</header>
                {MenuNavLinks.map((nav, idx) => {
                    return (
                        <li key={idx}>
                            <nav.icon size={16} />
                            {nav.name}
                        </li>
                    )
                })}
            </NavigationLinks>

            <NavigationLinks>
                <header>General</header>
                {GeneralNavLinks.map((nav, idx) => {
                    return (
                        <li key={idx}>
                            <nav.icon size={16} />
                            {nav.name}
                        </li>
                    )
                })}
            </NavigationLinks>
        </SideBarContainer>
    )
}

export default SideBar
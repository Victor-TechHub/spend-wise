import { ReactNode, createContext, useContext } from "react"
import useLocalStorage from "use-local-storage"
import { ConfigProvider } from 'antd';
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../styles/theme/styles";

const ThemeCtx = createContext({
    theme: "",
    LightThemeHandler: () => { },
    DarkThemeHandler: () => { }
})

export const ThemeCtxProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useLocalStorage("THEME", "light")
    const LightThemeHandler = () => setTheme("light")
    const DarkThemeHandler = () => setTheme("dark")

    const themeConfig = theme === "light" ? lightTheme : darkTheme

    const antdTheme = {
        token: {
            colorPrimary: themeConfig.secondary,
            colorTextBase: themeConfig.textGray,
            colorBgBase: themeConfig.background,
            colorBorder: themeConfig.bg_2,
        },
    };

    const values = {
        theme,
        LightThemeHandler,
        DarkThemeHandler
    }

    return (
        <ThemeCtx.Provider value={values}> {/* Custom */}
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> {/* Styled Components */}
                <ConfigProvider theme={antdTheme}> {/* Ant Design */}
                    {children}
                </ConfigProvider>
            </ThemeProvider>
        </ThemeCtx.Provider>
    )
}

export const useThemeCtx = () => useContext(ThemeCtx)
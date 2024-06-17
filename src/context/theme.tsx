import { ReactNode, createContext, useContext } from "react"
import useLocalStorage from "use-local-storage"

const ThemeCtx = createContext({
    theme: "",
    LightThemeHandler: () => { },
    DarkThemeHandler: () => { }
})

export const ThemeCtxProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useLocalStorage("THEME", "light")
    const LightThemeHandler = () => setTheme("light")
    const DarkThemeHandler = () => setTheme("dark")

    return (
        <ThemeCtx.Provider value={{
            theme,
            LightThemeHandler,
            DarkThemeHandler
        }}>
            {children}
        </ThemeCtx.Provider>
    )
}

export const useThemeCtx = () => useContext(ThemeCtx)
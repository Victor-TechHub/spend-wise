import useLocalStorage from "use-local-storage"

const useTheme = () => {
    const [theme, setTheme] = useLocalStorage("THEME", "dark")
    const toggleTheme = () => setTheme("light" ? "dark" : "light")
    return { theme, toggleTheme }
}

export default useTheme
import {useContext, createContext, useState} from "react";

type themeContextType = {
    theme: string;
    onThemeChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
 const ThemeContext = createContext<themeContextType>({
     theme: "primary",
     onThemeChange: () =>{}
 });


export function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState('primary')

    function onThemeChange(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation()
        setTheme((prevTheme) => prevTheme === 'primary' ? 'secondary' : 'primary')
    }

    return (
        <ThemeContext.Provider value={{theme, onThemeChange}}>{children}</ThemeContext.Provider>
    )

}

export  const UseThemeButton =()=>{
    return useContext(ThemeContext)
}


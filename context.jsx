import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext();
const ThemeContextProvider = (props)=>{
    const [darkMode, setDarkMode] = useState(false);
    const contextvalue = {
        darkMode,setDarkMode
    }
    return <ThemeContext.Provider value={contextvalue}>
        {props.children}
    </ThemeContext.Provider>
}
export default ThemeContextProvider
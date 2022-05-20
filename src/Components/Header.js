import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from '../ThemeContext'
import MUISwitch from '../MUISwitch'
import FormControlLabel from '@mui/material/FormControlLabel';


const Header = () => {
    const themes = useContext(ThemeContext)
    const [theme, setTheme] = useState(themes.dark)
    const [toggled, setToggled] = useState(false)

    const toggleTheme = () => {
        toggled ? setTheme(themes.dark) : setTheme(themes.light)
    }

    useEffect(() => {
        toggleTheme()
    })

    return (
        <ThemeContext.Provider value={theme}>
            <header style={theme}>
                <h1 className='header-text'>Wildfire Tracker: Powered By NASA Earth Observatory Natural Event Tracker </h1>
                <FormControlLabel
                    control={<MUISwitch sx={{ m: 5 }} checked={toggled} onChange={(e) => setToggled(!toggled)}/>}
                />
            </header>
        </ThemeContext.Provider>
    )
}

export default Header

import React from 'react'
import icon from './header-icon.jpg'

const Header = () => {
    return (
        <header className='header'>
            <img className='header-icon' src={icon} />
            <h1 className='header-text'>Wildfire Tracker: Powered By NASA Earth Observatory Natural Event Tracker </h1>
        </header>
    )
}

export default Header

import React, {useContext} from 'react'
import { Icon } from '@iconify/react';
import circleLetterX from '@iconify/icons-arcticons/circle-letter-x';
import ThemeContext from '../ThemeContext'



const FireInfoBox = ({info, closeBox}) => {
    const themes = useContext(ThemeContext)

    return (
        <div className='fire-info'>
            <Icon 
                className='fire-marker-close' 
                onClick={closeBox} 
                icon={circleLetterX} 
                color="red" 
                width="36" height="36"
            />
            <h3>{info.title}</h3>
        </div>
    )
}
 
export default FireInfoBox

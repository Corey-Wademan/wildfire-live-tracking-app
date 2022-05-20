import React from "react"


export const themes = {
	light: {
		color: 'black',
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		height: '2.5rem',
		alignItems: 'center',
		justifyContent: 'center',
	},
	dark: {
		color: 'white',
		backgroundColor: 'black',
		display: 'flex',
		flexDirection: 'row',
		height: '2.5rem',
		alignItems: 'center',
		justifyContent: 'center',
	}
}

const ThemeContext = React.createContext(themes)

export default ThemeContext
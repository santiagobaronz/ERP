import { createContext, useContext, useEffect, useState } from 'react';

const ColorContext = createContext({});

const ColorProvider = ({ children }) => {

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode);
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const contextValue = { darkMode, toggleDarkMode }

	return (
		<ColorContext.Provider value={contextValue}>
			{children}
		</ColorContext.Provider>
	);
}

const useColorMode = () => useContext(ColorContext);

export { ColorProvider, useColorMode };

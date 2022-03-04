import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact/Contact';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, pink, grey } from '@mui/material/colors';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	const light = createTheme({
		palette: {
			mode: 'light',
		},
	});

	const getDesignTokens = (mode) => ({
		palette: {
			mode,
			primary: {
				...amber,
				...(mode === 'dark' && {
					main: pink[300],
				}),
			},
			...(mode === 'dark' && {
				background: {
					default: grey[900],
				},
				
			}),
		},
	});

	const darkModeTheme = createTheme(getDesignTokens('dark'));

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div>
			<ThemeProvider theme={isDarkMode ? darkModeTheme : light}>
				{load ? (
					<Preloader load={load} />
				) : (
					<div className='App' id={load ? 'no-scroll' : 'scroll'}>
						<Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
						<Home />
						<About />
						<Projects />
						<Contact />
						<Footer />
					</div>
				)}
			</ThemeProvider>
		</div>
	);
}

export default App;

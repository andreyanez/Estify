import { useEffect, useState } from 'react';
import { accessToken, logout } from './spotify.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function App() {
	const [token, setToken] = useState('');

	useEffect(() => {
		setToken(accessToken);
	}, []);

	return <div className="App">{token}</div>;
}

export default App;

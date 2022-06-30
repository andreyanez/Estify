import { useEffect, useState } from 'react';
import { accessToken, logout } from './spotify.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/login.js';

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

	return (
		<>
			<main className="App">
				{!token ? (
					<Login />
				) : (
					<>
						<h1 className="text-teal-400">Bienvenido</h1>
						<button onClick={logout}>Cierra sesión</button>
					</>
				)}
			</main>
		</>
	);
}

export default App;

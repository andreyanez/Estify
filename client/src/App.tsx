import { useEffect, useState } from 'react';
import { accessToken, logout } from './spotify.js';
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import { Login, Profile } from './pages';
import { NavBar } from './components/navBar';

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
			{!token ? (
				<Login />
			) : (
				<>
					<NavBar />
					<main className="container mx-auto max-w-7xl px-20">
						<ScrollToTop />
						<Routes>
							<Route path="/" element={<Profile />} />
						</Routes>
					</main>
				</>
			)}
		</>
	);
}

export default App;

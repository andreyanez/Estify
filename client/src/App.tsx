import { useEffect, useState } from 'react';
import { accessToken } from './spotify.js';
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import { Login, Profile, Artists, Artist, Tracks, Playlists } from './pages';
import { NavBar } from './components/navBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
		setToken(accessToken!);
	}, []);

	return (
		<>
			{!token ? (
				<Login />
			) : (
				<QueryClientProvider client={queryClient}>
					<>
						<NavBar />
						<div className="pl-28">
							<main className="container min-h-screen mx-auto max-w-7xl px-20 py-24">
								<ScrollToTop />
								<Routes>
									<Route path="/" element={<Profile />} />
									<Route path="/artists" element={<Artists />} />
									<Route path="/artist/:id" element={<Artist />} />
									<Route path="/tracks" element={<Tracks />} />
									<Route path="/playlists" element={<Playlists />} />
								</Routes>
							</main>
						</div>
					</>
				</QueryClientProvider>
			)}
		</>
	);
}

export default App;

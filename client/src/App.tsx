import { Router, Routes, Route } from 'react-router-dom';
import {
	Login,
	Profile,
	Artists,
	Artist,
	Tracks,
	Track,
	Playlists,
	Playlist,
	Features,
	Layout,
	Policy,
} from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/politica" element={<Policy />} />
					<Route path="/app" element={<Layout />}>
						<Route index element={<Profile />} />
						<Route path="artists" element={<Artists />} />
						<Route path="artist/:id" element={<Artist />} />
						<Route path="tracks" element={<Tracks />} />
						<Route path="track/:id" element={<Track />} />
						<Route path="playlists" element={<Playlists />} />
						<Route path="playlist/:id" element={<Playlist />} />
						<Route path="features" element={<Features />} />
					</Route>
				</Routes>
			</QueryClientProvider>
		</>
	);
}

export default App;

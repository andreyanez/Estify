import '../styles/pages/Artists.scss';
import { useState } from 'react';
import { ListFilter } from '../components/ListFilter';
import { SpotifyLogo } from '../components/SpotifyLogo';
import { ArtistGrid } from '../components/ArtistGrid';

export const Artists = () => {
	const [activeRange, setActiveRange] = useState<string>('long');

	return (
		<div className="xl:py-20">
			<div className="mb-8 flex justify-center md:block">
				<SpotifyLogo theme="white" size="large" />
			</div>
			<div className="mb-8 flex flex-col items-center justify-between gap-y-8 md:mb-16 xl:flex-row">
				<h1 className="filter__title">Top Artistas</h1>
				<ListFilter setActiveRange={setActiveRange} activeRange={activeRange} />
			</div>
			<ArtistGrid activeRange={activeRange} />
		</div>
	);
};

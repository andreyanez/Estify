import '../styles/pages/Artists.scss';
import { useQuery } from '@tanstack/react-query';
import { getTopTracksLong, getTopTracksMedium, getTopTracksShort } from '../spotify';
import { useState } from 'react';
import { Loader } from '../components/Loader';
import { TracKItem } from '../components/TrackItem';

export const Tracks = () => {
	const [activeRange, setActiveRange] = useState<string>('long');

	// fetches data based on activeRange value
	const fetchTracks = () => {
		if (activeRange === 'long') return getTopTracksLong();
		if (activeRange === 'medium') return getTopTracksMedium();
		if (activeRange === 'short') return getTopTracksShort();
	};

	const { data: tracks, isLoading } = useQuery(['tracks', { activeRange }], fetchTracks);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="py-20">
			<div className="flex justify-between mb-16 items-center">
				<h1 className="filter__title">Top Tracks</h1>
				<ul className="filter__list">
					<li>
						<button
							className={activeRange === 'long' ? 'active' : ''}
							onClick={() => setActiveRange('long')}
						>
							Todos los tiempos
						</button>
					</li>
					<li>
						<button
							className={activeRange === 'medium' ? 'active' : ''}
							onClick={() => setActiveRange('medium')}
						>
							Últimos 6 meses
						</button>
					</li>
					<li>
						<button
							className={activeRange === 'short' ? 'active' : ''}
							onClick={() => setActiveRange('short')}
						>
							Últimas 4 semanas
						</button>
					</li>
				</ul>
			</div>
			<ul className="track__list">
				{tracks.data.items.map((track: any, index: number) => {
					return <TracKItem track={track} key={index} />;
				})}
			</ul>
		</div>
	);
};

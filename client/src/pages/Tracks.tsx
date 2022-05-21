import '../styles/pages/Artists.scss';
import { useQuery } from '@tanstack/react-query';
import { getTopTracksLong, getTopTracksMedium, getTopTracksShort } from '../spotify';
import { useState } from 'react';
import { Loader } from '../components/Loader';
import { TracKItem } from '../components/TrackItem';
import { ListFilter } from '../components/ListFilter';

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
		<div className="xl:py-20">
			<div className="mb-8 flex flex-col items-center justify-between gap-y-8 md:mb-16 xl:flex-row">
				<h1 className="filter__title">Top Tracks</h1>
				<ListFilter setActiveRange={setActiveRange} activeRange={activeRange} />
			</div>
			<ul className="track__list">
				{tracks.data.items.map((track: any, index: number) => {
					return <TracKItem track={track} key={index} />;
				})}
			</ul>
		</div>
	);
};

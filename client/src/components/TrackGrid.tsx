import React from 'react';
import { getTopTracksLong, getTopTracksMedium, getTopTracksShort } from '../spotify';
import { TracKItem } from '../components/TrackItem';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../components/Loader';
import { FetchError } from './fetchError';

export const TrackGrid = ({
	activeRange = 'long',
	max,
}: {
	activeRange?: string;
	max?: number;
}) => {
	const fetchTracks = () => {
		if (activeRange === 'long') return getTopTracksLong();
		if (activeRange === 'medium') return getTopTracksMedium();
		if (activeRange === 'short') return getTopTracksShort();
	};

	const { data: tracks, isLoading, isError } = useQuery(['tracks', { activeRange }], fetchTracks);

	if (isLoading) {
		return (
			<div className="py-20">
				<Loader />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="py-20">
				<FetchError />
			</div>
		);
	}

	return (
		<ul className="track__list">
			{tracks.data.items.slice(0, max).map((track: any, index: number) => {
				return <TracKItem track={track} key={index} />;
			})}
		</ul>
	);
};

import React from 'react';
import { getTopTracksLong, getTopTracksMedium, getTopTracksShort } from '../spotify';
import { TracKItem } from '../components/TrackItem';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../components/Loader';
import { FetchError } from './fetchError';
import { Link } from 'react-router-dom';

interface IProps {
	activeRange?: string;
	max?: number;
	type?: 'horizontal' | 'vertical';
	seeMore?: boolean;
}

export const TrackGrid = ({
	activeRange = 'long',
	max,
	type = 'horizontal',
	seeMore = false,
}: IProps) => {
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
		<ul className={`track__list ${type == 'vertical' && 'vertical'}`}>
			<>
				{tracks.data.items.slice(0, max).map((track: any, index: number) => {
					return <TracKItem track={track} key={index} />;
				})}
				{seeMore && (
					<li className={`track__list_item seeMore`}>
						<Link to={'/app/tracks'}>
							<div className="track__list_item__container">
								<div className="track__list_item__img">+</div>
								<div className="track__data">
									<span className="track__title">Ver más</span>
								</div>
							</div>
						</Link>
					</li>
				)}
			</>
		</ul>
	);
};

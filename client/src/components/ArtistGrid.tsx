import React from 'react';
import { HoverCover } from '../components/HoverCover';
import { Link } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { useQuery } from '@tanstack/react-query';
import { getTopArtistsLong, getTopArtistsMedium, getTopArtistsShort } from '../spotify';
import { FetchError } from './fetchError';

export const ArtistGrid = ({ activeRange }: { activeRange: string }) => {
	// fetches data based on activeRange value
	const fetchArtists = () => {
		if (activeRange === 'long') return getTopArtistsLong();
		if (activeRange === 'medium') return getTopArtistsMedium();
		if (activeRange === 'short') return getTopArtistsShort();
	};

	//react query fires function which return a api call
	// i set the activeRange state as as key so the
	// query updates when a setActveRange function fires
	const {
		data: artists,
		isLoading,
		isError,
	} = useQuery(['artists', { activeRange }], fetchArtists);

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
		<ul className="artists__grid">
			{artists.data.items.map((artist: any, index: number) => {
				return (
					<li className="artist__item" key={index}>
						<Link to={`/artist/${artist.id}`}>
							<div className="artist_item__img">
								<img src={artist.images[2].url} alt={artist.name} />
								<HoverCover />
							</div>
							<span>
								{index + 1}
								{'. '}
								{artist.name}
							</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

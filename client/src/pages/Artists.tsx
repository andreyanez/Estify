import '../styles/pages/Artists.scss';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getTopArtistsLong, getTopArtistsMedium, getTopArtistsShort } from '../spotify';
import { useState } from 'react';
import { Loader } from '../components/Loader';
import { HoverCover } from '../components/HoverCover';
import { ListFilter } from '../components/ListFilter';

export const Artists = () => {
	const [activeRange, setActiveRange] = useState<string>('long');

	// fetches data based on activeRange value
	const fetchArtists = () => {
		if (activeRange === 'long') return getTopArtistsLong();
		if (activeRange === 'medium') return getTopArtistsMedium();
		if (activeRange === 'short') return getTopArtistsShort();
	};

	//react query fires function which return a api call
	// i set the activeRange state as as key so the
	// query updates when a setActveRange function fires
	const { data: artists, isLoading } = useQuery(['artists', { activeRange }], fetchArtists);

	if (isLoading) {
		return (
			<div className="py-20">
				<Loader />
			</div>
		);
	}

	return (
		<div className="py-20">
			<div className="flex justify-between mb-16 items-center">
				<h1 className="filter__title">Top Artistas</h1>
				<ListFilter setActiveRange={setActiveRange} activeRange={activeRange} />
			</div>
			<ul className="artists__grid">
				{artists.data.items.map((artist: any, index: number) => {
					return (
						<li className="artist__item" key={index}>
							<Link to={`/artist/${artist.id}`}>
								<div className="artist_item__img">
									<img src={artist.images[2].url} alt={artist.name} />
									<HoverCover />
								</div>
								<span>{artist.name}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

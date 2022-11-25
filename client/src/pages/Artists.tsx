import '../styles/pages/Artists.scss';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTopArtistsLong, getTopArtistsMedium, getTopArtistsShort } from '../spotify';
import { useState } from 'react';

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
	const { data: artists, isLoading }: any = useQuery(['artists', { activeRange }], fetchArtists);

	if (isLoading) {
		return <span className="mt-60 block">Loading...</span>;
	}

	return (
		<div className="py-20">
			<div className="flex justify-between mb-16 items-center">
				<h1 className="filter__title">Top Artistas</h1>
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
			<ul className="artists__grid">
				{artists.data.items.map((artist: any, index: number) => {
					return (
						<li className="artist__item" key={index}>
							<Link to={`/artist/${artist.id}`}>
								<div className="artist_item__img">
									<img src={artist.images[2].url} alt={artist.name} />
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

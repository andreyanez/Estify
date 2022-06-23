import '../styles/pages/Artists.scss';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTopArtistsLong } from '../spotify';

export const Artists = () => {
	const artistQuery: any = useQuery(['artists'], getTopArtistsLong);

	if (artistQuery.isLoading) {
		return <span className="mt-60 block">Loading...</span>;
	}

	const topArtists = artistQuery.data.data;

	return (
		<div className="py-20">
			<div className="flex justify-between mb-16 items-center">
				<h1 className="filter__title">Top Artistas</h1>
				<ul className="filter__list">
					<li>
						<button>Todos los tiempos</button>
					</li>
					<li>
						<button>Últimos 6 meses</button>
					</li>
					<li>
						<button>Últimas 4 semanas</button>
					</li>
				</ul>
			</div>
			<ul className="artists__grid">
				{topArtists.items.map((artist: any, index: number) => {
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

import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTopArtistsLong } from '../spotify';
import '../styles/components/ArtistList.scss';

export const ArtistList = () => {
	const artistQuery: any = useQuery(['artists'], getTopArtistsLong);

	if (artistQuery.isLoading) {
		return <span>Loading...</span>;
	}

	const topArtists = artistQuery.data.data;

	return (
		<div className="artist__container">
			<div className="flex justify-between mb-12 items-center">
				<h2>Top Artists de todos los tiempos</h2>
				<button type="button" className="main__button">
					VER MÁS
				</button>
			</div>

			<ul className="artist__list">
				{topArtists.items.slice(0, 10).map((artist: any, index: number) => {
					return (
						<li className="artist__list_item" key={index}>
							<Link to={`/artist/${artist.id}`}>
								<div className="artist__list_item__img">
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

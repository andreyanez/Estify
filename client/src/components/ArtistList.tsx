import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTopArtistsLong } from '../spotify';
import '../styles/components/ArtistList.scss';
import { Loader } from './Loader';
import { HoverCover } from './HoverCover';
import { SpotifyLogo } from './SpotifyLogo';
import { FetchError } from './fetchError';

export const ArtistList = () => {
	const { data: artist, isLoading, isError } = useQuery(['artists'], getTopArtistsLong);

	if (isLoading) {
		return (
			<div className="profile__container">
				<Loader />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="profile__container">
				<FetchError />
			</div>
		);
	}

	return (
		<div className="profile__container">
			<div className="profile__container__top">
				<h2>Tus artistas top de todos los tiempos</h2>
				<Link to={'/app/artists'} className="fill__button">
					Ver más
				</Link>
			</div>
			<div className="mb-8 flex justify-center md:block">
				<SpotifyLogo theme="white" />
			</div>
			<ul className="artist__list">
				{artist.data.items.slice(0, 5).map((artist: any, index: number) => {
					return (
						<li className="artist__list_item" key={index}>
							<Link to={`/app/artist/${artist.id}`}>
								<div className="artist__list_item__img">
									<img src={artist.images[2].url} alt={artist.name} />
									<HoverCover />
								</div>
								<span>
									{index + 1}. {artist.name}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
			<Link to={'/app/artists'} className="fill__button">
				Ver más
			</Link>
		</div>
	);
};

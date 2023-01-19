import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTopTracksLong } from '../spotify';
import '../styles/components/TrackList.scss';
import { Loader } from './Loader';
import { TracKItem } from './TrackItem';
import { SpotifyLogo } from './SpotifyLogo';
import { FetchError } from './fetchError';

export const TrackList = () => {
	const { isLoading, data: trackdata, isError } = useQuery(['tracks'], getTopTracksLong);

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
				<h2>Tus tracks top de todos los tiempos</h2>
				<Link to={'/tracks'} className="fill__button">
					Ver más
				</Link>
			</div>
			<div className="mb-8 flex justify-center md:block">
				<SpotifyLogo theme="white" />
			</div>
			<ul className="track__list">
				{trackdata.data.items.slice(0, 10).map((track: any, index: number) => {
					return <TracKItem track={track} key={index} />;
				})}
			</ul>
			<Link to={'/artists'} className="fill__button">
				Ver más
			</Link>
		</div>
	);
};

import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTopTracksLong } from '../spotify';
import '../styles/components/TrackList.scss';
import { Loader } from './Loader';
import { TracKItem } from './TrackItem';

export const TrackList = () => {
	const tracksQuery = useQuery(['tracks'], getTopTracksLong);

	if (tracksQuery.isLoading) {
		return (
			<div className="artist__container">
				<Loader />
			</div>
		);
	}

	return (
		<div className="artist__container">
			<div className="flex justify-between mb-12 items-center">
				<h2>Tus tracks top de todos los tiempos</h2>
				<Link to={'/tracks'} className="fill__button">
					Ver más
				</Link>
			</div>
			<ul className="track__list">
				{tracksQuery.data.data.items.slice(0, 10).map((track: any, index: number) => {
					return <TracKItem track={track} key={index} />;
				})}
			</ul>
		</div>
	);
};

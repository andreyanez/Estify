import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTopTracksLong } from '../spotify';
import '../styles/components/TrackList.scss';
import { formatDuration } from '../utils';

export const TrackList = () => {
	const tracksQuery: any = useQuery(['tracks'], getTopTracksLong);

	if (tracksQuery.isLoading) {
		return <span>Loading...</span>;
	}

	const topTracks = tracksQuery.data.data;

	return (
		<div className="artist__container">
			<div className="flex justify-between mb-12 items-center">
				<h2>Top Tracks de todos los tiempos</h2>
				<button type="button" className="main__button">
					VER MÁS
				</button>
			</div>
			<ul className="track__list">
				{topTracks.items.slice(0, 10).map((track: any, index: number) => {
					return (
						<li className="track__list_item" key={index}>
							<Link to={`/track/${track.id}`}>
								<div className="flex gap-5">
									<div className="track__list_item__img">
										<img src={track.album.images[2].url} alt="" />
									</div>
									<div>
										<span className="track__title">{track.name}</span>
										<div className="track__credits">
											{track.artists.map((artist: any, index: number) => {
												return (
													<span key={index}>
														{artist.name}
														{track.artists.length > 0 && index === track.artists.length - 1
															? ''
															: ','}
														&nbsp;
													</span>
												);
											})}
											{' ·  '}
											<span>{track.album.name}</span>
										</div>
									</div>
								</div>
								<span className="track__length">{formatDuration(track.duration_ms)}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

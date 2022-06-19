import '../styles/pages/Artists.scss';
import { Link } from 'react-router-dom';
import { formatDuration } from '../utils';
import { useQuery } from '@tanstack/react-query';
import { getTopTracksLong } from '../spotify';

export const Tracks = () => {
	const tracksQuery: any = useQuery(['tracks'], getTopTracksLong);

	if (tracksQuery.isLoading) {
		return <span className="mt-20 block">Loading...</span>;
	}

	const topTracks = tracksQuery.data.data;

	return (
		<div className="py-20">
			<div className="flex justify-between mb-16">
				<h1 className="filter__title">Top Tracks</h1>
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
			<ul className="track__list">
				{topTracks.items.map((track: any, index: number) => {
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

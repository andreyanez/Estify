import '../styles/pages/Artists.scss';
import { Link } from 'react-router-dom';
import { formatDuration } from '../utils';
import { useQuery } from '@tanstack/react-query';
import { getTopTracksLong, getTopTracksMedium, getTopTracksShort } from '../spotify';
import { useState } from 'react';
import { Loader } from '../components/Loader';

export const Tracks = () => {
	const [activeRange, setActiveRange] = useState<string>('long');

	// fetches data based on activeRange value
	const fetchTracks = () => {
		if (activeRange === 'long') return getTopTracksLong();
		if (activeRange === 'medium') return getTopTracksMedium();
		if (activeRange === 'short') return getTopTracksShort();
	};

	const { data: tracks, isLoading } = useQuery(['tracks', { activeRange }], fetchTracks);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="py-20">
			<div className="flex justify-between mb-16 items-center">
				<h1 className="filter__title">Top Tracks</h1>
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
			<ul className="track__list">
				{tracks.data.items.map((track: any, index: number) => {
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

// import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import '../styles/pages/Playlist.sass';
import { useMemo, useState } from 'react';
import { FeatureChart } from '../components/FeatureChart';
import { Loader } from '../components/Loader';
import { usePlaylist } from '../hooks/usePlaylist';
import { TracKItem } from '../components/TrackItem';

export const Playlist = () => {
	const { id } = useParams();
	const [sortValue, setSortValue] = useState('');
	const sortOptions = ['danceability', 'tempo', 'energy'];

	const { playlist, audioFeatures, tracksWithAudioFeatures } = usePlaylist(id!);

	// Sort tracks by audio feature to be used in template
	const sortedTracks = useMemo(() => {
		if (!tracksWithAudioFeatures) {
			return null;
		}
		return [...tracksWithAudioFeatures].sort((a, b): any => {
			const aFeatures = a['audio_features'];
			const bFeatures = b['audio_features'];

			if (!aFeatures || !bFeatures) {
				return;
			}

			return bFeatures[sortValue] - aFeatures[sortValue];
		});
	}, [sortValue, tracksWithAudioFeatures]);

	return (
		<>
			{playlist ? (
				<div className="playlist__container">
					<div className="playlist__info">
						<div>
							<img src={playlist.images[0].url} alt={playlist.name} />
							<h1>{playlist.name}</h1>
							<div className="flex items-center justify-evenly text-center">
								<h2>Creada por {playlist.owner.display_name}</h2>
								<span>{playlist.tracks.total} tracks</span>
							</div>
						</div>
						{audioFeatures && (
							<div className="mt-12 text-center">
								<h4 className="text-base">Características auditivas de la playlist</h4>
								<FeatureChart features={audioFeatures} type="horizontal" />
								<Link to={'/features'} className="text-neutral mt-4 block underline">
									¿Que es esto?
								</Link>
							</div>
						)}
					</div>
					<div className="playlist__tracks">
						<div className="mb-8 block w-72 mx-auto mr-0 filter">
							<label htmlFor="order-select">Ordena tus tracks por:</label>
							<select
								id="order-select"
								name="track-order"
								onChange={e => setSortValue(e.target.value)}
							>
								{sortOptions.map((option, i) => (
									<option value={option} key={i}>
										{`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
									</option>
								))}
							</select>
						</div>
						{sortedTracks ? (
							<ul className="track__list">
								{sortedTracks.map((track: any, index: number) => {
									return <TracKItem track={track} key={index} />;
								})}
							</ul>
						) : (
							<Loader />
						)}
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

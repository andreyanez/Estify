// import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import '../styles/pages/Playlist.sass';
import { useMemo, useState } from 'react';
import { FeatureChart } from '../components/FeatureChart';
import { Loader } from '../components/Loader';
import { usePlaylist } from '../hooks/usePlaylist';
import { TracKItem } from '../components/TrackItem';
import { SpotifyLogo } from '../components/SpotifyLogo';

export const Playlist = () => {
	const { id } = useParams();
	const [sortValue, setSortValue] = useState('');
	const sortOptions = ['danceability', 'tempo', 'energy', 'valence', 'duration_ms'];
	const displayOptions = ['Más bailables', 'Tempo', 'Energía', 'Valencia', 'Duración'];

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

	const setSort = (value: string) => {
		let sortIndex = displayOptions.indexOf(value);
		let newsort = sortOptions[sortIndex];
		setSortValue(newsort);
	};

	return (
		<>
			{playlist ? (
				<>
					<div className="mb-8 flex justify-center md:block">
						<SpotifyLogo theme="white" />
					</div>
					<div className="playlist__container">
						<div className="playlist__info">
							<div className="text-center">
								{playlist.images[0] && (
									<img src={playlist.images[0].url} alt={playlist.name} className="playlist__img" />
								)}
								<h1>{playlist.name}</h1>
								<div className="items-center justify-evenly text-center md:flex">
									<h2>Creada por {playlist.owner.display_name}</h2>
									<span>{playlist.tracks.total} tracks</span>
								</div>
								<div className="mt-4">
									<a href={playlist.external_urls.spotify} target="_blank" className="main__button">
										LISTEN ON SPOTIFY
									</a>
								</div>
							</div>
							{audioFeatures && audioFeatures.length > 1 && (
								<div className="mt-12 text-center">
									<h4 className="text-base">Propiedades auditivas de la playlist</h4>
									<FeatureChart features={audioFeatures} type="horizontal" />
									<Link
										to={'/app/features'}
										className="mt-4 block text-sm text-neutral underline md:text-base"
									>
										¿Que son propiedades auditivas?
									</Link>
									<div className="flex flex-col items-center gap-y-2 md:mt-8">
										<p className="text-sm">Información prevista por</p>
										<SpotifyLogo theme="white" />
									</div>
								</div>
							)}
						</div>
						<div className="playlist__tracks">
							<div className="mx-auto mb-8 block filter md:w-72 lg:mr-0">
								<label htmlFor="order-select">Ordena tus tracks por:</label>
								<select
									id="order-select"
									name="track-order"
									onChange={e => setSort(e.target.value)}
								>
									<option>Elige entre:</option>
									{displayOptions.map((option, i) => (
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
				</>
			) : (
				<Loader />
			)}
		</>
	);
};

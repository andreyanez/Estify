import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { formatDuration } from '../utils';
import { getPlaylist, getAudioFeaturesForTracks } from '../spotify';
import '../styles/pages/Playlist.sass';
import { useMemo } from 'react';

export const Playlist = () => {
	const { id } = useParams();

	const { data: playlist, isLoading: isArtistLoading } = useQuery(
		['artist'],
		() => getPlaylist(id!),
		{
			cacheTime: 0,
		}
	);

	// const { data: features, isLoading: isFeaturesLoading } = useQuery(
	// 	['features'],
	// 	() => getAudioFeaturesForTracks(playlist.data.tracks.items),
	// 	{
	// 		cacheTime: 0,
	// 		enabled: !!playlist,
	// 	}
	// );

	// console.log(tracksWithFeatures);

	if (isArtistLoading) {
		return <span className="mt-20 block">Loading...</span>;
	}

	console.log(playlist);

	// console.log(features.data);

	// const tracksWithFeatures = () => {
	// 	const items = playlist.data.tracks.items;
	// 	const featuresTofilter = features.data.audio_features;
	// 	return items.map((item: any) => {
	// 		if (!item.track.audio_features) {
	// 			const featuresObj = featuresTofilter.find((feature: any) => {
	// 				return feature.id === item.track.id;
	// 			});
	// 			item.track['audio_features'] = featuresObj;
	// 		}

	// 		return item.track;
	// 	});
	// };

	// const newData = tracksWithFeatures();

	// console.log(tracksWithFeatures());

	// console.log(features);

	return (
		<div className="playlist__container">
			{/* <div className="playlist__info">
				<img src={playlist.data.images[0].url} alt={playlist.data.name} />
				<h1>{playlist.data.name}</h1>
				<div className="flex items-center justify-evenly text-center">
					<h2>Creada por {playlist.data.owner.display_name}</h2>
					<p>{playlist.data.tracks.total} tracks</p>
				</div>
			</div>
			<ul className="track__list">
				{newData.map((track: any, index: number) => {
					return (
						<li className="track__list_item" key={track.id}>
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
			</ul> */}
		</div>
	);
};

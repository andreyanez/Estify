import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { formatDuration } from '../utils';
import { getPlaylist, getAudioFeaturesForTracks } from '../spotify';

export const Playlist = () => {
	const { id } = useParams();

	const { data: playlist, isLoading: isArtistLoading } = useQuery(
		['artist'],
		() => getPlaylist(id!),
		{
			cacheTime: 0,
		}
	);

	const { data: features, isLoading: isFeaturesLoading } = useQuery(
		['features'],
		() => getAudioFeaturesForTracks(playlist.data.tracks.items),
		{
			cacheTime: 0,
			enabled: !!playlist,
		}
	);

	if (isArtistLoading || isFeaturesLoading) {
		return <span className="mt-20 block">Loading...</span>;
	}

	// console.log(features);

	return (
		<div className="flex justify-between">
			<div>
				<img src={playlist.data.images[0].url} alt={playlist.data.name} />
				<h1>{playlist.data.name}</h1>
				<p>Creada por {playlist.data.owner.display_name}</p>
				<p>{playlist.data.tracks.total} tracks</p>
			</div>
			<ul className="track__list">
				{playlist.data.tracks.items.map((item: any, index: number) => {
					return (
						<li className="track__list_item" key={index}>
							<Link to={`/track/${item.track.id}`}>
								<div className="flex gap-5">
									<div className="track__list_item__img">
										<img src={item.track.album.images[2].url} alt="" />
									</div>
									<div>
										<span className="track__title">{item.track.name}</span>
										<div className="track__credits">
											{item.track.artists.map((artist: any, index: number) => {
												return (
													<span key={index}>
														{artist.name}
														{item.track.artists.length > 0 &&
														index === item.track.artists.length - 1
															? ''
															: ','}
														&nbsp;
													</span>
												);
											})}
											{' ·  '}
											<span>{item.track.album.name}</span>
										</div>
									</div>
								</div>
								<span className="track__length">{formatDuration(item.track.duration_ms)}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

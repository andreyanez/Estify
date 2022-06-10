// import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { formatDuration } from '../utils';
import { getPlaylist, getAudioFeaturesForTracks } from '../spotify';
import '../styles/pages/Playlist.sass';
import { useMemo, useState, useEffect } from 'react';
import axios from 'axios';

export const Playlist = () => {
	const { id } = useParams();
	const [playlist, setPlaylist] = useState<any>(null);
	const [tracksData, setTracksData] = useState<any>(null);
	const [tracks, setTracks] = useState<any>(null);
	const [audioFeatures, setAudioFeatures] = useState<any>(null);
	const [sortValue, setSortValue] = useState('');
	const sortOptions = ['danceability', 'tempo', 'energy'];

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getPlaylist(id!);
			setPlaylist(data);
			setTracksData(data.tracks);
		};

		fetchData();
	}, [id]);

	// When tracksData updates, compile arrays of tracks and audioFeatures
	useEffect(() => {
		if (!tracksData) {
			return;
		}

		// When tracksData updates, check if there are more tracks to fetch
		// then update the state variable
		const fetchMoreData = async () => {
			if (tracksData.next) {
				const { data } = await axios.get(tracksData.next);
				setTracksData(data);
			}
		};

		setTracks((tracks: any) => [...(tracks ? tracks : []), ...tracksData.items]);

		fetchMoreData();

		// Also update the audioFeatures state variable using the track IDs
		const fetchAudioFeatures = async () => {
			const { data } = await getAudioFeaturesForTracks(tracksData.items);
			setAudioFeatures((audioFeatures: any) => [
				...(audioFeatures ? audioFeatures : []),
				...data['audio_features'],
			]);
		};
		fetchAudioFeatures();
	}, [tracksData]);

	// Map over tracks and add audio_features property to each track
	const tracksWithAudioFeatures = useMemo(() => {
		if (!tracks || !audioFeatures) {
			return null;
		}

		return tracks.map(({ track }: { track: any }) => {
			const trackToAdd = track;

			if (!track.audio_features) {
				const audioFeaturesObj = audioFeatures.find((item: any) => {
					if (!item || !track) {
						return null;
					}
					return item.id === track.id;
				});

				trackToAdd['audio_features'] = audioFeaturesObj;
			}

			return trackToAdd;
		});
	}, [tracks, audioFeatures]);

	// Sort tracks by audio feature to be used in template
	const sortedTracks = useMemo(() => {
		if (!tracksWithAudioFeatures) {
			return null;
		}

		return [...tracksWithAudioFeatures].sort((a, b) => {
			const aFeatures = a['audio_features'];
			const bFeatures = b['audio_features'];

			return bFeatures[sortValue] - aFeatures[sortValue];
		});
	}, [sortValue, tracksWithAudioFeatures]);

	return (
		<>
			{playlist && (
				<div className="playlist__container">
					<div className="playlist__info">
						<img src={playlist.images[0].url} alt={playlist.name} />
						<h1>{playlist.name}</h1>
						<div className="flex items-center justify-evenly text-center">
							<h2>Creada por {playlist.owner.display_name}</h2>
							<p>{playlist.tracks.total} tracks</p>
						</div>
					</div>
					<div>
						<div>
							<label className="sr-only" htmlFor="order-select">
								Ordena tracks
							</label>
							<select
								name="track-order"
								id="order-select"
								onChange={e => setSortValue(e.target.value)}
							>
								<option value="">Sort tracks</option>
								{sortOptions.map((option, i) => (
									<option value={option} key={i}>
										{`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
									</option>
								))}
							</select>
						</div>
						<ul className="track__list">
							{sortedTracks?.map((track: any, index: number) => {
								return (
									<li className="track__list_item" key={index}>
										<Link to={`/track/${track.id}`}>
											<div className="flex gap-5">
												<div className="track__list_item__img">
													<img src={track.album.images[2].url} alt={track.name} />
												</div>
												<div>
													<span className="track__title">{track.name}</span>
													<div className="track__credits">
														{track.artists.map((artist: any, index: number) => {
															return (
																<span key={artist.id}>
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
				</div>
			)}
		</>
	);
};
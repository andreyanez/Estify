import { useEffect, useMemo, useState } from 'react';
import { getPlaylist, getAudioFeaturesForTracks, getNextGroup } from '../spotify';

export const usePlaylist = (id: string) => {
	const [playlist, setPlaylist] = useState<any>(null);
	const [tracksData, setTracksData] = useState<any>(null);
	const [tracks, setTracks] = useState<any>(null);
	const [audioFeatures, setAudioFeatures] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getPlaylist(id!);
			setPlaylist(data);
			setTracksData(data.tracks);
		};

		fetchData();
	}, [id]);

	useEffect(() => {
		if (!tracksData) {
			return;
		}

		// When tracksData updates, check if there are more tracks to fetch
		// then update the state variable
		const fetchMoreData = async (): Promise<void> => {
			if (tracksData.next) {
				const { data } = await getNextGroup(tracksData.next);
				setTracksData(data);
			}
		};

		setTracks((tracks: any) => [...(tracks ? tracks : []), ...tracksData.items]);

		fetchMoreData();

		// Also update the audioFeatures state variable using the track IDs
		const fetchAudioFeatures = async () => {
			// const ids = tracksData.items.map(({ track }: { track: any }) => track.id).join(',');
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

	return { playlist, audioFeatures, tracksWithAudioFeatures };
};

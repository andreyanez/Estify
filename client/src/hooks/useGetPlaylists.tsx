import { useEffect, useState } from 'react';
import { getNextGroup, getPlaylists } from '../spotify';

export const useGetPlaylist = () => {
	const [playlistsInfo, setPlaylistsInfo] = useState<any>(null);
	const [playlistData, setPlaylistData] = useState<any>(null);
	const [playlists, setPlaylists] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getPlaylists();
			setPlaylists(data);
			setPlaylistData(data);
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (!playlistData) {
			return;
		}
		const fetchMoreData = async (): Promise<void> => {
			if (playlistData.next) {
				const { data } = await getNextGroup(playlists.next);
				setPlaylistData(data);
			}
		};

		setPlaylistsInfo((list: any) => [...(list ? list : []), ...playlistData.items]);

		fetchMoreData();
	}, [playlistData]);

	return { playlistsInfo };
};

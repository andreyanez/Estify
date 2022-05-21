import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPlaylists } from '../spotify';
import { Loader } from '../components/Loader';
import { HoverCover } from '../components/HoverCover';
import { useGetPlaylist } from '../hooks/useGetPlaylists';

export const Playlists = () => {
	const { playlistsInfo } = useGetPlaylist();

	// const playlistQuery = useQuery(['playlists2'], getPlaylists);
	// if (playlistQuery.isLoading) {
	// 	return <Loader />;
	// }

	return playlistsInfo ? (
		<div className="xl:py-20">
			<div className="mb-8 flex flex-col items-center justify-between gap-y-8 md:mb-16 xl:flex-row">
				<h1 className="filter__title">Tus Playlists</h1>
			</div>
			<ul className="artists__grid playlists">
				{playlistsInfo.map((playlist: any, index: number) => {
					return (
						<li className="artist__item playlist__item" key={index}>
							<Link to={`/playlist/${playlist.id}`}>
								<div className="artist_item__img">
									{playlist.images[0] ? (
										<>
											<img src={playlist.images[0].url} alt={playlist.name} />
											<HoverCover />
										</>
									) : (
										<HoverCover />
									)}
								</div>
							</Link>
							<div className="flex flex-col items-center gap-y-2 text-center">
								<Link to={`/playlist/${playlist.id}`} className="leading-5">
									<span className="hover:underline">{playlist.name}</span>
								</Link>
								<span className="text-gray-500">{playlist.tracks.total} Tracks</span>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	) : (
		<Loader />
	);
};

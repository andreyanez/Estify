import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPlaylists } from '../spotify';
import { Loader } from '../components/Loader';
import { HoverCover } from '../components/HoverCover';

export const Playlists = () => {
	const playlistQuery = useQuery(['playlists'], getPlaylists);

	if (playlistQuery.isLoading) {
		return <Loader />;
	}

	return (
		<div className="py-20">
			<div className="flex justify-between mb-16">
				<h1 className="filter__title">Tus Playlists</h1>
			</div>
			<ul className="artists__grid playlists">
				{playlistQuery.data.data.items.map((playlist: any, index: number) => {
					return (
						<li className="artist__item playlist__item" key={index}>
							<Link to={`/playlist/${playlist.id}`}>
								<div className="artist_item__img">
									<img src={playlist.images[0].url} alt={playlist.name} />
									<HoverCover />
								</div>
							</Link>
							<div className="flex flex-col items-center text-center gap-y-2">
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
	);
};

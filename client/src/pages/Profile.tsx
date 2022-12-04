import { getCurrentUserProfile, logout, getPlaylists, getFollowing } from '../spotify';
import { useQuery } from '@tanstack/react-query';
import '../styles/pages/Profile.scss';
import { ArtistList } from '../components/ArtistList';
import { TrackList } from '../components/TrackList';
import { Loader } from '../components/Loader';

export const Profile = () => {
	const profileQuery = useQuery(['profile'], getCurrentUserProfile);
	const playlistsQuery = useQuery(['playlists'], getPlaylists);
	const followingQuery = useQuery(['following'], getFollowing);

	const isLoading = profileQuery.isLoading || playlistsQuery.isLoading || followingQuery.isLoading;

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<div className="profile__top">
				<div className="profile__img">
					{profileQuery.data.data.images.length && profileQuery.data.data.images[0].url && (
						<img src={profileQuery.data.data.images[0].url} alt="Avatar" />
					)}
				</div>
				<h1>{profileQuery.data.data.display_name}</h1>
				<ul>
					<li>
						<strong>{profileQuery.data.data.followers.total}</strong>
						<p>Seguidor{profileQuery.data.data.followers.total !== 1 ? 'es' : ''}</p>
					</li>
					<li>
						<strong>{followingQuery.data.data.artists.items.length}</strong>
						<p>Siguiendo</p>
					</li>
					<li>
						{playlistsQuery.data.data ? (
							<strong>{playlistsQuery.data.data.total}</strong>
						) : (
							<strong>0</strong>
						)}
						<p>Playlists</p>
					</li>
				</ul>
			</div>
			<section className="profile__bottom">
				<ArtistList />
				<TrackList />
				<button onClick={logout} type="button" className="fill__button">
					Cerrar Sesión
				</button>
			</section>
		</>
	);
};

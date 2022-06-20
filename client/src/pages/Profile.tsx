import { getCurrentUserProfile, logout, getPlaylists, getFollowing } from '../spotify';
import { useQuery } from '@tanstack/react-query';
import '../styles/pages/Profile.scss';
import { ArtistList } from '../components/ArtistList';
import { TrackList } from '../components/TrackList';

export const Profile = () => {
	const profileQuery = useQuery(['profile'], getCurrentUserProfile);
	const playlistsQuery = useQuery(['playlists'], getPlaylists);
	const followingQuery = useQuery(['following'], getFollowing);

	const isLoading = profileQuery.isLoading || playlistsQuery.isLoading || followingQuery.isLoading;

	if (isLoading) {
		return <span>Loading...</span>;
	}

	const profile = profileQuery.data.data;
	const playlists = playlistsQuery.data.data;
	const followedArtists = followingQuery.data?.data;

	return (
		<>
			{profile && (
				<>
					<div className="profile__top">
						<div className="profile__img">
							{profile.images.length && profile.images[0].url && (
								<img src={profile.images[0].url} alt="Avatar" />
							)}
						</div>
						<h1>{profile.display_name}</h1>
						<ul>
							<li>
								<strong>{profile.followers.total}</strong>
								<p>Seguidor{profile.followers.total !== 1 ? 'es' : ''}</p>
							</li>
							<li>
								<strong>{followedArtists.artists.items.length}</strong>
								<p>Siguiendo</p>
							</li>
							<li>
								{playlists ? <strong>{playlists.total}</strong> : <strong>0</strong>}
								<p>Playlists</p>
							</li>
						</ul>
						<button onClick={logout} type="button" className="main__button">
							Cerrar Sesión
						</button>
					</div>
					<section className="profile__bottom flex justify-between mb-20">
						<ArtistList />
						<TrackList />
					</section>
				</>
			)}
		</>
	);
};

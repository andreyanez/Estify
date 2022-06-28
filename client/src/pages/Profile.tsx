import { getCurrentUserProfile, logout, getPlaylists, getFollowing } from '../spotify';
import { useState, useEffect } from 'react';
import '../styles/pages/Profile.scss';

export const Profile = () => {
	const [profile, setProfile] = useState<any>(null);
	const [playlists, setPlaylists] = useState<any>(null);
	const [followedArtists, setFollowedArtists] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userFollowedArtists = await getFollowing();
				setFollowedArtists(userFollowedArtists.data);
				const userProfile = await getCurrentUserProfile();
				setProfile(userProfile.data);
				const userPlaylists = await getPlaylists();
				setPlaylists(userPlaylists.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

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
				</>
			)}
		</>
	);
};

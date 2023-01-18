import { getCurrentUserProfile, logout, getPlaylists, getFollowing } from '../spotify';
import { useQuery } from '@tanstack/react-query';
import '../styles/pages/Profile.scss';
import { ArtistList } from '../components/ArtistList';
import { TrackList } from '../components/TrackList';
import { Loader } from '../components/Loader';

export const Profile = () => {
	const { data, isLoading } = useQuery(['profile'], getCurrentUserProfile);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<div className="profile__top">
				<div className="profile__img">
					{data.data.images.length && data.data.images[0].url && (
						<img src={data.data.images[0].url} alt="Avatar" />
					)}
				</div>
				<div>
					<h1>{data.data.display_name}</h1>
				</div>
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

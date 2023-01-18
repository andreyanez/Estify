import { ProfileStrip } from './ProfileStrip';
import { logout } from '../spotify';
import '../styles/pages/Profile.scss';
import { ArtistList } from '../components/ArtistList';
import { TrackList } from '../components/TrackList';

export const Profile = () => {
	return (
		<>
			<ProfileStrip />
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

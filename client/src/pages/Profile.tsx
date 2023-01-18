import { ProfileStrip } from './ProfileStrip';
import { logout } from '../spotify';
import '../styles/pages/Profile.scss';
import { ArtistList } from '../components/ArtistList';
import { TrackList } from '../components/TrackList';

export const Profile = () => {
	return (
		<>
			<ProfileStrip />
			<div className="profile__title">
				<h1>Bienvenido.</h1>
				<h2>Esto es lo que suena para ti.</h2>
			</div>
			<section className="profile__bottom">
				<TrackList />
				<ArtistList />
				<button onClick={logout} type="button" className="fill__button">
					Cerrar Sesión
				</button>
			</section>
		</>
	);
};

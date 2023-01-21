import { Link } from 'react-router-dom';
import '../styles/components/TrackList.scss';
import { SpotifyLogo } from './SpotifyLogo';
import { TrackGrid } from './TrackGrid';

export const TrackList = () => {
	return (
		<div className="profile__container">
			<div className="profile__container__top">
				<h2>Tus tracks top de todos los tiempos</h2>
			</div>
			<div className="mb-8 flex justify-center md:block">
				<SpotifyLogo theme="white" />
			</div>
			<TrackGrid max={9} type="vertical" seeMore={true} />
		</div>
	);
};

import green from '../assets/Spotify_Logo_RGB_Green.png';
import black from '../assets/Spotify_Logo_RGB_Black.png';
import white from '../assets/Spotify_Logo_RGB_White.png';

export const SpotifyLogo = ({ theme }: { theme: 'green' | 'white' | 'black' }) => {
	switch (theme) {
		case 'green':
			return <img src={green} className="w-24" alt="Spotify logo" />;
		case 'black':
			return <img src={black} className="w-24" alt="Spotify logo" />;
		case 'white':
			return <img src={white} className="w-24" alt="Spotify logo" />;
	}
};

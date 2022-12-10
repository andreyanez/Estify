import green from '../assets/Spotify_Logo_RGB_Green.png';
import black from '../assets/Spotify_Logo_RGB_Black.png';
import white from '../assets/Spotify_Logo_RGB_White.png';

export const SpotifyLogo = ({
	theme,
	size,
}: {
	theme: 'green' | 'white' | 'black';
	size?: 'large' | 'small';
}) => {
	switch (theme) {
		case 'green':
			return (
				<img
					src={green}
					className={size === 'large' ? 'w-32' : size === 'small' ? 'w-20' : 'w-24'}
					alt="Spotify logo"
				/>
			);
		case 'black':
			return (
				<img
					src={black}
					className={size === 'large' ? 'w-32' : size === 'small' ? 'w-20' : 'w-24'}
					alt="Spotify logo"
				/>
			);
		case 'white':
			return (
				<img
					src={white}
					className={size === 'large' ? 'w-32' : size === 'small' ? 'w-20' : 'w-24'}
					alt="Spotify logo"
				/>
			);
	}
};

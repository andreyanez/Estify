import whiteLogo from '../assets/Spotify_Icon_RGB_White.png';
import blackLogo from '../assets/Spotify_Icon_RGB_Black.png';

const LOGIN_URI =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:8080/login'
		: 'https://estify.up.railway.app/login';

type ButtonProps = {
	isDark?: boolean;
};

export const SpotifyButton = ({ isDark }: ButtonProps) => {
	return (
		<a
			href={LOGIN_URI}
			className={`flex w-fit items-center justify-center rounded-md border border-transparent ${
				isDark ? 'bg-primary' : 'bg-secondary'
			}  px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg`}
		>
			<img src={whiteLogo} alt="Spotify Logo" className="mr-3 w-6" />
			Entra con Spotify
		</a>
	);
};

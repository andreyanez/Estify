import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/components/NavBar.scss';
import { Icon } from '@iconify/react';
import { logout } from '../spotify';

export const NavBar = () => {
	const navigate = useNavigate();

	const logoutFunc = () => {
		navigate('/');
		logout();
	};
	return (
		<header>
			<Link to={'/app'}>
				<picture>
					<source srcSet="/estify.webp" type="image/webp" />
					<img src="/estify.png" className="mx-auto h-12 w-auto" alt="estify" />
				</picture>
				<span className="text-xs">Estify</span>
			</Link>
			<nav>
				<ul className="nav__main">
					<li className="nav__item">
						<NavLink to="/app">
							<Icon icon="line-md:account" />
							<p>Perfil</p>
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/app/artists">
							<Icon icon="line-md:heart" />
							<p>Top Artistas</p>
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/app/tracks">
							<Icon icon="line-md:play" />
							<p>Top Tracks</p>
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/app/playlists">
							<Icon icon="line-md:list" />
							<p>Playlists</p>
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="nav__bottom">
				<button onClick={logoutFunc} type="button" className="fill__button">
					Cerrar Sesión
				</button>
			</div>
		</header>
	);
};

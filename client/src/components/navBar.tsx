import { Link, NavLink } from 'react-router-dom';
import '../styles/components/NavBar.scss';
import { Icon } from '@iconify/react';
import { logout } from '../spotify';

export const NavBar = () => {
	// const profileQuery = useQuery(['profile'], getCurrentUserProfile);

	// if (profileQuery.isLoading) {
	// 	return <Loader />;
	// }

	return (
		<header>
			<Link to={'/'}>
				<img src="/estify.png" className="mx-auto h-12 w-auto" alt="estify" />
				<span className="text-xs">Estify</span>
			</Link>
			<nav>
				<ul className="nav__main">
					<li className="nav__item">
						<NavLink to="/">
							<Icon icon="line-md:account" />
							<p>Perfil</p>
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/artists">
							<Icon icon="line-md:heart" />
							<p>Top Artistas</p>
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/tracks">
							<Icon icon="line-md:play" />
							<p>Top Tracks</p>
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/playlists">
							<Icon icon="line-md:list" />
							<p>Playlists</p>
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="nav__bottom">
				<button onClick={logout} type="button" className="fill__button">
					Cerrar Sesión
				</button>
			</div>
		</header>
	);
};

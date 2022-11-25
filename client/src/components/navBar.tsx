import { NavLink } from 'react-router-dom';
import '../styles/components/NavBar.scss';
import { Icon } from '@iconify/react';
import { logout } from '../spotify';

const year: Date = new Date();

export const NavBar = () => {
	return (
		<header>
			<div>
				<p>Estify</p>
			</div>
			<nav>
				<ul className="nav__main">
					<li className="nav__item">
						<NavLink to="/">
							<Icon icon="line-md:account" />
							<p>Profile</p>
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/artists">
							<Icon icon="line-md:heart" />
							<p>Top Artists</p>
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
							<p>Playlist</p>
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="nav__bottom">
				<a href="https://github.com/andreyanez" target="_blank">
					Andre Yanez
				</a>
				<p>{year.getFullYear()}</p>
			</div>
		</header>
	);
};

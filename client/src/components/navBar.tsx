import { Link } from 'react-router-dom';
import '../styles/components/NavBar.scss';
import { Icon } from '@iconify/react';

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
						<Link to="/">
							<Icon icon="line-md:account" />
							<p>Profile</p>
						</Link>
					</li>
					<li className="nav__item">
						<Link to="/">
							<Icon icon="line-md:heart" />
							<p>Top Artists</p>
						</Link>
					</li>
					<li className="nav__item">
						<Link to="/">
							<Icon icon="line-md:play" />
							<p>Top Tracks</p>
						</Link>
					</li>
					<li className="nav__item">
						<Link to="/">
							<Icon icon="line-md:list" />
							<p>Playlist</p>
						</Link>
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

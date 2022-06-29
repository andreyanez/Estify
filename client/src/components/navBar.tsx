import { Link } from 'react-router-dom';
import '../styles/components/NavBar.scss';

const year: Date = new Date();

export const NavBar = () => {
	return (
		<header>
			<div>
				<p>Estify</p>
			</div>
			<nav>
				<ul className="nav__main">
					<li>
						<Link to="/">
							<div className="nav__item">
								<p>Profile</p>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<div className="nav__item">
								<p>Top Artists</p>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<div className="nav__item">
								<p>Top Tracks</p>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<div className="nav__item">
								<p>Playlist</p>
							</div>
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

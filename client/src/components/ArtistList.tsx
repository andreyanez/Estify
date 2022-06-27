import { Link } from 'react-router-dom';
import '../styles/components/ArtistList.scss';

export const ArtistList = () => {
	return (
		<div className="artist__container">
			<div className="flex justify-between mb-5 items-center">
				<h2>Top Artists de todos los tiempos</h2>
				<button type="button" className="main__button">
					VER MÁS
				</button>
			</div>
			<ul className="artist__list">
				<li className="artist__list_item">
					<Link to={'/artist/:id'}>
						<div className="artist__list_item__img">
							<img
								src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
								alt=""
							/>
						</div>
						<span>Tycho</span>
					</Link>
				</li>
				<li className="artist__list_item">
					<Link to={'/artist/:id'}>
						<div className="artist__list_item__img">
							<img
								src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
								alt=""
							/>
						</div>
						<span>Tycho</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

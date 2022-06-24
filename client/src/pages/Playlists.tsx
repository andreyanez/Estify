import { Link } from 'react-router-dom';

export const Playlists = () => {
	return (
		<div className="pt-20">
			<div className="flex justify-between mb-16">
				<h1 className="filter__title">Tus Playlists</h1>
			</div>
			<ul className="artists__grid">
				<li className="artist__item">
					<Link to={'/playlists/:id'}>
						<div className="artist_item__img">
							<img
								src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
								alt=""
							/>
						</div>
					</Link>
					<div className="flex flex-col items-center">
						<Link to={'/playlists/:id'}>
							<span className="hover:underline">Tycho</span>
						</Link>
						<span className="text-gray-500">14 Tracks</span>
					</div>
				</li>
				<li className="artist__item">
					<Link to={'/playlists/:id'}>
						<div className="artist_item__img">
							<img
								src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
								alt=""
							/>
						</div>
					</Link>
					<div className="flex flex-col items-center">
						<Link to={'/playlists/:id'}>
							<span className="hover:underline">Tycho</span>
						</Link>
						<span className="text-gray-500">14 Tracks</span>
					</div>
				</li>
				<li className="artist__item">
					<Link to={'/playlists/:id'}>
						<div className="artist_item__img">
							<img
								src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
								alt=""
							/>
						</div>
					</Link>
					<div className="flex flex-col items-center">
						<Link to={'/playlists/:id'}>
							<span className="hover:underline">Tycho</span>
						</Link>
						<span className="text-gray-500">14 Tracks</span>
					</div>
				</li>
			</ul>
		</div>
	);
};

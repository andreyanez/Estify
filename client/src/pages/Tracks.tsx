import '../styles/pages/Artists.scss';
import { Link } from 'react-router-dom';

export const Tracks = () => {
	return (
		<div className="pt-20">
			<div className="flex justify-between mb-16">
				<h1 className="filter__title">Top Tracks</h1>
				<ul className="filter__list">
					<li>
						<button>Todos los tiempos</button>
					</li>
					<li>
						<button>Últimos 6 meses</button>
					</li>
					<li>
						<button>Últimas 4 semanas</button>
					</li>
				</ul>
			</div>
			<ul className="track__list">
				<li className="track__list_item">
					<Link to={'/track/:id'}>
						<div className="flex gap-5">
							<div className="track__list_item__img">
								<img
									src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
									alt=""
								/>
							</div>
							<div>
								<span className="track__title">Prayer for Rain</span>
								<div className="track__credits">
									<span>Bibio</span>
									{' ·  '}
									<span>Phantom Brickworks</span>
								</div>
							</div>
						</div>
						<span className="track__length">13:47</span>
					</Link>
				</li>
				<li className="track__list_item">
					<Link to={'/track/:id'}>
						<div className="flex gap-5">
							<div className="track__list_item__img">
								<img
									src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
									alt=""
								/>
							</div>
							<div>
								<span className="track__title">Prayer for Rain</span>
								<div className="track__credits">
									<span>Bibio</span>
									{' ·  '}
									<span>Phantom Brickworks</span>
								</div>
							</div>
						</div>
						<span className="track__length">13:47</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

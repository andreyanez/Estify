import '../styles/pages/Artists.scss';

export const Artists = () => {
	return (
		<div className="pt-20">
			<div className="flex justify-between mb-16">
				<h1 className="filter__title">Top Artistas</h1>
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
			<ul className="artists__grid">
				<li className="artist__item">
					<div className="artist_item__img">
						<img
							src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
							alt=""
						/>
					</div>
					<span>Tycho</span>
				</li>
			</ul>
		</div>
	);
};

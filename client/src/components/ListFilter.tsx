import { useState } from 'react';

export const ListFilter = ({
	activeRange,
	setActiveRange,
}: {
	activeRange: string;
	setActiveRange: Function;
}) => {
	return (
		<ul className="filter__list">
			<li>
				<button
					className={activeRange === 'long' ? 'active' : ''}
					onClick={() => setActiveRange('long')}
				>
					Todos los tiempos
				</button>
			</li>
			<li>
				<button
					className={activeRange === 'medium' ? 'active' : ''}
					onClick={() => setActiveRange('medium')}
				>
					Últimos 6 meses
				</button>
			</li>
			<li>
				<button
					className={activeRange === 'short' ? 'active' : ''}
					onClick={() => setActiveRange('short')}
				>
					Últimas 4 semanas
				</button>
			</li>
		</ul>
	);
};

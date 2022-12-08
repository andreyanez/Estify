import { SpotifyButton } from '../SpotifyButton';
import { Container } from './Container';

export const Action = () => {
	return (
		<section id="get-started-today" className="relative overflow-hidden bg-secondary py-32">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
						Visualiza tu música como nunca antes.
					</h2>
					<div className="mt-8 flex justify-center">
						<SpotifyButton isDark={true} />
					</div>
				</div>
			</Container>
		</section>
	);
};

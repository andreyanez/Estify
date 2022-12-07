import { Container } from './Container';

const LOGIN_URI =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:8080/login'
		: 'https://estify.up.railway.app/login';

export const Action = () => {
	return (
		<section id="get-started-today" className="relative overflow-hidden bg-secondary py-32">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
						Visualiza tu música como nunca antes.
					</h2>
					<div className="mt-8">
						<a
							href={LOGIN_URI}
							className="mx-auto flex w-fit items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-primary md:py-4 md:px-10 md:text-lg"
						>
							Entra con Spotify
						</a>
					</div>
				</div>
			</Container>
		</section>
	);
};

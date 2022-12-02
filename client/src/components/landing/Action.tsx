import { Container } from './Container';

const LOGIN_URI =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:8080/login'
		: 'https://estify.vercel.com';

export const Action = () => {
	return (
		<section id="get-started-today" className="relative overflow-hidden bg-secondary py-32">
			<Container>
				<div className="mx-auto max-w-lg text-center">
					<h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
						Get started today
					</h2>
					<p className="mt-4 text-lg tracking-tight text-white">
						It’s time to take control of your books. Buy our software so you can feel like you’re
						doing something productive.
					</p>
					<a
						href={LOGIN_URI}
						className="w-fit flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-white hover:text-primary md:py-4 md:text-lg md:px-10"
					>
						Login with Spotify
					</a>
				</div>
			</Container>
		</section>
	);
};

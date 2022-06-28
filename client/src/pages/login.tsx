const LOGIN_URI =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:8080/login'
		: 'https://estify.vercel.com';

export const Login = () => {
	return (
		<div className="relative bg-primary overflow-hidden min-h-screen flex items-center">
			<div className="max-w-7xl h-full relative">
				<svg
					className="hidden lg:block absolute right-0 z-10 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
					fill="currentColor"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<polygon points="50,0 100,0 50,100 0,100" />
				</svg>
				<div className=" relative z-10 sm:text-center lg:text-left lg:max-w-2xl lg:w-full mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 ">
					<h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
						<span className="block xl:inline">Visualiza tu data con</span>{' '}
						<span className="block text-secondary xl:inline">Estify</span>
					</h1>
					<p className="mt-3 text-base text-neutral sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
						Mira tus artistas, canciones y playlist como nunca antes.
					</p>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div className="rounded-md shadow">
							<a
								href={LOGIN_URI}
								className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-white hover:text-primary md:py-4 md:text-lg md:px-10"
							>
								Login with Spotify
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img
					className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
					alt=""
				/>
			</div>
		</div>
	);
};

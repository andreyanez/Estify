import { useId } from 'react';
import { PhoneFrame } from './PhoneFrame';

import homescreen from '../../assets/homescreen.png';
import homescreenWebp from '../../assets/homescreen.webp';
import trackImage from '../../assets/track.png';

const LOGIN_URI =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:8080/login'
		: 'https://estify.up.railway.app/login';

function BackgroundIllustration(props: any) {
	let id = useId();

	return (
		<div {...props}>
			<svg
				viewBox="0 0 1026 1026"
				fill="none"
				aria-hidden="true"
				className="absolute inset-0 h-full w-full animate-spin-slow"
			>
				<path
					d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
					stroke="#ffffff4e"
					strokeOpacity="0.7"
				/>
				<path
					d="M513 1025C230.23 1025 1 795.77 1 513"
					stroke={`url(#${id}-gradient-1)`}
					strokeLinecap="round"
				/>
				<defs>
					<linearGradient
						id={`${id}-gradient-1`}
						x1="1"
						y1="513"
						x2="1"
						y2="1025"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#1EB954" />
						<stop offset="1" stopColor="#1EB954" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
			<svg
				viewBox="0 0 1026 1026"
				fill="none"
				aria-hidden="true"
				className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
			>
				<path
					d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
					stroke="#ffffff4e"
					strokeOpacity="0.7"
				/>
				<path
					d="M913 513c0 220.914-179.086 400-400 400"
					stroke={`url(#${id}-gradient-2)`}
					strokeLinecap="round"
				/>
				<defs>
					<linearGradient
						id={`${id}-gradient-2`}
						x1="913"
						y1="513"
						x2="913"
						y2="913"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#1EB954" />
						<stop offset="1" stopColor="#1EB954" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}

export const Hero = () => {
	return (
		<div className="flex  min-h-screen overflow-hidden bg-primary py-20 sm:py-32 lg:pb-32 xl:pb-36">
			<div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
					<div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
						<h1 className="text-4xl font-medium tracking-tight text-white">
							Tu experiencia Spotify, a detalle.
						</h1>
						<p className="mt-6 text-lg text-neutral">
							Estify te da un recuento en tiempo real de tu data en Spotify. Visualiza las propiedas
							auditivas de tus playlists, artistas y tracks favoritos, así como tus tendencias
							musicales.
						</p>
						<div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
							<a
								href={LOGIN_URI}
								className="flex w-fit items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-primary md:py-4 md:px-10 md:text-lg"
							>
								Entra con Spotify
							</a>
						</div>
					</div>
					<div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
						<BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
						<div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
							<PhoneFrame>
								<picture>
									<source type="image/webp" srcSet={homescreenWebp} />
									<img src={trackImage} alt="estify" className="homescreen" />
								</picture>
							</PhoneFrame>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Container } from './Container';

import track from '../../assets/track.png';
import artist from '../../assets/artistas.png';
import playlist from '../../assets/playlist.png';

const features = [
	{
		title: 'Organiza tus playlists',
		description:
			'¿Cuál es la canción con más energía en tu playlist? ¿O la más baliable? Estify te permite ordenar tus playlists basándose en parámetros como Tempo, energía o duración.',
		image: playlist,
	},
	{
		title: 'Visualiza tus tendencias',
		description:
			'Dale un vistazo a como va evolucionando tu historia con Spotify. Visualiza tus artistas y tracks en tendencia.',
		image: artist,
	},
	{
		title: 'Tu música, a gran detalle',
		description:
			'Estify le pone una lupa a tu música y artistas favoritos, analizando sus propiedades auditivas.',
		image: track,
	},
];

export function Info() {
	let [tabOrientation, setTabOrientation] = useState('horizontal');

	useEffect(() => {
		let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

		function onMediaQueryChange({ matches }: { matches: any }) {
			setTabOrientation(matches ? 'vertical' : 'horizontal');
		}

		onMediaQueryChange(lgMediaQuery);
		lgMediaQuery.addEventListener('change', onMediaQueryChange);

		return () => {
			lgMediaQuery.removeEventListener('change', onMediaQueryChange);
		};
	}, []);

	return (
		<section
			id="features"
			aria-labelledby="features-title"
			className="relative overflow-hidden bg-primary pt-20 pb-28 sm:py-32"
		>
			<Container>
				<div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
					<h2
						id="features-title"
						className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
					>
						Una nueva perspectiva de tus tendencias musicales.
					</h2>
					<p className="mt-6 text-lg tracking-tight text-neutral"></p>
				</div>
				<Tab.Group
					as="div"
					className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
					vertical={tabOrientation === 'vertical'}
				>
					{({ selectedIndex }) => (
						<>
							<div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
								<Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal">
									{features.map((feature, featureIndex) => (
										<div
											key={feature.title}
											className={clsx(
												'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
												{
													'bg-primary lg:bg-primary/10 lg:ring-1 lg:ring-inset lg:ring-primary/10':
														selectedIndex === featureIndex,
													'hover:bg-primary/10 lg:hover:bg-primary/5':
														selectedIndex !== featureIndex,
												}
											)}
										>
											<h3>
												<Tab
													className={clsx(
														'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
														{
															'text-white lg:text-white': selectedIndex === featureIndex,
															'text-white hover:text-white lg:text-white':
																selectedIndex !== featureIndex,
														}
													)}
												>
													<span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
													{feature.title}
												</Tab>
											</h3>
											<p
												className={clsx('mt-2 hidden text-sm lg:block', {
													'text-white': selectedIndex === featureIndex,
													'text-white group-hover:text-white': selectedIndex !== featureIndex,
												})}
											>
												{feature.description}
											</p>
										</div>
									))}
								</Tab.List>
							</div>
							<Tab.Panels className="lg:col-span-7">
								{features.map(feature => (
									<Tab.Panel key={feature.title} unmount={false}>
										<div className="relative sm:px-6 lg:hidden">
											<div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
											<p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
												{feature.description}
											</p>
										</div>
										<div className="relative mt-10 aspect-[1085/730]  overflow-hidden rounded-xl bg-slate-50 shadow-md shadow-secondary sm:w-auto md:w-[45rem] lg:mt-0 lg:w-[67.8125rem]">
											<img
												src={feature.image}
												alt={feature.title}
												className="h-full w-full object-cover"
												sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
											/>
										</div>
									</Tab.Panel>
								))}
							</Tab.Panels>
						</>
					)}
				</Tab.Group>
			</Container>
		</section>
	);
}

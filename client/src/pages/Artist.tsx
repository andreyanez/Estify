import '../styles/pages/Artist.scss';
import { getArtist } from '../spotify';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Loader } from '../components/Loader';
import { SpotifyLogo } from '../components/SpotifyLogo';

export const Artist = () => {
	const { id } = useParams();

	const { data: artist, isLoading } = useQuery(['artist'], () => getArtist(id!), {
		cacheTime: 0,
	});

	if (isLoading) {
		return (
			<div className="mt-20">
				<Loader />
			</div>
		);
	}

	return (
		<article className="lg:mt-20">
			<Breadcrumb />
			<div className="block items-center justify-between gap-4 lg:flex">
				<div className="artist__img">
					<img src={artist.data.images[1].url} alt={artist.data.name} />
					<div className="flex flex-col items-center gap-y-2 md:mt-8">
						<p className="text-sm">Contenido previsto por</p>
						<SpotifyLogo theme="white" />
					</div>
				</div>
				<div className="artist__card">
					<div className="py-5 ">
						<h3>{artist.data.name}</h3>
						<ul className="mb-4 max-w-2xl text-lg text-neutral md:space-x-2">
							{artist.data.genres.map((genre: any, index: number) => {
								return (
									<li className="inline-block" key={index}>
										{genre}
										{artist.data.genres.length > 0 && index === artist.data.genres.length - 1
											? ''
											: ' -'}
									</li>
								);
							})}
						</ul>
						<div>
							<p className="text-md mt-1 text-white">{artist.data.followers.total}</p>{' '}
							<p className="text-xl font-medium text-neutral">Seguidores</p>
						</div>
					</div>

					<a href={artist.data.external_urls.spotify} target="_blank" className="main__button">
						LISTEN ON SPOTIFY
					</a>
				</div>
			</div>
		</article>
	);
};

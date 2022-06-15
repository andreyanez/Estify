import '../styles/pages/Artist.scss';
import { getArtist } from '../spotify';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Artist = () => {
	const { id } = useParams();

	const { data: artist, isLoading }: any = useQuery(['artist'], () => getArtist(id));

	if (isLoading) {
		return <span className="mt-20 block">Loading...</span>;
	}

	return (
		<article className="mt-40">
			<div className="breadcrumb">
				<Link to={'..'}>
					<Icon icon="ri-arrow-drop-left-line" />
					Volver
				</Link>
			</div>
			<div className="flex gap-4 justify-between items-center">
				<div className="artist__img">
					<img src={artist.data.images[1].url} alt={artist.data.name} />
				</div>
				<div className="overflow-hidden artist__card">
					<div className=" py-5 ">
						<h3 className="font-medium text-white text-6xl mb-6">{artist.data.name}</h3>
						<ul className="max-w-2xl text-lg text-neutral space-x-2 mb-4">
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
							<p className="mt-1 text-md text-white">{artist.data.followers.total}</p>{' '}
							<p className="text-xl font-medium text-neutral">Seguidores</p>
						</div>
					</div>
					<a href={artist.data.external_urls.spotify} target="_blank" className="text-secondary">
						Ver más en Spotify
					</a>
				</div>
			</div>
		</article>
	);
};

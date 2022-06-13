import '../styles/pages/Track.sass';
import { getTrack } from '../spotify';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Track = () => {
	const { id } = useParams();

	const { data: track, isLoading }: any = useQuery(['artist'], () => getTrack(id), {
		cacheTime: 0,
	});

	if (isLoading) {
		return <span className="mt-20 block">Loading...</span>;
	}

	return (
		<article>
			<div className="breadcrumb">
				<Link to={'..'}>
					<Icon icon="ri-arrow-drop-left-line" />
					Volver
				</Link>
			</div>
			<section className="track__info">
				<div className="track__details">
					<div className="track__img">
						<img src={track.data.album.images[1].url} alt="" />
					</div>
					<div>
						<h1>{track.data.name}</h1>
						{track.data.artists.map((artist: any, index: number) => {
							return (
								<h2 key={index}>
									{artist.name}
									{track.data.artists.length > 0 && index === track.data.artists.length - 1
										? ''
										: ','}
									&nbsp;
								</h2>
							);
						})}
						<div className="track__album">
							<span>{track.data.album.name}</span>
							{' · '}
							<span>{track.data.album.release_date.substring(0, 4)}</span>
						</div>
						<a href={track.data.external_urls.spotify} target="_blank" className="main__button">
							REPRODUCIR EN SPOTIFY
						</a>
					</div>
				</div>
				<div className="track__features">
					<ul>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>13.47</h3>
							<p>Duración</p>
						</li>
					</ul>
				</div>
			</section>
		</article>
	);
};

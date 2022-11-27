import '../styles/pages/Track.sass';
import { getTrack, getTrackAudioFeatures, getTrackAudioAnalysis } from '../spotify';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { formatDuration, parsePitchClass } from '../utils';

export const Track = () => {
	const { id } = useParams();

	const { data: track, isLoading }: any = useQuery(['artist'], () => getTrack(id!), {
		cacheTime: 0,
	});

	const { data: features, isLoading: featureLoading }: any = useQuery(
		['features'],
		() => getTrackAudioFeatures(id!),
		{
			cacheTime: 0,
		}
	);

	const { data: analysis, isLoading: analysisLoading }: any = useQuery(
		['analysis'],
		() => getTrackAudioAnalysis(id!),
		{
			cacheTime: 0,
		}
	);

	if (isLoading || featureLoading || analysisLoading) {
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
							<h3>{formatDuration(features.data.duration_ms)}</h3>
							<p>Duración</p>
						</li>
						<li>
							<h3>{parsePitchClass(features.data.key)}</h3>
							<p>Clave</p>
						</li>
						<li>
							<h3>{features.data.mode === 1 ? 'Mayor' : 'Menor'}</h3>
							<p>Modo</p>
						</li>
						<li>
							<h3>{features.data.time_signature}</h3>
							<p>Compás</p>
						</li>
						<li>
							<h3>{Math.round(features.data.tempo)}</h3>
							<p>Tempo (BPM)</p>
						</li>
						<li>
							<h3>{track.data.popularity}%</h3>
							<p>Popularidad</p>
						</li>
						<li>
							<h3>{analysis.data.bars.length}</h3>
							<p>Bars</p>
						</li>
						<li>
							<h3>{analysis.data.beats.length}</h3>
							<p>Beats</p>
						</li>
					</ul>
				</div>
			</section>
		</article>
	);
};

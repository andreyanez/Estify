import '../styles/pages/Track.sass';
import { getTrack, getTrackAudioFeatures, getTrackAudioAnalysis } from '../spotify';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { formatDuration, parsePitchClass } from '../utils';
import { FeatureChart } from '../components/FeatureChart';
import { Breadcrumb } from '../components/Breadcrumb';
import { Loader } from '../components/Loader';
import { SpotifyLogo } from '../components/SpotifyLogo';
import { FeaturesText } from '../components/FeaturesText';

export const Track = () => {
	const { id } = useParams();

	const { data: track, isLoading } = useQuery(['artist'], () => getTrack(id!), {
		cacheTime: 0,
	});

	const { data: features, isLoading: featureLoading } = useQuery(
		['features'],
		() => getTrackAudioFeatures(id!),
		{
			cacheTime: 0,
		}
	);

	const { data: analysis, isLoading: analysisLoading } = useQuery(
		['analysis'],
		() => getTrackAudioAnalysis(id!),
		{
			cacheTime: 0,
		}
	);

	if (isLoading || featureLoading || analysisLoading) {
		return <Loader />;
	}

	return (
		<article>
			<Breadcrumb />
			<div className="mb-8 flex justify-center md:block">
				<SpotifyLogo theme="white" />
			</div>
			<section className="track__info">
				<div className="track__details">
					<div className="text-center">
						<div className="track__img">
							<img src={track.data.album.images[1].url} alt="" />
						</div>
						<a href={track.data.external_urls.spotify} target="_blank" className="main__button">
							PLAY ON SPOTIFY
						</a>
					</div>
					<div>
						<h1>{track.data.name}</h1>
						<div className="flex flex-col items-center md:block">
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
						</div>
						{/* {track.data.preview_url && (
							<div className="mb-6 hidden md:block">
								<div className=" player__container">
									<audio src={track.data.preview_url} controls controlsList="nodownload"></audio>
								</div>
								<span className="mt-4 block text-center text-sm md:mt-0 md:pr-56 xl:pr-20">
									Preview
								</span>
							</div>
						)} */}
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
			<section className="track__chart__data">
				<div className="track__chart">
					<h4>Propiedades auditivas de {track.data.name}</h4>
					<FeatureChart features={features.data} />
					<div className="flex flex-col items-center gap-y-2 md:mt-8">
						<p className="text-sm">Información prevista por</p>
						<SpotifyLogo theme="white" />
					</div>
				</div>
				<div className="track__paragraph">
					<h5>Descripción de las propiedades auditivas</h5>
					<FeaturesText />
				</div>
			</section>
		</article>
	);
};

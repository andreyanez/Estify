import '../styles/pages/Track.sass';
import { getTrack, getTrackAudioFeatures, getTrackAudioAnalysis } from '../spotify';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { formatDuration, parsePitchClass } from '../utils';
import { FeatureChart } from '../components/FeatureChart';
import { Breadcrumb } from '../components/Breadcrumb';
import { Loader } from '../components/Loader';

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
			<section className="track__info">
				<div className="track__details">
					<div className="text-center">
						<div className="track__img">
							<img src={track.data.album.images[1].url} alt="" />
						</div>
						<a href={track.data.external_urls.spotify} target="_blank" className="main__button">
							REPRODUCIR EN SPOTIFY
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
				</div>
				<div className="track__paragraph">
					<h5>Descripción de las propiedades auditivas</h5>
					<ul>
						<li>
							<p>
								<span>
									<i>Acousticness</i> (Nivel de presencia acústica):
								</span>
								Spotify mide de 0.0 a 1.0 que tantos elementos acústicos estan presentes en el
								track.
							</p>
						</li>
						<li>
							<p>
								<span>
									<i>Danceability</i> (Bailabilidad(?)):
								</span>
								Describe que tan apropiada es el track para bailar, este cálculo esta basado en una
								combinación de elementos musicales incluyendo tempo, estabilidad de ritmo, fuerza en
								el beat y constancia de estructura.
							</p>
						</li>
						<li>
							<p>
								<span>
									<i>Energy</i> (Energía):
								</span>
								Representa una medida perceptiva de intensidad y actividad. Tipicamente, tracks
								energeticos se sienten rápidos y estridentes. Por ejemplo: El <i>Death metal</i>{' '}
								tiene alta energía, a diferencia de una composición de Bach. Los elementos que se
								consideran para medir la energía son: Rango dinámico, sonoridad percibida, timbre, y
								entropía promedio.
							</p>
						</li>
						<li>
							<p>
								<span>
									<i>Instrumentalness</i> (Probabilidad de ausencia de letra):
								</span>
								Predice si un track no contiene letra. Sonidos como "Ooh" y "Aah" son considerados
								instrumentos en este contexto. Rap y voces son considerados "letra". Mientras más
								cercano el valor llegue a 1.0, mayor probabildiad de que el track sea enteramente
								instrumental.
							</p>
						</li>
						<li>
							<p>
								<span>
									<i>Liveness</i> (Probabilidad de ser un <i>live</i>):
								</span>
								Detecta la presencia de una audiencia en el track. Un valor alto de <i>liveness</i>{' '}
								representa una probabilidad alta de que el track fue grabado en vivo.
							</p>
						</li>
						<li>
							<p>
								<span>
									<i>Speechiness</i> (Probabilidad de "voz hablada"):
								</span>
								En cualquier track, se puede encontrar dos tipos de voces; La voz cantada es aquella
								que busca ser musical, siguiendo una escala o melodía y esta presente en la mayoría
								de la música. La voz hablada, sin embargo, es aquella que no cuenta con estos
								elementos, y esta presente en tracks como <i>talk shows</i>, audiolibros, o poesía.
								Mientras más cercano el valor llegue a 1.0, mayor probabilidad de que el track este
								compuesto de voz hablada.
							</p>
						</li>
						<li>
							<p>
								<span>
									<i>Valence</i> (Valencia):
								</span>
								Describe la relativa positividad expresada en el track. Tracks con una valencia alta
								manifiestan emociones positivas (felicidad, ánimo, eufória), mientras que tracks con
								valencia manifiestan emociones negativas (tristeza,depresión,enojo). Mientras más
								cercano el valor llegue a 1.0, mayor probabilidad de que el track tenga alta
								valencia.
							</p>
						</li>
					</ul>
				</div>
			</section>
		</article>
	);
};

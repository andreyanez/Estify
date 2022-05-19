export const Features = () => {
	return (
		<div>
			<div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 xl:py-20 xl:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div>
						<h2 className="text-3xl font-extrabold ">¿Que son las propiedades auditivas?</h2>
						<p className="mt-4 text-lg ">
							Son parametros con los que Spotify analiza cada track, son empleados para establecer
							playlist automatizadas o basadas en un mood específico, etc.
						</p>
					</div>
					<div className="mt-12 xl:col-span-2 xl:mt-0">
						<div className="track__paragraph">
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
										Describe que tan apropiada es el track para bailar, este cálculo esta basado en
										una combinación de elementos musicales incluyendo tempo, estabilidad de ritmo,
										fuerza en el beat y constancia de estructura.
									</p>
								</li>
								<li>
									<p>
										<span>
											<i>Energy</i> (Energía):
										</span>
										Representa una medida perceptiva de intensidad y actividad. Tipicamente, tracks
										energeticos se sienten rápidos y estridentes. Por ejemplo: El <i>Death metal</i>{' '}
										tiene alta energía, a diferencia de una composición de Bach. Los elementos que
										se consideran para medir la energía son: Rango dinámico, sonoridad percibida,
										timbre, y entropía promedio.
									</p>
								</li>
								<li>
									<p>
										<span>
											<i>Instrumentalness</i> (Probabilidad de ausencia de letra):
										</span>
										Predice si un track no contiene letra. Sonidos como "Ooh" y "Aah" son
										considerados instrumentos en este contexto. Rap y voces son considerados
										"letra". Mientras más cercano el valor llegue a 1.0, mayor probabildiad de que
										el track sea enteramente instrumental.
									</p>
								</li>
								<li>
									<p>
										<span>
											<i>Liveness</i> (Probabilidad de ser un <i>live</i>):
										</span>
										Detecta la presencia de una audiencia en el track. Un valor alto de{' '}
										<i>liveness</i> representa una probabilidad alta de que el track fue grabado en
										vivo.
									</p>
								</li>
								<li>
									<p>
										<span>
											<i>Speechiness</i> (Probabilidad de "voz hablada"):
										</span>
										En cualquier track, se puede encontrar dos tipos de voces; La voz cantada es
										aquella que busca ser musical, siguiendo una escala o melodía y esta presente en
										la mayoría de la música. La voz hablada, sin embargo, es aquella que no cuenta
										con estos elementos, y esta presente en tracks como <i>talk shows</i>,
										audiolibros, o poesía. Mientras más cercano el valor llegue a 1.0, mayor
										probabilidad de que el track este compuesto de voz hablada.
									</p>
								</li>
								<li>
									<p>
										<span>
											<i>Valence</i> (Valencia):
										</span>
										Describe la relativa positividad expresada en el track. Tracks con una valencia
										alta manifiestan emociones positivas (felicidad, ánimo, eufória), mientras que
										tracks con valencia manifiestan emociones negativas (tristeza,depresión,enojo).
										Mientras más cercano el valor llegue a 1.0, mayor probabilidad de que el track
										tenga alta valencia.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

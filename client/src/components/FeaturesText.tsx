export const FeaturesText = () => {
	return (
		<ul>
			<li>
				<p>
					<span>
						<i>Danceability</i> (Bailabilidad):
					</span>
					Describe que tan apropiada es el track para bailar, este cálculo esta basado en una
					combinación de elementos musicales incluyendo tempo, estabilidad de ritmo, fuerza en el
					beat y constancia de estructura.
				</p>
			</li>
			<li>
				<p>
					<span>
						<i>Energy</i> (Energía):
					</span>
					Representa una medida perceptiva de intensidad y actividad. Tipicamente, tracks
					energeticos se sienten rápidos y estridentes. Por ejemplo: El <i>Death metal</i> tiene
					alta energía, a diferencia de una composición de Bach. Los elementos que se consideran
					para medir la energía son: Rango dinámico, sonoridad percibida, timbre, y entropía
					promedio.
				</p>
			</li>
			<li>
				<p>
					<span>
						<i>Instrumentalness</i> (Probabilidad de ausencia de letra):
					</span>
					Predice si un track no contiene letra. Sonidos como "Ooh" y "Aah" son considerados
					instrumentos en este contexto. Rap y voces son considerados "letra". Mientras más cercano
					el valor llegue a 1.0, mayor probabilidad de que el track sea enteramente instrumental.
				</p>
			</li>

			<li>
				<p>
					<span>
						<i>Valence</i> (Valencia):
					</span>
					Describe la relativa positividad expresada en el track. Tracks con una valencia alta
					manifiestan emociones positivas (felicidad, ánimo, eufória), mientras que tracks con
					valencia manifiestan emociones negativas (tristeza,depresión,enojo). Mientras más cercano
					el valor llegue a 1.0, mayor probabilidad de que el track tenga alta valencia.
				</p>
			</li>
		</ul>
	);
};

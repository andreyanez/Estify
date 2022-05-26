import { Container } from '../../components/landing/Container';

export const Policy = () => {
	return (
		<Container>
			<div className="min-h-screen flex items-center">
				<div className="text-center flex-1 md:mx-[20vw] ">
					<p className="text-3xl font-bold">Políticas de Privacidad</p>
					<br />
					<p>
						Estify usa Web API de Spotify para conseguir la información de tu perfil de Spotify. Al
						usar Estify, aceptas el empleo de tu nombre e información de tu cuenta respecto a tus
						tracks, artistas y playlists.
					</p>
					<br />
					<p>
						Ninguna información usada por Estify es guardada, y no es compartida con terceros. La
						informción es solo empleada en tu dispositvo personal para generar la visualización de
						tu data.
					</p>
					<br />
					<p>
						Estify no esta afiliado directamente con Spotify. Solo hace empleo de la información que
						esta ofrece.
					</p>
					<br />
					<p>
						Si en cualquier momento deseas revocar permisos a Estify para usar tu data, puedes
						hacerlo{' '}
						<a
							target="_blank"
							href="https://support.spotify.com/us/article/spotify-on-other-apps/"
							className="text-blue-500 underline"
						>
							aquí.
						</a>
						.
					</p>
					<br />
					<p>
						Si tienes otra pregunta, puedes{' '}
						<a
							target="_blank"
							href="mailto:andreyanez22@gmail.com"
							className="text-blue-500 underline"
						>
							contactarnos
						</a>
						.
					</p>
				</div>
			</div>
		</Container>
	);
};

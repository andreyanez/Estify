import { Container } from './Container';

const faqs = [
	[
		{
			question: 'Como funciona Estify?',
			answer:
				'Estify usa la API de Spotify para leer y visualizar tus artistas y tracks favoritos.',
		},
		{
			question: 'Es necesario tener una cuenta premium de Spotify para usar Estify?',
			answer: 'Para nada. El app funcionará tengas una cuenta free o premium.',
		},
		{
			question: 'Puedo escuchar música en el app?',
			answer:
				'El app se realizo con la intención de mostrarte data de la música y artistas que escuchas en Spotify, no se planteó como un remplazo de la plataforma en si.',
		},
	],
	[
		{
			question: 'Porqué debo brindar mi información al acceder a la app?',
			answer:
				'Para que la app pueda mostar tu data, es necesario otorgarle tu permiso para leerla en primer lugar. El proceso de autorización es el mismo que empleas para entrar a Spotify, ni más ni menos.',
		},
		{
			question: 'Que tipo de información le estoy dando acceso a la app?',
			answer:
				'Para más información en como Estify maneja tu data, puedes darle un vistazo a nuestra',
			link: 'Política de Privacidad.',
		},
		{
			question: 'Quiero revocar los permisos que otorge a Estify, que debo hacer?',
			answer:
				'Si en cualquier momento deseas revocar permisos a Estify para usar tu data, puedes hacerlo siguiendo los pasos de nuestra',
			link: 'Política de Privacidad.',
		},
	],
];

export function Faqs() {
	return (
		<section
			id="faq"
			aria-labelledby="faq-title"
			className="relative overflow-hidden bg-primary py-20 sm:py-32"
		>
			<h2 id="faq-title" className="sr-only">
				Preguntas frecuentes
			</h2>
			<Container>
				<div className="mx-auto max-w-2xl lg:mx-0">
					<p className="font-display text-3xl tracking-tight text-white sm:text-4xl">
						Preguntas frecuentes
					</p>
					<p className="mt-4 text-lg tracking-tight text-neutral">
						Bueno. Serán frecuentes, eventualmente.
					</p>
				</div>
				<ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
					{faqs.map((column, columnIndex) => (
						<li key={columnIndex}>
							<ul className="space-y-8">
								{column.map((faq, faqIndex) => (
									<li key={faqIndex}>
										<h3 className="font-display text-lg leading-7 text-white">{faq.question}</h3>
										<p className="mt-4 text-sm text-neutral">
											{faq.answer}{' '}
											{faq.link && (
												<a
													href="http://localhost:5173/politica"
													className="text-sm text-secondary underline inline-block"
													target="_blank"
												>
													{faq.link}
												</a>
											)}
										</p>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}

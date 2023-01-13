import { FeaturesText } from '../components/FeaturesText';
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
							<FeaturesText />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

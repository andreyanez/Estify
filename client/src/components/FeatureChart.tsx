import Chart from 'chart.js/auto';
import { useEffect } from 'react';

interface AudioFeatures {
	acousticness: number;
	analysis_url: string;
	danceability: number;
	duration_ms: number;
	energy: number;
	id: string;
	instrumentalness: number;
	key: number;
	liveness: number;
	loudness: number;
	mode: number;
	speechiness: number;
	tempo: number;
	time_signature: number;
	track_href: string;
	type: string;
	uri: string;
	valence: number;
}

interface dataset {
	acousticness?: number;
	danceability?: number;
	energy?: number;
	instrumentalness?: number;
	liveness?: number;
	speechiness?: number;
	valence?: number;
}

const properties = [
	'acousticness',
	'danceability',
	'energy',
	'instrumentalness',
	'liveness',
	'speechiness',
	'valence',
];

export const FeatureChart = ({
	features,
	type,
}: {
	features: AudioFeatures[] | AudioFeatures;
	type?: string;
}) => {
	const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
	useEffect(() => {
		const createDataset = (features: AudioFeatures[] | AudioFeatures) => {
			let dataset: dataset = {};
			properties.forEach((property: string) => {
				dataset[property as keyof dataset] = Array.isArray(features)
					? avg(
							features.map(
								(feat: AudioFeatures) => feat[property as keyof AudioFeatures]
							) as number[]
					  )
					: (features[property as keyof AudioFeatures] as number);
			});

			return dataset;
		};

		const createChart = (dataset: dataset) => {
			const labels = Object.keys(dataset);
			const data = Object.values(dataset);

			new Chart(document.getElementById('chart') as HTMLCanvasElement, {
				type: 'bar',
				data: {
					labels,
					datasets: [
						{
							label: '',
							data,
							backgroundColor: ['#1EB954'],
							borderWidth: 1,
						},
					],
				},
				options: {
					indexAxis: type === 'horizontal' ? 'y' : 'x',
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
						},
					},
					plugins: {
						legend: {
							display: false,
						},
					},
				},
			});
		};

		const parseData = () => {
			const dataset = createDataset(features);
			createChart(dataset);
		};

		parseData();
	}, [features]);

	return <canvas id="chart" height="200" />;
};

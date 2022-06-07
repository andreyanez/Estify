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

const properties = [
	'acousticness',
	'danceability',
	'energy',
	'instrumentalness',
	'liveness',
	'speechiness',
	'valence',
];

export const FeatureChart = ({ features }: { features: any }) => {
	const avg = (arr: []) => arr.reduce((a, b) => a + b, 0) / arr.length;
	useEffect(() => {
		const createDataset = (features: any) => {
			const dataset: any = {};
			properties.forEach(prop => {
				dataset[prop] = features.length
					? avg(features.map((feat: any) => feat[prop]))
					: features[prop as keyof AudioFeatures];
			});
			return dataset;
		};

		const createChart = (dataset: {}) => {
			// const ctx: any = document.getElementById('chart');
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

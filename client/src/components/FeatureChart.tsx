import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';

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

const properties = ['danceability', 'energy', 'instrumentalness', 'valence'];

export const FeatureChart = ({
	features,
	type,
}: {
	features: AudioFeatures[] | AudioFeatures;
	type?: string;
}) => {
	const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;

	const chartRef = useRef<HTMLCanvasElement>(null);
	const [myChart, setMyChart] = useState<any>(null);

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

		const createChart = (dataset: dataset, ctx: any) => {
			const labels = Object.keys(dataset);
			const data = Object.values(dataset);

			new Chart(ctx, {
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
			if (!chartRef) return;
			const ctx = chartRef?.current?.getContext('2d');
			const dataset = createDataset(features);
			createChart(dataset, ctx);
			setMyChart(myChart);
		};

		parseData();
	}, [chartRef]);

	useEffect(() => {
		if (!myChart) return;
		myChart.update();
	}, [features, myChart]);

	return <canvas id="chart" height="200" ref={chartRef} />;
};

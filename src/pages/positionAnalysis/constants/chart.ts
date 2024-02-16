import { ChartType } from '../../../components/metricGroup/constants/types';

interface IDataset {
	type?: 'bar';
	label: string;
	data: number[];
	borderColor?: string;
	tension?: number;
	fill?: boolean;
	backgroundColor: string | string[] | CanvasGradient;
	pointBackgroundColor?: string;
	clip?: { left: number | boolean; right: number | boolean; top: number | boolean; bottom: number | boolean };
	pointRadius?: typeof pointRadiusFunc | number;
	order?: number;
	borderRadius?: number;
}

interface IChartDataConfig {
	labels: string[];
	datasets: IDataset[];
}

function pointRadiusFunc(context: any) {
	if (context.dataIndex === 0 || context.dataIndex === 13) {
		return 0;
	} else {
		return 4;
	}
}

function getChartDatasetDefault() {
	return {
		tension: 0.4,
		fill: true,
		clip: { left: 0, right: 0, top: false, bottom: false },
		pointRadius: (context: any) => pointRadiusFunc(context),
	};
}

const chartLine: IChartDataConfig = {
	labels: [
		'',
		'06.01.22',
		'06.02.22',
		'06.03.22',
		'06.04.22',
		'06.05.22',
		'06.06.22',
		'06.07.22',
		'06.08.22',
		'06.09.22',
		'06.10.22',
		'06.11.22',
		'06.12.22',
		'',
	],
	datasets: [
		{
			label: 'My Dataset',
			data: [24, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26],
			borderColor: '#2CE',
			backgroundColor: 'transparent',
			pointBackgroundColor: '#2CE',
			...getChartDatasetDefault(),
		},
		{
			label: 'My Dataset',
			data: [12, 14, 13, 15, 18, 19, 18, 17, 19, 25, 19, 18, 16, 18],
			borderColor: '#A48AFB',
			backgroundColor: 'transparent',
			pointBackgroundColor: '#A48AFB',
			...getChartDatasetDefault(),
		},
		{
			label: 'My Dataset',
			data: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 19],
			borderColor: '#47CD89',
			backgroundColor: 'transparent',
			pointBackgroundColor: '#47CD89',
			...getChartDatasetDefault(),
		},
	],
};

const chartLineFilled: IChartDataConfig = {
	labels: [
		'',
		'06.01.22',
		'06.02.22',
		'06.03.22',
		'06.04.22',
		'06.05.22',
		'06.06.22',
		'06.07.22',
		'06.08.22',
		'06.09.22',
		'06.10.22',
		'06.11.22',
		'06.12.22',
		'',
	],
	datasets: [
		{
			label: 'First Dataset',
			data: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 19],
			borderColor: '#47CD89',
			backgroundColor: '#47CD89',
			pointBackgroundColor: '#47CD89',
			tension: 0.4,
			fill: true,
			pointRadius: 0,
		},
		{
			label: 'First Dataset',
			data: [12, 14, 13, 15, 18, 19, 18, 17, 19, 25, 19, 18, 16, 28],
			borderColor: '#A48AFB',
			backgroundColor: '#A48AFB',
			pointBackgroundColor: '#A48AFB',
			tension: 0.4,
			fill: true,
			pointRadius: 0,
		},
		{
			label: 'First Dataset',
			data: [24, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26],
			borderColor: '#67E3F9',
			backgroundColor: '#67E3F9',
			pointBackgroundColor: '#67E3F9',
			tension: 0.4,
			fill: true,
			pointRadius: 0,
		},
	],
};

const chartBar: IChartDataConfig = {
	labels: [
		'06.01.22',
		'06.02.22',
		'06.03.22',
		'06.04.22',
		'06.05.22',
		'06.06.22',
		'06.07.22',
		'06.08.22',
		'06.09.22',
		'06.10.22',
		'06.11.22',
		'06.12.22',
	],
	datasets: [
		{
			label: 'First bar',
			type: 'bar',
			backgroundColor: '#67E3F9',
			data: [50, 25, 12, 48, 90, 76, 42, 32, 54, 213, 54, 123],
			borderRadius: 8,
		},
		{
			label: 'Second bar',
			type: 'bar',
			backgroundColor: '#A48AFB',
			data: [21, 84, 24, 75, 37, 65, 34, 32, 54, 213, 54, 123],
			borderRadius: 8,
		},
		{
			label: 'Third bar',
			type: 'bar',
			backgroundColor: '#47CD89',
			data: [41, 52, 24, 74, 23, 21, 32, 32, 54, 213, 54, 123],
			borderRadius: 8,
		},
	],
};

const chartDoughnut: IChartDataConfig = {
	labels: ['06.01.22', '06.02.22', '06.03.22'],
	datasets: [
		{
			label: 'First Dataset',
			data: [35, 25, 25, 15],
			backgroundColor: ['#67E3F9', '#A48AFB', '#47CD89'],
			fill: true,
			tension: 0.4,
		},
	],
};

const axeX = {
	ticks: {
		autoSkip: true,
		maxRotation: 0,
		color: '#475467',
		font: {
			size: 12,
		},
	},
	grid: {
		display: false,
	},
};

const axeY = {
	ticks: {
		color: '#344054',
		font: {
			size: 12,
		},
		stepSize: 8,
	},
	grid: {
		backgroundColor: '#F2F4F7',
		borderWidth: 1,
	},
	border: {
		display: false,
	},
	beginAtZero: true,
	suggestedMin: 0,
	suggestedMax: 40,
};

function getChartOptions(options?: { axeX?: boolean; axeY?: boolean; bar?: boolean }) {
	return {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				stacked: options?.bar ?? false,
				display: options?.axeX ?? true,
				...axeX,
			},
			y: {
				stacked: options?.bar ?? false,
				display: options?.axeY ?? true,
				...axeY,
			},
		},
	};
}

export function getChartOptionsConfig(type: ChartType) {
	switch (type) {
		case 'line':
		case 'line-filled':
			return getChartOptions({
				axeX: true,
				axeY: true,
			});
		case 'bar':
			return getChartOptions({
				axeX: true,
				axeY: false,
				bar: true,
			});
		case 'doughnut':
			return getChartOptions({
				axeX: false,
				axeY: false,
				bar: false,
			});
	}
}

export function getChartDataConfig(type: ChartType, data: IChartDataConfig) {
	return {
		labels: data.labels,
		datasets: data.datasets.map((item) => ({
			label: item.label,
			data: item.data,
			borderColor: item.borderColor,
			tensition: item.tension,
			fill: item.fill,
			backgroundColor: item.backgroundColor,
			pointBackgroundColor: item.pointBackgroundColor,
			clip: item.clip,
			pointRadius: item.pointRadius,
			borderRadius: item.borderRadius,
		})),
	};
}

export function generateChartDataConfig(type: ChartType) {
	return getChartDataConfig(type, getChartDatasetsDefault(type));
}

function getChartDatasetsDefault(type: ChartType): IChartDataConfig {
	switch (type) {
		case 'line':
			return chartLine;
		case 'line-filled':
			return chartLineFilled;
		case 'bar':
			return chartBar;
		case 'doughnut':
			return chartDoughnut;
	}

	return chartLine;
}

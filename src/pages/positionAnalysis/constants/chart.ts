import { ChartType } from '../../../components/metricGroup/constants/types';

import Chart from 'chart.js/auto';

const doughnutLabelPlugin = {
	id: 'doughnutLabel',
	beforeDraw: function (chart: any) {
		if (chart.config.type === 'doughnut') {
			const width = chart.canvas.width,
				height = chart.canvas.height,
				ctx = chart.ctx;

			ctx.restore();
			const fontSize = 32;
			ctx.font = `${fontSize}px sans-serif`;
			ctx.textBaseline = 'middle';

			const total = Math.min(...chart.data.datasets[0].data);
			const text = `${total.toString()}%`;

			const textX = Math.round((width - ctx.measureText(text).width) / 2);
			const textY = height / 2;

			ctx.fillStyle = '#17B26A';
			ctx.fillText(text, textX, textY);
			ctx.save();
		}
	},
};

Chart.register(doughnutLabelPlugin);

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

const getOrCreateTooltip = (chart: any) => {
	let tooltipEl = chart.canvas.parentNode.querySelector('div');

	if (!tooltipEl) {
		tooltipEl = document.createElement('div');
		tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
		tooltipEl.style.borderRadius = '3px';
		tooltipEl.style.color = 'white';
		tooltipEl.style.opacity = 1;
		tooltipEl.style.pointerEvents = 'none';
		tooltipEl.style.position = 'absolute';
		tooltipEl.style.transform = 'translate(-50%, 0)';
		tooltipEl.style.transition = 'all .1s ease';

		const table = document.createElement('table');
		table.style.margin = '0px';

		tooltipEl.appendChild(table);
		chart.canvas.parentNode.appendChild(tooltipEl);
	}

	return tooltipEl;
};

const externalTooltipHandler = (context: any) => {
	// Tooltip Element
	const { chart, tooltip } = context;
	const tooltipEl = getOrCreateTooltip(chart);

	// Hide if no tooltip
	if (tooltip.opacity === 0) {
		tooltipEl.style.opacity = 0;
		return;
	}

	// Set Text
	if (tooltip.body) {
		const titleLines = tooltip.title || [];
		const bodyLines = tooltip.body.map((b) => b.lines);

		const tableHead = document.createElement('thead');

		titleLines.forEach((title: any) => {
			const tr = document.createElement('tr');
			tr.style.borderWidth = '0';

			const th = document.createElement('th');
			th.style.borderWidth = '0';
			const text = document.createTextNode(title);

			th.appendChild(text);
			tr.appendChild(th);
			tableHead.appendChild(tr);
		});

		const tableBody = document.createElement('tbody');
		bodyLines.forEach((body: any, i: number) => {
			const colors = tooltip.labelColors[i];

			const span = document.createElement('span');
			span.style.background = colors.backgroundColor;
			span.style.borderColor = colors.borderColor;
			span.style.borderWidth = '2px';
			span.style.marginRight = '10px';
			span.style.height = '10px';
			span.style.width = '10px';
			span.style.display = 'inline-block';

			const tr = document.createElement('tr');
			tr.style.backgroundColor = 'inherit';
			tr.style.borderWidth = '0';

			const td = document.createElement('td');
			td.style.borderWidth = '0';

			const text = document.createTextNode(body);

			td.appendChild(span);
			td.appendChild(text);
			tr.appendChild(td);
			tableBody.appendChild(tr);
		});

		const tableRoot = tooltipEl.querySelector('table');

		// Remove old children
		while (tableRoot.firstChild) {
			tableRoot.firstChild.remove();
		}

		// Add new children
		tableRoot.appendChild(tableHead);
		tableRoot.appendChild(tableBody);
	}

	const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

	// Display, position, and set styles for font
	tooltipEl.style.opacity = 1;
	tooltipEl.style.left = positionX + tooltip.caretX + 'px';
	tooltipEl.style.top = positionY + tooltip.caretY + 'px';
	tooltipEl.style.font = tooltip.options.bodyFont.string;
	tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

function getChartOptions(options?: { axeX?: boolean; axeY?: boolean; bar?: boolean }) {
	return {
		maintainAspectRatio: false,
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
				position: 'nearest',
				external: externalTooltipHandler,
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
		elements: {
			arc: {
				borderWidth: 0,
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

export function getChartDataConfig(data: IChartDataConfig) {
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
	return getChartDataConfig(getChartDatasetsDefault(type));
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

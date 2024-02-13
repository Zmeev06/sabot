export interface IChartCategoryProp {
	icon: string;
	value: string;
}

type ChartType = 'line' | 'line-filled' | 'bar' | 'doughnut';

export interface IChartFilterProp {
	type: ChartType;
	icon: string;
}

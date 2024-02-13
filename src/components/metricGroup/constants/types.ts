export interface IChartCategoryProp {
	icon: string;
	value: string;
}

export type ChartType = 'line' | 'line-filled' | 'bar' | 'doughnut';

export interface IChartFilterProp {
	type: ChartType;
	icon: string;
}

export type BadgeItemStyles = {
	borderColor?: string;
	bgColor?: string;
	textColor?: string;
};

export interface IBadgeLegendItem {
	id: string;
	styles?: BadgeItemStyles;
	text: string;
}

import type { IBadgeLegendItem } from '../../../components/metricGroup';

export const legend: IBadgeLegendItem[] = [
	{
		id: '1',
		text: '1-3',
		styles: {
			bgColor: 'bg-cyan-50',
			borderColor: 'border-cyan-200',
			textColor: 'text-success-700',
		},
	},
	{
		id: '2',
		text: '1-10',
		styles: {
			bgColor: 'bg-purple-50',
			borderColor: 'border-purple-200',
			textColor: 'text-purple-700',
		},
	},
	{
		id: '3',
		text: '11-30',
		styles: {
			bgColor: 'bg-cyan-50',
			borderColor: 'border-cyan-200',
			textColor: 'text-cyan-500',
		},
	},
	{
		id: '4',
		text: '31-50',
		styles: {
			bgColor: 'bg-gray-50',
			borderColor: 'border-grey-200',
			textColor: 'text-grey-700',
		},
	},
	{
		id: '5',
		text: '51-100',
		styles: {
			bgColor: 'bg-gray-50',
			borderColor: 'border-grey-200',
			textColor: 'text-grey-700',
		},
	},
	{
		id: '6',
		text: '101+',
		styles: {
			bgColor: 'bg-gray-50',
			borderColor: 'border-grey-200',
			textColor: 'text-grey-700',
		},
	},
];

export interface INavLink {
	title: string;
	path: string;
}

export const menuLinks: INavLink[] = [
	{
		title: 'Аналитика',
		path: '/projects/1/analytics/position-analysis',
	},
	{
		title: 'Семантика',
		path: '/projects/analytics/semantics',
	},
	{
		title: 'Аудит сайта',
		path: '/projects/analytics/audit',
	},
	{
		title: 'Отчёт',
		path: '/projects/analytics/report',
	},
	{
		title: 'Мониторинг',
		path: '/projects/analytics/monitoring',
	},
	{
		title: 'Настройки',
		path: '/projects/analytics/settings',
	},
	{
		title: 'Задачи',
		path: '/projects/analytics/tasks',
	},
];

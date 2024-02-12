export interface ISidebarItem {
	title: string;
	to: string;
	icon: string;
	iconColor?: string;
	notifications?: number;
}

export const mainLinks: ISidebarItem[] = [
	{
		title: 'Проекты',
		to: '/projects',
		icon: 'projects',
		notifications: 15,
	},
	{
		title: 'Семантика',
		to: '/semantics',
		icon: 'semantics',
	},
	{
		title: 'Структура',
		to: '/structure',
		icon: 'structure',
	},
	{
		title: 'Текстовые',
		to: '/texts',
		icon: 'texts',
	},
	{
		title: 'Маркетплейсы',
		to: '/marketplaces',
		icon: 'marketplaces',
	},
	{
		title: 'Бесплатно',
		to: '/free',
		icon: 'free',
		iconColor: 'text-yellow-400',
	},
	{
		title: 'Аудит',
		to: '/audit',
		icon: 'audit',
	},
];

export const additionalLinks: ISidebarItem[] = [
	{
		title: 'Настройки',
		to: '/settings',
		icon: 'settings',
	},
	{
		title: 'Помощь',
		to: '/help',
		icon: 'help',
		notifications: 7,
	},
	{
		title: 'Частые вопросы',
		to: '/faq',
		icon: 'faq',
	},
	{
		title: 'Реквизиты',
		to: '/restrictions',
		icon: 'restrictions',
	},
];

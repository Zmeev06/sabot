export const routes = [
	{
		path: '/',
		component: () => import('./'),
		name: 'Home',
	},
	{
		path: '/projects',
		component: () => import('./projects'),
		name: 'Projects',
	},
	{
		path: '/projects/analytics',
		component: () => import('./analytics'),
		name: 'Analytics',
	},
	{
		path: '/projects/:id/analytics/position-analysis',
		component: () => import('./positionAnalysis'),
		name: 'PositionAnalysis',
	},
];

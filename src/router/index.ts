import Routing from './routing.vue';
import { routes } from '../pages';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { Routing };

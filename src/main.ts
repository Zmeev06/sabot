import { createApp } from 'vue';
import { store } from './store/store';
import { router } from './router';
import App from './index.vue';
import VueTippy from 'vue-tippy';
import PrimeVue from 'primevue/config';
import './assets/tailwind.css';

import ru from './locale/ru.json';

const app = createApp(App)
	.use(store)
	.use(router)
	.use(PrimeVue, {
		unstyled: true,
		locale: ru.ru,
	})
	.use(VueTippy);
app.mount('#app');

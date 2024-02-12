import { createApp } from 'vue';
import { store } from './store/store';
import { router } from './router';
import App from './index.vue';
import PrimeVue from 'primevue/config';
import './assets/tailwind.css';

const app = createApp(App).use(store).use(router).use(PrimeVue);
app.mount('#app');

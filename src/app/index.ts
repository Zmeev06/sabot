import { createApp } from 'vue';
import { store } from './providers';
import App from './index.vue';
import PrimeVue from 'primevue/config';

const initializeApp = createApp(App).use(store).use(PrimeVue);

export const app = initializeApp;

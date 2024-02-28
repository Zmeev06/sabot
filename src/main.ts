import { createApp } from 'vue';
import { store } from './store/store';
import { router } from './router';
import App from './index.vue';
import VueTippy from 'vue-tippy';
import PrimeVue from 'primevue/config';
import './assets/tailwind.css';
import './assets/global.css';

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import 'swiper/css';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue, {
    unstyled: true
  })
  .use(VueTippy)
  .use(VCalendar);
app.mount('#app');

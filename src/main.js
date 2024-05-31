import { createApp } from 'vue';

import App from './assets/App.vue';

import './assets/tailwind.css';
import router from './routes/routes'; 


const app = createApp(App);

app.mount('#app');
app.use(router); 
/* .use(router) */
import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import '@/styles/index.less'
import router from './router'
const app = createApp(App);
app.use(router).mount('#app');

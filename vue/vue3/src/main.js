import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { router } from './route/index.js';
import { Driver } from 'driver.js';
import 'driver.js/dist/driver.min.css';

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(new Driver())
app.mount('#app')

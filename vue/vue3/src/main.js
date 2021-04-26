import { createApp } from 'vue'
import App from './App.vue'

// import router from './router'
// createApp(App).use(router).mount('#app');

import { router } from './route/index.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

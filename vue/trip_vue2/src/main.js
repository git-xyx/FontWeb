import Vue from 'vue';
import App from './App.vue';
//引用router.js
import routerSelf from './router.js';
// element-ui
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUi);
// axios和vue-axios
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// // Vue.prototype.$axios = axios;
// Vue.use(VueAxios, axios);

// http请求
import { post, get, filePost } from './core/http'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$filePost = filePost;

import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css

Vue.prototype.$dri = new Driver();


Vue.config.productionTip = false;

new Vue({
  // el: '#app',
  render: h => h(App),
  //一定要注入到vue的实例对象上
  router: routerSelf
}).$mount('#app')

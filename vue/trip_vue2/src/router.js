//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
import home from './pages/home.vue'
//引用pic页面
import pic from './pages/pic/pic-index.vue';
import cssModule from './pages/css-module/css-index.vue';
import JsModule from './pages/js-module/js-index.vue';

//第三方库需要use一下才能用
Vue.use(VueRouter)

//定义routes路由的集合，数组类型
const routeList = [
    //单个路由均为对象类型，path代表的是路径，component代表组件
    { path: '', redirect: 'home', pathMatch: 'full' },
    { path: '/home', component: home },
    { path: '/pic', component: pic },
    { path: '/css-module/:id', component: cssModule },
    { path: '/js-module', component: JsModule },
    { path: '*', redirect: 'home' },
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    // mode: 'history', //默认hash模式
    routes: routeList
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
import { createRouter, createWebHashHistory } from "vue-router";
const home = () => import("../components/home");
const login = () => import("../components/login");
const routerHistory = createWebHashHistory();

const routes = [
    { path: '', redirect: 'home' },
    {
        path: '/home',
        component: home
    },
    {
        path: '/login',
        component: login
    }
]
export const router = createRouter({
    history: routerHistory,
    routes: routes
})
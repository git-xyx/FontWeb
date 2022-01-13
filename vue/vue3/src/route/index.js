import { createRouter, createWebHashHistory } from "vue-router";
const debounce = () => import("../components/debounce");
const routerHistory = createWebHashHistory();

const routes = [
    { path: '', redirect: 'debounce' },
    {
        path: '/debounce',
        component: debounce
    }
]
export const router = createRouter({
    history: routerHistory,
    routes: routes
})
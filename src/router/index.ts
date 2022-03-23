import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
        name: 'Dashboard'
    },
    {
        path: '/',
        redirect: '/dashboard'
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
});

export function resetRouter() {
    (router as any).matcher = (router as any).matcher // 重置路由
}
export default router


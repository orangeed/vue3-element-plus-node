import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "首页",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
        meta: {
            icon: "el-icon-s-home",
            showLink: true,
            savedPosition: false,
        },
    },
    {
        path: "/articleDetail",
        name: "文章详情",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
        meta: {
            icon: "el-icon-s-home",
            showLink: true,
            savedPosition: false,
        },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            if (savedPosition) {
                return savedPosition;
            } else {
                if (from.meta.saveSrollTop) {
                    const top: number =
                        document.documentElement.scrollTop || document.body.scrollTop;
                    resolve({ left: 0, top });
                }
            }
        });
    },
});

export default router;
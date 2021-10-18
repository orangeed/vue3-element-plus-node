import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Layout from "../layout/index.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "首页",
        component: () => import(/* webpackChunkName: "home" */ "../views/index/index.vue"),
    },

    // {
    //     path: "/",
    //     name: "首页",
    //     // component: Layout,
    //     redirect: '/index',
    //     children: [
    //         {
    //             path: '/index',
    //             component: () => import(/* webpackChunkName: "home" */ "../views/index/index.vue"),
    //         }
    //     ]
    // },
    // {
    //     path: "/",
    //     name: "文章详情",
    //     // component: Layout,
    //     redirect: '/articleDetail',
    //     children: [
    //         {
    //             path: "/articleDetail",
    //             component: () => import(/* webpackChunkName: "article" */ "../views/article/index.vue"),
    //         }
    //     ]
    // },
    {
        // 找不到路由重定向到404页面
        path: "/:pathMatch(.*)",
        component: () => import("../views/error/404.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
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
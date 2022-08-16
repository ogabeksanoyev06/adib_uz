import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/home"),
      },
      {
        path: "/category",
        name: "category",
        component: () => import("@/views/categories"),
      },
      {
        path: "category/:id",
        name: "category-detail",
        component: () => import("@/views/detailed-page"),
        props: true,
      },
      {
        path: "/news",
        name: "news",
        component: () => import("@/views/news"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/about"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/contacts"),
      },
    ],
  },

  {
    path: "/sign-in",
    component: () => import("@/layouts/Auth"),
    children: [
      {
        path: "/sign-in",
        name: "login",
        component: () => import("@/components/layouts/auth/login"),
      },
    ],
  },
  {
    path: "/sign-up",
    component: () => import("@/layouts/Auth"),
    children: [
      {
        path: "/sign-up",
        name: "register",
        component: () => import("@/components/layouts/auth/register"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

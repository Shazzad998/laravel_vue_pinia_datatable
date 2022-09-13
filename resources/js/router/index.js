import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Forms from "../pages/Forms.vue";
import Cards from "../pages/Cards.vue";
import Tables from "../pages/Tables.vue";
import Buttons from "../pages/Buttons.vue";
import Charts from "../pages/Charts.vue";
import Modals from "../pages/Modals.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";

import AuthLayout from "../layouts/AuthLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: AuthLayout,
        children: [
            {
                path: "/dashboard",
                component: Dashboard,
                name: "dashboard",
            },

            {
                path: "/forms",
                component: Forms,
                name: "forms",
            },
            {
                path: "/cards",
                component: Cards,
                name: "cards",
            },
            {
                path: "/tables",
                component: Tables,
                name: "tables",
            },
            {
                path: "/buttons",
                component: Buttons,
                name: "buttons",
            },
            {
                path: "/charts",
                component: Charts,
                name: "charts",
            },
            {
                path: "/modals",
                component: Modals,
                name: "modals",
            },
        ],
    },

    {
        path: "/auth",
        redirect: "/auth/login",
        component: DefaultLayout,
        children: [
            {
                path: "/auth/login",
                component: Login,
                name: "login",
            },

            {
                path: "/auth/register",
                component: Register,
                name: "register",
            },

            {
                path: "/auth/forgot-password",
                component: ForgotPassword,
                name: "forgot-password",
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

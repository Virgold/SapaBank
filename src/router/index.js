import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Page from "../views/LandingPage.vue";
import Dashboard from "../views/bankDashboardLayout.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},
{
    path: "/LandingPage",
    name: "LandingPage",
    component: Page,
},
{
    path: "/bank_dashboard",
    name: "bank_dashboard",
    redirect: "/bank_dashboard/bank_dashboardOverview",
    component: Dashboard,
    children: [{
        path: "/bank_dashboard/bank_dashboardOverview",
        name: "bankOverview",
        component: () =>
        import ("../components/bank_dashboardOverview.vue")
    },
],
},

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
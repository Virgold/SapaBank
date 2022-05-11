import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Page from "../views/LandingPage.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},
{
    path: "/LandingPage.vue",
    name: "LandingPage",
    component: Page,
},

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Page from "../views/LandingPage.vue";
import SignUp from "../components/SignupPage.vue";
import Airtime from "../components/airtime_page.vue";

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
{
    path:"/SignupPage",
    name:"SignupPage",
    component:SignUp,
},
{
    path:"/airtime_page",
    name:"airtime",
    component:Airtime,
}

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Page from "../views/LandingPage.vue";
import SignUp from "../components/SignupPage.vue";

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
    path:"/SignupPage.vue",
    name:"SignupPage",
    component:SignUp,
}

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
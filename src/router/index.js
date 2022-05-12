import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/HomeView.vue'
import dashboardLayout from '@/Layouts/dashboardLayout.vue'
import dashboardView from "../views/bankDashboardView.vue";


const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},

{
    path: "/dashboardLayout",
    name: "dashboardLayout",
    component: dashboardLayout,
    redirect:"/dashboardLayout/dashboardView",
    children:[
        {
            path: "/dashboardLayout/dashboardView",
            name: "dashboardView",
            component: dashboardView,
        },
    ]
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
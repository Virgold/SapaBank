import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/HomeView.vue'
import dashboardLayout from '@/Layouts/dashboardLayout.vue'
import dashboardView from "../views/bankDashboardView.vue";
import signUpPage from '../views/SignupPage.vue';


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
    path:"/SignUpPage",
    name:"SignupPage",
    component:signUpPage,
}

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/HomeView.vue'
import signUpPage from '../views/SignupPage.vue';
import dashboardLayout from '@/Layouts/dashboardLayout.vue'
import dashboardView from "../views/bankDashboardView.vue";
import cardLayout from "../Layouts/ShortCardLayout.vue";
import Transfer from "../views/TransferPage.vue";
import TrackCard from "../views/TrackCard.vue";
import  Apply  from "../views/ApplyCards.vue";
import  LongCardLayout  from "../Layouts/LongCardLayout.vue";
import CardAp from "../views/cardApplication.vue"




const routes = [
    {
    path: "/",
    name: "Home",
    component: Home,
},
{
    path:"/SignUpPage",
    name:"SignupPage",
    component:signUpPage,
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
    path: "/cardLayout",
    name: "CardLayout",
    component: cardLayout,
    redirect:"/cardLayout/trackCard",
    children:[
        {
            path: "/cardLayout/trackCard",
            name: "TrackCard",
            component: TrackCard
        },
        {
            path:"/cardLayout/application",
            name:"cardApplication",
            component:CardAp
        },
    ]
},


{
    path: "/longCardLayout",
    name: "LongCardLayout",
    component: LongCardLayout,
    children:[
        {
            path: "/longCardLayout/applyCard",
            name: "ApplyCard",
            component: Apply
        }
    ]
},
{
    path: "/transfer",
    name: "transfer",
    component: Transfer
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
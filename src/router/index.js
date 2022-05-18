import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Dashboard from "../Layouts/dashboardLayout.vue";
import signUpPage from '../views/SignupPage.vue';
import cardLayout from "../Layouts/ShortCardLayout.vue";
import Transfer from "../views/TransferPage.vue";
import TrackCard from "../views/TrackCard.vue";
import  Apply  from "../views/ApplyCards.vue";
import  LongCardLayout  from "../Layouts/LongCardLayout.vue";
import CardAp from "../views/cardApplication.vue"
import BlockCard from "../views/BlockCards.vue"
import ShowCard from "../Layouts/ShowCardLayout.vue"




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
        }
    ]
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


{
    path: "/longCardLayout",
    name: "LongCardLayout",
    component: LongCardLayout,
    children:[
        {
            path: "/longCardLayout/applyCard",
            name: "ApplyCard",
            component: Apply
        },
        {
            path: "/longCardLayout/blockCard",
            name: "Block cards",
            component: BlockCard
        }
    ]
},
{
    path: "/transfer",
    name: "transfer",
    component: Transfer
},
{
    path:"/showcard",
    name:"show card",
    component: ShowCard
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
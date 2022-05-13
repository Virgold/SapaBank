import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import cardLayout from "../layout/ShortCardLayout.vue";
import Transfer from "../views/TransferPage.vue";
import TrackCard from "../views/TrackCard.vue";
import  Apply  from "../views/ApplyCards.vue";
import  LongCardLayout  from "../layout/LongCardLayout.vue";
import CardAp from "../views/cardApplication.vue"
import SignUp from "../components/SignupPage.vue";



const routes = [
    {
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
<template>
<div class="sidebarContainers d-flex">
    <div class="sidebar d-inline-block pt-3 pb-3" ref="sidebar">
        <div class="sidebar__header d-sm-flex d-lg-block justify-content-end">

            <!-- <h3 class="text-dark ">Dashboard</h3> -->
            <i class="bi bi-x text-dark d-lg-none closeIcon" @click="closeSidebar"></i>
        </div>

        <ul class="sidebar__items p-0">
            <Logout v-if="showModal" @close="showModal = !showModal"/>
            <router-link to="/">
                <li :class="{ active_item: active }" @click="noHover">
                    <i class="bi bi-house-door pr-1"></i>
                    Home
                </li>
            </router-link>
            <router-link to="../components/bank_dashboardOverview.vue">
                <li :class="{ active_item: active }" @click="noHover">
                    <i class="bi bi-house-door pr-1"></i>
                    Community
                </li>
            </router-link>
            <router-link to="/transfer">
                <li :class="{ active_item: active }" @click="noHover">
                    <i class="bi bi-house-door pr-1"></i>
                    Transfer
                </li>
            </router-link>
            <router-link to="/cardLayout">
                <li :class="{ active_item: active }" @click="noHover">
                    <i class="bi bi-house-door pr-1"></i>
                    Card
                </li>
            </router-link>
            <router-link to="/airtime">
                <li :class="{ active_item: active }" @click="noHover">
                    <i class="bi bi-house-door pr-1"></i>
                    Airtime
                </li>
            </router-link>
            <router-link to="../components/bank_dashboardOverview.vue">
                <li :class="{ active_item: active }" @click="noHover">
                    <i class="bi bi-house-door pr-1"></i>
                    Help
                </li>
            </router-link>
        </ul>
    </div>
    <div class="toggler">
        <i class="bi bi-chevron-right text-dark rounded-right d-lg-none px-0 py-5 toggleIcon" @click="showSidebar"></i>
    </div>
</div>
</template>

<script>
// import Logout from '../components/Logout.vue'
// export default {
//     components:{ 
//         Logout
//     },
//     data() {
//         return {
//             active: false,
//             showModal:false,
//         };
//     },
//     methods: {
//          offModal() {
//             this.$emit("close");
//         },
//         showSidebar() {
//             this.$refs.sidebar.style.left = "0%";
//         },
//         closeSidebar() {
//             this.$refs.sidebar.style.left = "-100%";
//         },
//         noHover() {
//             var list = document.querySelectorAll("li");
//             console.log(list);
//               list.forEach((e) => {
//                 console.log(e);
//                 if (e.classlist.contains("active")) {
//                   list.forEach((e) => e.classList.remove("active_item"));
//                 }
//                 this.classList.add("active_item");
//               });
//             },
//             list.forEach((item) => {
//                 item.addEventListener("click", function () {
//                     list.forEach((e) => e.classList.remove("active_item"));
//                     this.classList.add("active_item");
//                 });
//             });

//             list.forEach(item => {
//                 item.addEventListener("click", function () {
//                     list.forEach(e => e.classList.remove("active_item"));
//                     this.classList.add("active_item");
//                 })
//             })
//         },
//     },
// };
</script>

<style scoped>
.save-font {
    font-weight: 600;
}

.life-font {
    font-weight: 100;
}

/* S I D E B A R */

.sidebar {
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.096);
    width: 16rem;
    background-color:#236457 !important ;
    height: 130vh;
}

.sidebar__header {
    padding: 0 0 0px 30px;
}

.sidebar__items {
    overflow: auto;
}

.sidebar__items li {
    list-style: none;
    line-height: 3.5rem;
    letter-spacing: 1px;
    padding: 4px 0 4px 30px;
    color: #ffffff !important;
    font-weight: bold;
}

.sidebar__items a {
    text-decoration: none;
}

.sidebar__items li:hover {
    background-color: #ffffff33;
    transition: all 0.5s;
    /* margin: 0 19px; */
    /* color: #ffffff; */
}

.active_item {
    background-color: #ffffff !important;
    color: var(--blue) !important;
    margin: 0 17px;
    transition: all 0.5s;
    border-radius: 30px;
}

.closeIcon {
    font-size: 35px;
}

.toggleIcon {
    font-size: 30px;
    background-color: var(--blue);
}

.toggler {
    margin: 15rem 0 0 0;
}

@media (min-width: 0px) {
    .sidebar__header {
        display: flex;
    }
}

@media (max-width: 991px) {
    .sidebar {
        position: absolute;
        left: -100%;
        z-index: 111;
        transition: 0.5s;
        height: 100vh;
    }

    .toggleIcon {
        position: absolute;
    }
}
</style>

<template>
      <BankNavbar/>
  <div class="d-flex flex-row gap-3 wrapper">
      <SideBar />
      <div class="content w-75">
       <router-view/>
      </div>
  </div>
</template>

<script>
import BankNavbar from "../components/bank_navbar.vue";
import SideBar from "../components/sideBar.vue";
export default {
    // name:'dashboardLayout',
    components: {
         BankNavbar,
         SideBar
         },
}
</script>

<style>
.wrapper{ 
    height: 100vh;
}
#app {
      font-family: 'Bree Serif', serif;
}
</style>
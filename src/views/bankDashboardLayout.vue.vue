<template>
  <BankNavbar />
  <div class="layout-content">
      <BankSidebar /> 
      <router-view/>
  </div>

</template>

<script>
import BankNavbar from "../components/bank_navbar.vue";
import BankSidebar from "../components/bank_sidebar.vue";

export default {
  components: {BankNavbar,BankSidebar,}
}
</script>

<style>
#app {
      font-family: 'Bree Serif', serif;
}
.layout-content{
  display: flex !important;
    height: calc(100vh - 3.4rem);
}
</style>

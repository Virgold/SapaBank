<template>
  <BankNavbar />
  <div>
      <BankDashboard /> 
  </div>

</template>

<script>
import BankNavbar from "../components/bank_navbar.vue";
import BankDashboard from "../components/bank_dashboard.vue";

export default {
  components: {BankNavbar,BankDashboard,}
}
</script>

<style>
#app {
      font-family: 'Bree Serif', serif;
}
</style>

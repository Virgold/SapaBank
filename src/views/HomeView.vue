<template>
  <div>
    <router-link to="/"></router-link> 
    <router-link to="/LandingPage"></router-link>
  </div>
  <LandingPage />
</template>

<script>

import LandingPage from "./LandingPage.vue"
export default {
  name:'HomeView',
  components:{
    LandingPage,
  }
}
</script>


<style>

</style>

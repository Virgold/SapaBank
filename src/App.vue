<template>
  <router-view/>
</template>

<script>
import LandingPage from './views/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage
}
}
</script>

<style>
#app {
  font-family: 'Bree Serif', serif;
  box-sizing: border-box;
  padding:0;
  margin:0;
}
</style>
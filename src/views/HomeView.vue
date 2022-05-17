<template>
        <!-- NavSection -->
       <div class="container-fluid  bg">
         <HomeNavBar/>
       </div>
       <!-- Page Content -->
        <div class="container-fluid  bg-white">
          <HomeContent/>
        </div>
      <!-- Page Statistic Cards -->
       <div class="container-fluid  bg-light">
         <HomeCards/>
       </div>
      <!-- Carousel Section -->
       <div class="container-fluid  bg-white">
         <HomeCarousel/>
       </div>
        <!-- footer Section -->
         <div class="container-fluid  bg-dark">       
           <HomeFooter/>
         </div>

</template>

<script>
import HomeFooter from '@/components/HomeFooter.vue';
import HomeNavBar from '@/components/HomeNavBar.vue';
import HomeContent from '@/components/HomeTopContent.vue';
import HomeCards from '../components/HomeCards.vue';
import HomeCarousel from '../components/HomeCarousel.vue';
export default {
  name:'HomeView',
  components:{
    HomeFooter,
    HomeNavBar,
    HomeContent,
    HomeCards,
    HomeCarousel
}
}
</script>


<style>
  .btnWarning {
  background-color: #af8055 !important;
  border-radius: 20px;
  color: white;
}
.btnSuccess {
  background-color: #236457;
  border-radius: 20px;
  color: white;
}
.btn:hover {
  color: white;
}

.bg {
  /* background-image: url(../assets/brand/Group-10.svg); */
  background-repeat: no-repeat;
  background-size: cover;
}
.textBrown {
  color: #af8055 !important;
}
.textGreen {
  color: #236457 !important;
}
.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: none;
}
</style>

<template>
  <Navbar/>
<!-- =================BODY==================== -->
<div class="d-flex justify-content-center mt-5 text-white">
    <div class="card bg-green p-1">
        <h5>SAPA</h5>
        <div class="card-bg-text ml-60"><p>S</p></div>
        <div class="card-bg-text ml-120"><p>A</p></div>
        <div class="card-bg-text ml-180"><p>P</p></div>
        <div class="card-bg-text ml-240"><p>A</p></div>
        <h6 class="text-end"><em>VISA</em></h6>
    </div>
</div>
<div>
    <router-view />
</div>
</template>

<script>
import Navbar from "../components/bank_navbar.vue"
export default {
name:"NavB",
components:{Navbar}
}
</script>

<style scoped>

.float-right{
    float:right;
    line-height: 4rem;
    
}

.card{
    width:fit-content;
    height:fit-content;
    box-shadow: 0px 5px #AF8055;
    border-radius: 15px 15px 15px 15px;
}

.card-bg-text{
    font-size:60px;
    color:rgba(173, 182, 186, 0.42);
    line-height: 1;
}
.ml-60{
    margin-left:40px;
}
.ml-120{
    margin-left:100px;
}
.ml-180{
    margin-left:150px;
}
.ml-240{
    margin-left:200px;
    margin-right:40px;
}

.bg-green{
    background-color:#236457;
    color:white;
}
@media (max-width:993px){
    .float-right{
    float:right;
    line-height: 3rem;
    
}

.card-bg-text{
    font-size:55px;
    color:rgba(173, 182, 186, 0.42);
    line-height: .8;
}
.ml-60{
    margin-left:30px;
}
.ml-120{
    margin-left:80px;
}
.ml-180{
    margin-left:140px;
}
.ml-240{
    margin-left:190px;
    margin-right:30px;
}
}
</style>
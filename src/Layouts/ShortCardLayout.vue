<template>
  <Navbar />

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
body{
    font-family: 'Bree Serif', serif;
    box-sizing: border-box;
    padding:0;
    margin:0;
}

h5{
    line-height:.8;
}
.float-right{
    float:right;
    line-height: 3rem;
    
}

.card{
    width:fit-content;
    height:fit-content;
    box-shadow: 0px 5px #AF8055;
    border-radius:  5px 5px 10px 10px !important;
}

.card-bg-text{
    font-size:60px;
    color:rgba(173, 182, 186, 0.42);
    line-height: .8;
}
.ml-60{
    margin-left:40px;
}
.ml-120{
    margin-left:100px;
}
.ml-180{
    margin-left:180px;
}
.ml-240{
    margin-left:240px;
    margin-right:40px;
}

.bg-green{
    background-color:#236457;
    color:white;
}



@media (max-width:992px){
    .float-right{
    float:right;
    line-height: 3rem;
    
}


.card-bg-text{
    font-size:50px;
    color:rgba(173, 182, 186, 0.42);
    line-height: .7;
}
.ml-60{
    margin-left:35px;
}
.ml-120{
    margin-left:90px;
}
.ml-180{
    margin-left:160px;
}
.ml-240{
    margin-left:220px;
    margin-right:40px;
}

}
@media (max-width:767px){
    .float-right{
    float:right;
    line-height: 2rem;
    
}

.card-bg-text{
    font-size:30px;
    color:rgba(173, 182, 186, 0.42);
    line-height: .5;
}
.ml-60{
    margin-left:30px;
}
.ml-120{
    margin-left:70px;
}
.ml-180{
    margin-left:120px;
}
.ml-240{
    margin-left:160px;
    margin-right:30px;
}

}
</style>
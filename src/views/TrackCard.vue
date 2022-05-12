<template>
  <div class="d-flex justify-content-center align-items-center mt-5 text-dark">
    <p class="p-circle bg-green pt-40">order<br>received</p>
    <div class="line-green"></div>
    <p class="p-circle bg-brown">processing</p>
    <div class="line-brown"></div>
    <p class="p-circle bg-brown pt-40">card sent<br>for delivery</p>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.p-circle{
    width:120px;
    height:120px;
    font-size:10px;
    padding-top:55px;
    border-radius: 100%;
    text-align:center;
}

.pt-40{
    padding-top:50px;
}

.line-brown{
    height:3px;
    width:100px;
    background: #AF8055;
}

.line-green{
    height:3px;
    width:100px;
    background: #236457;
}
.line-height{
    line-height: 1.1;
}

.bg-green{
    background-color:#236457;
    color:white;
}

.bg-brown{
    background-color:#AF8055;
}

@media (max-width:992px){
.p-circle{
    width:100px;
    height:100px;
    font-size:10px;
    padding-top:45px;
    border-radius: 100%;
    text-align:center;
}

.pt-40{
    padding-top:40px;
}
.line-brown{
    height:3px;
    width:80px;
    background: #AF8055;
}

.line-green{
    height:3px;
    width:80px;
    background: #236457;
}
}


@media (max-width:567px){
.p-circle{
    width:80px;
    height:80px;
    font-size:10px;
    padding-top:35px;
    border-radius: 100%;
    text-align:center;
}

.pt-40{
    padding-top:30px;
}
.line-brown{
    height:3px;
    width:50px;
    background: #AF8055;
}

.line-green{
    height:3px;
    width:50px;
    background: #236457;
}
}
</style>
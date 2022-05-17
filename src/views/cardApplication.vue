<template>
  <div class="d-flex justify-content-center mt-5 mb-3">
      <div class="form w-sm-50">
        <div>
          <label for="">Phone Number</label>
          <input type="text" id="" class="input" >
        </div>
        <div  class="mt-3">
          <label for="">Home address/Landmark</label>
          <input type="text" id="" class="input">
        </div>
        <div class="mt-3">
          <label for="">City</label>
          <input type="text" id="" class="input">
        </div>
        <div class="mt-3">
          <label for="">State</label>
          <input type="text" id="" class="input">
        </div>
        <div class="mt-3 text-center">
          <input type="submit" class="input-submit" value="Apply for Card">
        </div>
        
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.form{
    width: 90vw;
}
.input{
  border:none;
  width: 100%;
  border-radius: 5px;
  padding: 1.2rem 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
}
.input:focus{
  outline:none;
}
.input-submit{
  border:none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  background-color:#236457;
  color:white;
}
.input-submit:focus{
/* background: linear-gradient(220deg,  #b917d7 30%, #d027a3 70% ); */
}
@media(min-width:523px){
    .w-sm-50{
        width: 600px
    }
}
</style>
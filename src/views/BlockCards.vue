<template>
  <div class="container mt-5 mb-5">
      <div class="d-flex justify-content-between align-items-center">
            <div>
                <h4 class="mb-0">Block Card</h4>
                <p class="Text-small text-muted">Temporary disable this card</p>
            </div>
            <button class="rounded-pill switch-button">
                <div class="rounded-circle bg-white"></div>
            </button>
      </div>

      <div class="mt-4">
          <h4>Blocking this card will stop the following</h4>
          <ul>
              <li>ATM Withdrawals</li>
              <li>POS Transactions</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.switch-button{
    padding: 0.2rem 1.5rem 0.2rem .2rem;
    background: #166534;
    border:none;
    outline:none;
}
.switch-button>div{
    padding:.3rem;
}
.switch-button:focus{
    padding: 0.2rem 0.2rem 0.2rem 1.5rem;
}
.Text-small{
    font-size:.9rem;
}
.bg-gray{
   background: #F1F1F1;
}
.container{
    max-width: 600px;
}
.container >div:nth-child(1){
     background: #F1F1F1;
     padding:1rem;
     border-radius:2px;
}
.container >div:nth-child(2){
     background: #F1F1F1;
     padding:1rem;
     border-radius:2px;
}
ul{
    list-style-image: url(../assets/images/check.png);
    
}
@media(min-width:567px){
    h3{
        font-size: 2.5rem;
    }
    .Text-small{
        font-size: 1rem;
    }
    li{
        font-size: 1.3rem;
    }
    .switch-button{
    padding: 0.3rem 1.7rem 0.3rem 0.3rem ;
}
    .switch-button:focus{
    padding: 0.3rem 0.3rem 0.3rem 1.7rem;
}
}
</style>
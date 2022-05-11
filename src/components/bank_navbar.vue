<template>
      <!-- <div class="container-fluid p-0 nav_container"> -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">S<span>A</span>PA</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Community</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">help</a>
            </li>
          </ul>
          <div class="user_icon ml-auto">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </nav>
  <!-- </div> -->
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default{
    name:'NavBar'
}
</script>

<style scoped>
body{
    font-family: 'Bree Serif', serif;
    background-color: white;
}
span{
  color: #AF8055 !important;
}
.navbar-brand{
    font-size: 2rem;
    color: #236457 !important;
}
.user_icon{
    font-size: 20px;
}
.navbar-collapse{
    display: flex !important;
    justify-content: center !important;
}
.nav-link{
    font-weight: 500;
    font-size: 17px;
    color: black !important;
}
.nav-link:hover{
    font-weight: 500;
    font-size: 17px;
    color: #236457 !important ;
    text-decoration: underline;
}
.nav_container{
    border-bottom: 2px solid #E5E5E5;
}
.brown_top{
    background: #AF8055;
    height: 40px;
    margin-top: 6rem;
    border-radius: 10px 10px 0px 0px;
    width: 75%;
}
.balance_container{
    background: #236457;
    border-radius: 10px 10px 0px 0px;
}
.acct_info{
    background-color: #AF8055;
    border-radius: 10px 10px 10px 10px;
}
.input-group{
    border-bottom: 2px solid #E5E5E5;
}
.form-control:focus{
    border: none !important;
    box-shadow: none !important;
}
.form-control{
    width: 100%;
    border: none !important;
}
.input-group-text{
    border: none !important;
    background-color: transparent;
}

</style>
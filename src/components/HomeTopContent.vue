<template>
 
  <div class="container-fluid py-5 bgSuccess">
    <div class="py-md-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="mb-4 mb-xl-0 text-center text-md-start textGreen">
              <!-- Caption -->
              <h1 class="display-5 fw-bold">
                SAPA <span class="text-dark">BANK</span>
              </h1>
              <p class="mb-4 lead fw-bold">THE BANK OF THE BROKE</p>
              <img
                src="../assets/background/handWallet.png"
                alt=""
                class="img-fluid d-none d-md-block ImgSizing"
              />
            </div>
          </div>
          <div class="offset-xl-1 col-xl-5 col-lg-6 col-md-12">
            <!-- Page Image -->
            <div class="image">
              <div class="d-block mt-n5 ms-5">
                <img
                  src="../assets/brand/Group-10.svg"
                  alt="" NavBar
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  background-image: url(../assets/brand/Group-10.svg);
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
.ImgSizing{
 width: 20rem;
 height: 20rem;
} 
</style>
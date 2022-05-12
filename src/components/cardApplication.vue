<template>
    <section class="body_section">
        <div class="container d-flex justify-content-center">
            <div class="card atm_card shadow mt-5">
                <div class="card atm_card_lap">
                    <div class="card-body">
                        <p class="sm_card_head">SAPA</p>
                        <p class="stage stage_1">S</p>
                        <p class="stage stage_2">A</p>
                        <p class="stage stage_3">P</p>
                        <p class="stage stage_4">A</p>
                        <p class="stage_last mt-4"><i>VISA</i></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-flex justify-content-center mt-4">
          <button class="btn show_btn mb-2 pr-5">Show Details</button>
        </div>
        <div class="card container d-flex justify-content-center l-card">
          <div class="card-body">
            <form action="">
              
                <div class="mb-4 mt-4">
                  <label for="formInputPhone" class="d-flex justify-content-between">
                      <p>Phone Number</p>
                  </label>
                  <input type="tel" class="form-control form-further" placeholder="" aria-label="" aria-describedby="basic-addon1">
              </div>
            
              
                <div class="mb-4 mt-4">
                  <label for="formInputAddress" class="d-flex justify-content-between">
                      <p>Home address/Landmark</p>
                  </label>
                  <input type="text" class="form-control form-further" placeholder="" aria-label="" aria-describedby="basic-addon1">
              </div>
              
              
                <div class="mb-4 mt-4">
                  <label for="formInputCity" class="d-flex justify-content-between">
                      <p>City</p>
                  </label>
                  <input type="text" class="form-control form-further" placeholder="" aria-label="" aria-describedby="basic-addon1">
              </div>
              
              
                <div class="mb-4 mt-4">
                  <label for="formInputState" class="d-flex justify-content-between">
                      <p>State</p>
                  </label>
                  <input type="text" class="form-control form-further" placeholder="" aria-label="" aria-describedby="basic-addon1">
              
              </div>
              <div class="container d-flex justify-content-center">
                <button class="btn show_btn mb-2 mt-2" style="padding-left: 50px; padding-right: 50px;">Apply for Card</button>
              </div>
            </form>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    body {
    font-family: "Bree Serif", sans-serif !important;
}
.bi-person-circle {
    height: 30px;
    width: 30px;
}
.nav-section {
    position: sticky !important;
    background-color: white !important;
    top: 0;
    z-index: 10;
}
.nav-section nav ul li a {
    text-decoration: none !important;
    color: black !important;
    font-weight: 700;
}
.nav-section nav ul li a:hover{
    color: #236457 !important;
    font-weight: 700;
    border-bottom: 1px solid #236457 !important;
}
.profile_link {
    text-decoration: none !important;
    color: black !important;
    margin-left: auto;
}
.activeLink {
    margin-left: 400px;
}
.linkB {
    margin-left: 50px;
}
.linkC {
    margin-left: 50px;
}
.navbar-brand {
    font-size: 33px !important;
    color: #236457 !important;
    font-weight: 400 !important;
}
.airtime_header {
    color: #236457 !important;
    font-weight: 400 !important;
    font-size: 33px !important;
}
.card {
    border-radius: none !important;
    border: none !important;
    width: 35rem;
}
.sm_card_head {
    font-size: 33px !important;
}
.fa-clock-o {
    color: rgb(167, 166, 166);
}
.network_btn {
    background-color: #f9ca55 !important;
    border-radius: 50% !important;
    color: white !important;
    padding-top: 19px !important;
    padding-bottom: 13px !important;
    margin-left: 15px;
}
.stage {
    font-size: 46px;
    color: rgba(173, 182, 186, 0.42);
}
.stage_1 {
    margin-left: 2rem;
}
.stage_2 {
    margin-left: 7rem;
    margin-top: -40px !important;
}
.stage_3 {
    margin-left: 12rem;
    margin-top: -40px !important;
}
.stage_4 {
    margin-left: 17rem;
    margin-top: -40px !important;
}
.stage_last {
    margin-left: 17.6rem;
}
.network_card {
    margin-top: -1rem !important;
}
.form_submit {
    background-color: #236457 !important;
    color: white !important;
    border-radius: 7px !important;
}
.show_btn {
    background-color: #236457 !important;
    color: white !important;
    border-radius: 7px !important;
}
.atm_card {
    position: relative;
    background-color: #af8055 !important;
    border: none !important;
    border-radius: 10px !important;
    width:auto;
    height: 350px;
}
.atm_card_lap {
    /* position: absolute; */
    background-color: #236457 !important;
    height: 345px;
    width: 22rem;
    color: white !important;
}
.phone_number {
    margin-left: 10px;
}
label p {
    font-size: 19px !important;
}
.form-control {
    border: none !important;
    height: 48px !important;
    background-color: #efeeee !important;
}
.form-further {
    border: none !important;
    height: 48px !important;
    background-color: white !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
}
.l-card {
    width: 35rem !important;
}
@media (max-width:748px) {
    .activeLink {
        margin-left: 0px;
    }
    .linkB {
        margin-left: 0px;
    }
    .linkC {
        margin-left: 0px;
    }
    .phone_number {
        margin-left: 0px;
    }
    .network_btn {
        margin-left: 0px;
    }
}
@media (max-width:371px) {
    .atm_card_lap {
        width: 15rem;
    }
    .stage_2 {
        margin-left: 4rem;
    }
    .stage_3 {
        margin-left: 6rem;
    }
    .stage_4 {
        margin-left: 8rem;
    }
}
@media (max-width:558px) {
    .stage_1 {
        margin-left: 5rem;
    }
    .stage_2 {
        margin-left: 7rem;
    }
    .stage_3 {
        margin-left: 9rem;
    }
    .stage_4 {
        margin-left: 11rem;
    }
    .l-card {
        width: 30rem !important;
    }
}
@media (max-width:472px) {
    .l-card {
        width: 25rem !important;
    }
}
@media (max-width:390px) {
    .l-card {
        width: 23rem !important;
    }
}
</style>
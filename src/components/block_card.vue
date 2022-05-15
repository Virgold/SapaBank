<template>
    <section class="body-section">
        <div class="container d-flex justify-content-center">
            <div class="card atm_card shadow">
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
        <div class="container d-flex justify-content-center">
          <div class="block_side mb-5">
            <div class="d-flex justify-content-between">
              <div class="d-block">
                <h5>Block Card</h5>
                <p style="font-size: 13px; color: #797979;">Temporarily disable this card</p>
              </div>
              <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="container d-flex justify-content-center">
          <div class="block_side2 mb-5">
            <div class="d-block">
              <h5 class="text-left mt-4">Blocking this card will stop the following</h5>
              <p><i class="fa fa-check me-2"></i>ATM Withdrawals</p>
              <p><i class="fa fa-check me-2"></i>POS Transactions</p>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
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
.stage {
    font-size: 46px;
    color: rgba(173, 182, 186, 0.42);
}
.stage_1 {
    margin-left: 2rem;
    margin-top: 1rem;
}
.stage_2 {
    margin-left: 5rem;
    margin-top: -10px !important;
}
.stage_3 {
    margin-left: 10rem;
    margin-top: -10px !important;
}
.stage_4 {
    margin-left: 15rem;
    margin-top: -20px !important;
}
.stage_last {
    margin-left: 17.6rem;
}
.sm_card_head {
    font-size: 33px !important;
}
.atm_card {
    position: relative;
    background-color: #af8055 !important;
    border: none !important;
    border-radius: 10px !important;
    width:auto;
    height: 445px;
    margin-top: 100px !important;
}
.atm_card_lap {
    /* position: absolute; */
    background-color: #236457 !important;
    height: 440px;
    width: 22rem;
    color: white !important;
}
.show_btn {
    background-color: #236457 !important;
    color: white !important;
    border-radius: 7px !important;
}
.block_side {
    background-color: #f1f1f1;
    height: 69px;
    margin-top: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 33rem;
    padding-top: 8px;
    padding-bottom: 28px !important;
    padding-left: 15px;
}
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 30px;
    margin: 0 5px;
    margin-right: 26px;
    margin-top: 11px !important;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #236457;
    transition: .4s;
    border-radius: 34px;
}
.switch input { display: none;}
.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 10px;
}
input:checked + .slider {
    background-color: #ccc;
}
input:checked + .slider:before {
    transform: translateX(20px);
}
.block_side2 {
    background-color: #f1f1f1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 33rem;
    padding-left: 15px;
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
    /* .switch {
        margin-right: 0px;
        display: block;
    } */
}
</style>
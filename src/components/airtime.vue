<template>
    <section class="body-section mb-5">
        <div class="container d-flex justify-content-center">
            <p class="airtime_header mt-4">Airtime</p>
        </div>
        <div class="container d-flex justify-content-center">
            <div class="card shadow mt-4 d-block">
                <div class="card-body">
                    <button class="btn text-left mt-3"><h5><i class="fa fa-clock-o me-3"></i>Most Recent</h5></button>
                </div>
                <div class="card-body network_card d-block">
                    <button class="btn network_btn"><h5>MTN</h5></button>
                    <p class="phone_number mt-1">0906784599</p>
                </div>
                <div class="card-body">
                    <div class="container">
                        <form action="">
                            <div class="mb-5">
                                <label for="formInputAccount" class="d-flex justify-content-between">
                                    <p>Amount</p>
                                    <p>Account Balance : $0.00</p>
                                </label>
                                <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                            </div>
                            <div class="mb-5">
                                <label for="formInputNetwork" class="d-flex justify-content-between">
                                    <p>Network</p>
                                </label>
                                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                            </div>
                            <div class="mb-4">
                                <label for="formInputPhone" class="d-flex justify-content-between">
                                    <p>Phone Number</p>   
                                </label>
                                <input type="tel" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                            </div>
                            <div class="container d-flex justify-content-center">
                                <button type="submit" class="btn form_submit mb-5"><h5>Send Airtime</h5></button>
                            </div>
                        </form>
                    </div>
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
.network_card {
    margin-top: -1rem !important;
}
.form_submit {
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
    position: absolute;
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
</style>
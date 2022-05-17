<template>
   
  <div class="py-2 bg">
    <div
      id="carouselExampleCaptions"
      class="carousel container slide py-4"
      data-bs-ride="carousel"
    >
      <div class="carousel-title text-center">
         <div class="row">
        <div class="col-md-12 col-12 text-center">
          <!-- caption -->
          <h2 class="fw-bold textGreen">Words from our Users</h2>
        </div>
      </div>
      </div>

      <div class="carousel-indicators ">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active bg-dark"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          class="bg-dark"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class="bg-dark"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          class="bg-dark"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="container">
          <div class="carousel-item active">
            <div class="py-8 py-lg-5">
              <div class="container">
                <div class="row">
                  <div class="col-12 mb-4 mb-lg-0">
                    <!-- Card -->
                    <div class="card p-2 p-md-2 shadow border-white">
                      <!-- Card body -->
                      <div class="card-body p-2 p-md-4">
                        <h5 class="card-title d-flex flex-row">
                            <div class="card-icon">
                               <span class="iconify" data-icon="emojione:star"></span>
                               <span class="iconify" data-icon="emojione:star"></span>
                               <span class="iconify" data-icon="emojione:star"></span>
                               <span class="iconify" data-icon="emojione:star"></span>
                               <!-- <span class="iconify" data-icon="el:star" style="color: #af8055;"></span>
                               <span class="iconify" data-icon="el:star" style="color: #af8055;"></span>
                               <span class="iconify" data-icon="el:star" style="color: #af8055;"></span> -->
                            </div>

                             <div class="card-Profile d-flex flex-row gap-3 ms-auto">
                                  <img src="@/assets/images/image1.jpeg" alt="" class="img-fluid shadow" style="width: 50px; height:50px; border-radius:50%">
                               <div class="card-Profile-details my-auto">
                                  <h6 class="fw-bold m-0">John Doe</h6>
                                  <p class="fs-6 text-muted m-0">Client</p>
                               </div>

                             </div>
                        </h5>
                        <div>
                          <p class="card-text fw-bold mt-2">
                            <span class="iconify fs-2" data-icon="ri:double-quotes-l" style="color: #af8055;"></span>
                            I have been using sapa bank for 1 year and believe
                            me its exactly what you need during your broke
                            period. The truth is that most of the times I am broke so Sapa bank is my bank.
                            <span class="iconify fs-2" data-icon="ri:double-quotes-r" style="color: #af8055;"></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="py-8 py-lg-5">
              <div class="container">
                <div class="row">
                  <div class="col-12 mb-4 mb-lg-0">
                    <!-- Card -->
                    <div class="card shadow border-white">
                      <!-- Card body -->
                      <div class="card-body p-2 p-md-4">
                        <div
                          class="
                            d-flex
                            flex-row
                            justify-content-evenly
                            gap-3
                            align-items-center
                          "
                        >
                          <p class="fw-bold mt-2">
                           Free transactions with absolutely no charge. Just amazing.
                           <span class="iconify" data-icon="emojione:star"></span>
                            <span class="iconify" data-icon="emojione:star"></span>
                            <span class="iconify" data-icon="emojione:star"></span>
                            <span class="iconify" data-icon="emojione:star"></span>
                          </p>
                          <button
                            class="
                              btn
                              btnSuccess
                              rounded-circle
                              fw-bold
                              text-center
                            "
                            style="width: 50px; height: 50px"
                          >
                            P
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="py-8 py-lg-5">
              <div class="container">
                <div class="row">
                  <div class="col-12 mb-4 mb-lg-0">
                    <!-- Card -->
                    <div class="card shadow border-white">
                      <!-- Card body -->
                      <div class="card-body p-2 p-md-4">
                        <div
                          class="
                            d-flex
                            flex-row
                            justify-content-evenly
                            gap-3
                            align-items-center
                          "
                        >
                          <p class="fw-bold mt-2">
                           I love that i can easily borrow and pay back at my convinience, SAPA  bank all the way.
                           <span class="iconify" data-icon="emojione:star"></span>
                            <span class="iconify" data-icon="emojione:star"></span>
                            <span class="iconify" data-icon="emojione:star"></span>
                            <span class="iconify" data-icon="emojione:star"></span>
                          </p>
                          <button
                            class="
                              btn
                              btnSuccess
                              rounded-circle
                              fw-bold
                              text-center
                            "
                            style="width: 50px; height: 50px"
                          >
                            T
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="py-8 py-lg-5">
              <div class="container">
                <div class="row">
                  <div class="col-12 mb-4 mb-lg-0">
                    <!-- Card -->
                    <div class="card shadow border-white">
                      <!-- Card body -->
                      <div class="card-body p-2 p-md-4">
                        <div
                          class="
                            d-flex
                            flex-row
                            justify-content-evenly
                            gap-3
                            align-items-center
                          "
                        >
                          <p class="fw-bold mt-2">
                           I love this bank, very easy to use,I highly recommend it.
                            <span class="iconify" data-icon="emojione:star"></span>
                            <span class="iconify" data-icon="emojione:star"></span>
                            <span class="iconify" data-icon="emojione:star"></span>
                          </p>
                          <button
                            class="
                              btn
                              btnSuccess
                              rounded-circle
                              fw-bold
                              text-center
                            "
                            style="width: 50px; height: 50px"
                          >
                            J
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  /* background-image: url(../assets/brand/Group-10.svg); */
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
</style>
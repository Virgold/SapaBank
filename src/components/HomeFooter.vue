<template>
  <div class="footer py-4">
    <div class="container">
      <div class="row pt-4">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="mb-2">
            <a class="navbar-brand fw-bold fs-3 textGreen" href="#"
              >S<span class="" style="color: #af8055">A</span>PA</a
            >
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-6">
          <div class="mb-2">
            <!-- list -->
            <h1 class="h6 fw-bold">Resources</h1>
            <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
              <li>
                <a href="#" class="text-decoration-none text-muted">Blog</a>
              </li>
              <li>
                <a href="#" class="text-decoration-none text-muted"
                  >Help and FAQs</a
                >
              </li>
              <li>
                <a href="#" class="text-decoration-none text-muted">Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-6">
          <div class="mb-2">
            <!-- list -->
            <h1 class="h6 fw-bold">Support</h1>
            <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
              <li>
                <a href="#" class="text-decoration-none text-muted">About</a>
              </li>
              <li>
                <a href="#" class="text-decoration-none text-muted">Our Team</a>
              </li>
              <li>
                <a href="#" class="text-decoration-none text-muted"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-6">
          <div class="mb-2">
            <!-- social media -->
            <h1 class="h6 fw-bold">Get in touch</h1>
            <a href="" class="text-decoration-none text-dark"
              ><span
                class="iconify fs-5 me-2 textGreen"
                data-icon="ci:location"
              ></span
              >264 Oron road Uyo</a
            >
            <div
              class="
                fs-5
                d-flex
                flex-row
                justify-content-between
                align-items-start
              "
            >
              <a href=""
                ><span
                  class="iconify textGreen"
                  data-icon="foundation:social-twitter"
                ></span
              ></a>
              <a href=""
                ><span
                  class="iconify textGreen"
                  data-icon="carbon:logo-facebook"
                ></span
              ></a>
              <a href=""
                ><span
                  class="iconify textGreen"
                  data-icon="dashicons:linkedin"
                ></span
              ></a>
              <a href=""
                ><span
                  class="iconify textGreen"
                  data-icon="ri:instagram-fill"
                ></span
              ></a>
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
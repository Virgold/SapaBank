<template>
  <nav class="navbar navbar-expand-lg  navbar-light bg-white mb-4">
      <div class="container">
        <a class="navbar-brand fw-bold fs-3 textGreen" href="#"
          >S<span class="" style="color: #af8055">A</span>PA</a
        >
        <button
          class="navbar-toggler px-2 py-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link fw-bold active" aria-current="page" href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">Services</a>
            </li>
          </ul>
          <form class="d-flex">
            <div class="ms-lg-4 mt-3 mt-lg-0">
              <router-link to="/dashboardLayout" class="btn btn-sm btnSuccess px-3 rounded shadow me-1">Login</router-link>
              <router-link to="/SignUpPage" class="btn btn-sm btnWarning px-3 rounded shadow">Sign Up</router-link>
            </div>
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
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
.nav-link:hover{
    font-weight: 500;
    font-size: 17px;
    color: #236457 !important ;
    /* text-decoration: underline; */
}
.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: none;
}
</style>
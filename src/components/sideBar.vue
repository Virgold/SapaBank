<template>
  <div class="side w-25">
      <ul>
          <li>
              <router-link to="/dashboardOverview/main">
              <div>
                  Home
              </div>
              </router-link>
          </li>
          <li>
              <div>
                  About
              </div>
          </li>
          <li>
              <div>
                  Next
              </div>
          </li>
          <li>
              <div>
                  Prev
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.side{ 
    background: blue;
    width: 30%;
    height: 100%;
    color: #fff;
}
</style>
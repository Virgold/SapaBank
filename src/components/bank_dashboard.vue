<template>
<div v-if="record">
  <DashboardModal @close="toggleModal" />
</div>

  <div class="container brown_top">
    <marquee behavior="alternate" direction="left"
      >Welcome To SAPA Bank</marquee
    >
  </div>
  <div
    class="
      container-fluid container
      balance_container
      d-flex
      justify-content-between
      text-white
      p-2
    "
  >
    <div class="align-self-center mt-5">
      <h5>Account Balance</h5>
      <h2><img src="@/assets/Vector.png" alt="" />0.00</h2>
    </div>
    <div class="align-self-center mt-5">
      <img src="@/assets/bank-account.png" alt="" class="bank_acct_icon" />
    </div>
  </div>
  <div class="container mt-3">
    <div class="row justify-content-between">
      <div class="col-md-3 text-center">
        <div>
          <img src="@/assets/bank-transfer.png" alt="" />
        </div>
        <div>
          <h6>Transfer</h6>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div>
          <img src="@/assets/bank-card.png" alt="" />
        </div>
        <div>
          <h6>Card</h6>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div>
          <img src="@/assets/credit-card.png" alt="" />
        </div>
        <div>
          <h6>Airtime</h6>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div>
          <img src="@/assets/plus.png" alt="" />
        </div>
        <div>
          <h6>Borrow</h6>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5 acct_info p-5 mb-3 align-items-center text-white">
    <div class="p-2">
      <h6>Account Name: John Doe</h6>
    </div>
    <div class="mx-2">
      <h6>
        Account Number: 2346785091<img
          src="@/assets/wallet.png"
          alt=""
          class="mx-2"
        />
      </h6>
    </div>
  </div>
  <div class="container mb-3">
    <div class="input-group shadow">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder="Search Transactions"
        />
      </div>
    </div>
  </div>
  <div class="container mt-5 mb-4">
    <p>Yesterday</p>
    <div
      class="
        row
        justify-content-between
        transaction_record
        p-2
        align-items-center
      "
    >
      <div class="d-flex">
        <div class="records-icon">
          <i class="fa fa-telegram mt-3 record_icon" aria-hidden="true"></i>
        </div>
        <div class="mx-4">
          <p>John Doe</p>
          <small>11:27 AM</small>
        </div>
      </div>
      <div>
        <p>
          +N5,000
          <i 
            class="fa fa-arrow-right mx-1"
            data-toggle="modal"
            data-target="#exampleModal"
            aria-hidden="true"
            @click="toggleModal"
          ></i>
        </p>
        <!-- Modal -->
        
      </div>
    </div>
  </div>
</template>

<script>
import DashboardModal from "../components/bankDashboardModal.vue"
export default {
  data() {
    return {
      record: false
    }
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { 
    DashboardModal
  },
  methods: {
    toggleModal () {
      this.record = ! this.record
    }
  }
};
</script>




<style scoped>
body {
  font-family: "Bree Serif", serif;
  background-color: white;
}
.navbar-brand {
  font-size: 2rem;
  color: black !important;
}
.user_icon {
  font-size: 20px;
}
.navbar-collapse {
  display: flex !important;
  justify-content: center !important;
}
.nav-link {
  font-weight: 500;
  font-size: 17px;
  color: black !important;
}
.nav_container {
  border-bottom: 2px solid #e5e5e5;
}
.brown_top {
  background: #af8055;
  height: 40px;
  margin-top: 6rem;
  border-radius: 10px 10px 0px 0px;
  width: 75%;
}
.balance_container {
  background: #236457;
  border-radius: 10px 10px 0px 0px;
}
.acct_info {
  background-color: #af8055;
  border-radius: 10px 10px 10px 10px;
}
.input-group {
  border-bottom: 2px solid #e5e5e5;
}
.form-control:focus {
  border: none !important;
  box-shadow: none !important;
}
.form-control {
  width: 100%;
  border: none !important;
}
.input-group-text {
  border: none !important;
  background-color: transparent;
}
.transaction_record {
  border: 1px solid #af8055;
}
.record_icon {
  font-size: 30px !important;
  color: #236457 !important;
}
.records-icon {
  background-color: white !important;
}
.brown_modal {
  background-color: #af8055;
}
.modal_record {
  border-bottom: 2px solid #af8055 !important;
}
</style>

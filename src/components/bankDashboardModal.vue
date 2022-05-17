<template>
 <div
          class="modal"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            
            <div class="modal-content">
              <div class="p-2 brown_modal">
                <div class="container-fluid">
                  <div class="d-flex">
                    <div class="records-modalicon">
                      <i
                        class="fa fa-telegram record_icon text-white my-4"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="mx-4">
                      <h5>John Doe</h5>
                      <p>Transfer</p>
                      <p>+5,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="container-fluid modal_record">
                  <div class="row justify-content-between">
                    <div>
                      <p>Paid On</p>
                      <p>May 2 at 11:27</p>
                    </div>
                    <div>
                      <p>Payment Method</p>
                      <p>Money Received</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="modal-footer">
                <div class="container-fluid">
                  <div class="row justify-content-center">
                    <button  
                      aria-label="Close"
                      type="button"
                      data-dismiss="modal"
                      @click="offModal"
                      class=" close alert btn downloadReceipt"
                    >
                      Download Receipt (Close)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
</template>

<script>
export default {
  data() {
    return {
      displayModal: false,
    };
  },
  methods: {
    offModal() {
      this.$emit("close");
    },
  },
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
.downloadReceipt{
  background-color: #236457 !important;
}
.modal{
  background: rgba(0,0,0, 0.5);
  display: block !important;
}
  
</style>

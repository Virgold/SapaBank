<template>
  <div class="Navbar">
      <div class="container">
                    <label class="Navbar-Logo">SAPA</label>
                    <div class="float-right">
                            <ul class="me-5">
                                <li class="Navbar-Item"><a href="#">Home</a></li>
                                <li class="Navbar-Item"><a href="#">Community</a></li>
                                <li class="Navbar-Item"><a href="#">Help</a></li>
                            </ul>
                <i class="fa-solid fa-user border border-2 border-dark rounded-circle"></i>
                    </div>
      </div>
  </div>
  <h3 class="text-center text-green mt-3 mb-4">Transfer</h3>
  <div class="d-flex justify-content-center mx-auto">
      <!-- =============================CARD============================= -->
        <div class="Card">
            <h5 class="text-green">Selection from benefeciaries</h5>
            <p class="text-muted text-small">free transfer to all banks</p>
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                   <div class="circle"><h3>F</h3>
                   </div>
                    <P class="text-small text-center">Father</P>
                </div>
                <div class="d-flex flex-column">
                   <div class="circle"><h3>M</h3>
                   </div>
                    <P class="text-small text-center">Mother</P>
                </div>
                <div class="d-flex flex-column">
                   <div class="circle"><h3>P</h3>
                   </div>
                    <P class="text-small text-center">Partner</P>
                </div>
                <div class="d-flex flex-column">
                   <div class="circle"><h3>S</h3>
                   </div>
                    <P class="text-small text-center">Sibling</P>
                </div>
                <div class="d-flex flex-column">
                   <div class="circle"><h3>BF</h3>
                   </div>
                    <P class="text-small text-center">Best friend</P>
                </div>
            </div>

           
            <label for="" class="mt-4">Amount</label>
            <div class="input-group mb-3">
                <span class="input-group-text bg-lightBrown" id="basic-addon1"><i class="fa-solid fa-naira-sign"></i></span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>

            <label for="" class="mt-4">Account Number</label>
            <div><input type="text" class="form-control"></div>

            <label for="" class="mt-4">Add a note</label>
            <div><input type="text" class="form-control" placeholder="what's it for"></div>

            <div class="d-flex justify-content-center">
                <button class="mt-3 mb-2 bg-green btn mx-auto text-white">Send money</button>
            </div>
        </div>
  </div>    

  
</template>

<script>
export default {

}
</script>

<style scoped>
.Navbar{
    height:72px;
    display:flex;
    align-items:center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.Navbar-Logo{
    font-size:3rem;
    /* line-height:87px; */
}

ul{
    list-style: none;
    display:inline;
}

li{
    display:inline-block;
    margin-right:10px;
}

.Card{
    width:500px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    margin-bottom: 3rem;
}

.circle{
    display:flex;
    justify-content:center;
    align-items: center;
    width:50px;
    height:50px;
    border-radius: 50%;
    background: #AF8055;
    color:white;
    
}

.text-green{
    color: #236457;
}

.bg-green{
    background: #236457;
}

.text-small{
    font-size:0.7rem;
}

.float-right{
    float:right;
    line-height: 4rem;
}

.bg-lightBrown{
    background: rgba(175, 128, 85, 0.48);
}
</style>
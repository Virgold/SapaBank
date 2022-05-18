<template>
<div class="container">
        <div class="d-flex justify-content-center">
            <h3>Sign Up</h3>
        </div>
        <div class="d-flex justify-content-center pt-3">
            <div class="card shadow sign_up_card">
                <form>
                    <div signup-header>
                        <h4>Name</h4>
                    </div>
                    <div class="row justify-content-between pt-3">
                        <div class="col-md-5">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstName">
                        </div>
                        <div class="col-md-5 signup-lastname">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName" aria-describedby="lastName">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 signup-email">
                            <label for="inputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="email">
                        </div>
                        <div class="col-md-12 signup-pwd">
                            <label for="pwd" class="form-label">Password</label>
                            <input type="text" class="form-control" id="pwd" aria-describedby="password">
                        </div>
                        <div class="signup-btn1">
                            <button class="btn signup-btn col-md-12 col-12">Sign Up</button>
                        </div>
                    </div>
                </form>
                <div class="d-flex login">    
                    <p>
                        You have an account?<span><router-link to="/bank_dashboard" >LOGIN</router-link></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    background-color: #ffffff;
    font-family: 'Bree Serif', serif;
}

.sign_up_card {
    width: 30rem;
    background-color: #236457;
    padding-right: 2.4rem;
    color: white;
    border-radius: 0.4rem;
}
form {
    padding-left: 2.4rem;
    padding-top: 2rem;

}
.signup-btn{
    background-color: #af8055;
    color: white;
    box-shadow: 0 4px 4px rgb(57, 56, 56);
}
.signup-email{
    padding-top: 2rem;
}
.signup-lastname{

}
.signup-pwd{
    padding-top: 2rem;
}
.signup-btn1{
    padding-top: 2rem;
}
.login{
    padding-top: 2rem;
    font-size: 1.2rem;
    padding-bottom: 2rem;
    justify-content: center;
}
h3{
    color: #236457;
}
span{
    margin-left: 0.7rem;
    border-bottom: 1px solid white;
}
a{
    text-decoration: none;
    color: white;
}

@media(max-width:425px){
.signup-lastname{
    padding-top: 2rem;
}
.signup-btn1{
    padding-top: 4rem;
}
.login{
    font-size: 1rem;
    justify-content: center;
}
}
</style>
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/signin.css';

export default function (props) {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-6 intro-section">
        </div>
        <div class="col-sm-6 col-md-6 form-section">
          <div class="login-wrapper">
            <h4 class="login-title titlelogin" ><u><b> Login </b></u></h4>
            <form action="#!">
              <div class="form-group mb-4">
                <input
                  type="email" name="email" id="email" class="form-control" placeholder="User Name" />

              </div>
              <div class="form-group mb-5">
                <input type="password" name="password" id="password" class="form-control" placeholder="Password" />
              </div>
              <div class="d-flex justify-content-between align-items-center mb-5">
                <a
                  class="btn login-btn" href="/homeUser" >Login</a>
                
              </div>
            </form>
            <p class="login-wrapper-footer-text"><a href="/signup" class="text-reset1" >Create Account</a> <a href="#!" class="text-reset" >Forgot Password</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
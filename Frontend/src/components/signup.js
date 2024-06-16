import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/signin.css';

export default function (props) {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-md-6 intro-section">
                </div>
                <div class="col-sm-6 col-md-6 form-section mt-5">
                    <div class="login-wrapper">
                        <h2 class="login-title tittlelogin"><u> Sign Up </u></h2>
                        <form action="#!">
                            <div class="input-group ">
                                <input
                                    type="text" name="first" id="first" class="form-control" placeholder="First Name" />
                                <input
                                    type="text" name="last" id="last" class="form-control" placeholder="Last Name" />

                            </div>

                            <div class="form-group ">
                                <input type="text" name="username" id="username" class="form-control" placeholder="Username" />
                            </div>

                            <div class="form-group ">
                                <input type="email" name="email" id="email" class="form-control" placeholder="Email" />
                            </div>

                            <div class="form-group ">
                                <input type="password" name="password" id="password" class="form-control" placeholder="Password" />
                            </div>

                            <div class="form-group mb-3">
                                <input type="password" name="password" id="password" class="form-control" placeholder="Confirm Password" />
                            </div>

                            <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    I agree to the terms and conditions as set out
                                    by the user agreement.
                                </label>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <input
                                    name="login" id="login" class="btn login-btn" type="button" value="Sign Up" />
                            </div>
                            <center><a href="/signin" class="textlog">Sudah Memiliki Akun?</a></center>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from "react";
import pic from "../../../assets/images/login.png";
import axios from "axios"
const Forgotpage = () => {
  const [email, setEmail] = useState("");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const handleForgotPassword = async (e) => {
    e.preventDefault();
      await axios.post(ROOT_URL+'/api/auth/forgotpassword', { email })
      .then(res => {
        console.log(res);
        swal("Email sent successfully!", " Please check your email to reset your password","success");
        // navigate('/course');

      })
      .catch(err => {
        console.log(err);
        swal("Opps!", "Incorrect email!", "error");

      })
    }
  return (
    <section>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-md-block image">
                  <img
                    src={pic}
                    alt="loginform"
                    className="img-fluid ms-5"
                    style={{ width: "80%" }}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-7 d-flex align-items-center"
                  id="loginform"
                >
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0 text-white">
                          
                        </span>
                      </div>

                      <span className="h3 fw-bold">Enter your account details below</span>

                      <div className="form-group mt-4">
                        <label
                         
                          htmlFor="exampleInputEmail1"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          onChange={(e) => setEmail(e.target.value)}
                          aria-describedby="emailHelp"
                          placeholder="Enter Your  email"
                        />
                        {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                      </div>

                      <div className="pt-1 mb-4 text-center">
                        <button
                          className=" btn-lg  w-50 verifybutton"
                          type="submit"
                          onClick={handleForgotPassword}
                        >
                          Submit
                        </button>
                      </div>
                      <div className="d-flex ">
                        <span className="mb-5 pb-lg-2 t text-center">
                          Remember password?{" "}
                          <a className="text-success" href="/login">
                            Sign in
                          </a>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgotpage;

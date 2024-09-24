import React, { useState } from 'react'
import pic from "../../../assets/images/login.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

import "./login.css"

const Login = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      swal("Opps!", "Please fill out all required fields!", "error");
    }
   
    else {
      
        //  alert("submit");
      axios.post(ROOT_URL+'/api/auth/login', { email, password })
        .then(res => {
          console.log(res);
          const {userId : userId} = res.data;
          swal("Yeah", "Login Successful!!", "success");
          sessionStorage.setItem('userid', userId);
            navigate('/userdashboard');
          // navigate('/course');

        })
        .catch(err => {
          console.log(err);
          swal("Opps!", "Email or password icorrect!", "error");

        })
    }
  }
  return (
   <>
    <section >
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col col-xl-10">
              <div className="card" >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-md-block image">
                    <img src={pic}
                      alt="loginform" className="img-fluid" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex" id="loginform">
                    <div className="card-body p-lg-5 text-black">

                      <form>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Login Page</span>
                        </div>

                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                        <div className="form-group  mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Email</label>
                          <input type="email" className="form-control " name='email' placeholder="Enter Your email ID" onChange={e => setemail(e.target.value)}  />
                          </div>
                        <div className="form-group mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Password</label>
                          <input type="text" className="form-control" id="password" name='password'  placeholder="Enter  Your Password" onChange={e =>setPassword(e.target.value)}/>
                        </div>

                        <div className="pt-1 mb-4 text-center">
                          <button className="btn-primary btn-lg w-50" onClick={handleSubmit} type="submit">Login</button>
                        </div>
                        <div className="row">
                        <div className='col-md-6'>
                          <a className='text-success text-decoration-none' href="/">Forgot password?</a>
                          </div>
                          <div className='col-md-6 text-end'>
                          <span className="mb-5 pb-lg-2 pb-sm-2 ">Do not have an account? <a className="text-success text-decoration-none" href="/signup"
                          >Signup</a></span>
                          </div>
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

   </>
  )
}

export default Login
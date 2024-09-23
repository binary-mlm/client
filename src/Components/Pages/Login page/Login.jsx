import React, { useState } from 'react'
import pic from "../../../assets/images/login.png"
import { useNavigate } from 'react-router-dom'

import "./login.css"

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserid] = useState();
  const [password, setPassword] = useState();
  const handlesubmit =() => {
    const userid="12345";
    const pass_word ="pass"
    if(userid===userId && pass_word===password){
      alert("login successful");
      navigate('/userdashboard')

    }else{
      alert("Invalid user id or password");
    }
    
    // alert("login successful");
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
                          <label className="" htmlFor="exampleInputEmail1">User ID</label>
                          <input type="email" className="form-control " name='email' placeholder="Enter Your User ID" onChange={e => setUserid(e.target.value)}  />
                          </div>
                        <div className="form-group mb-4">
                          <label className="" htmlFor="exampleInputEmail1">Password</label>
                          <input type="Password" className="form-control" id="password" name='password'  placeholder="Enter  Your Password" onChange={e =>setPassword(e.target.value)}/>
                        </div>

                        <div className="pt-1 mb-4 text-center">
                          <button className="btn-primary btn-lg w-50" onClick={handlesubmit} type="submit">Login</button>
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
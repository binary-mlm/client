import React, { useState, useEffect } from 'react'
import pic from "../../../assets/images/login.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
// import swal from 'sweetalert';
import Swal from 'sweetalert2';
import '@lottiefiles/lottie-player';


import "./login.css"

const Login = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  console.log(ROOT_URL);
  const navigate = useNavigate();
  const [sponsorId, setsponsorId] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    // Fetch the ID from sessionStorage on component mount
    const storedId = sessionStorage.getItem('mysponosorid');
    if (storedId) {
      setsponsorId(storedId); // Set the ID if found
    }
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (sponsorId === "" || password === "") {
      Swal.fire({
        title: 'Opps!',
        text: 'Please fill out all required fields!!!',
        icon: 'error',  // or 'error', 'warning', 'info', 'question'
      });
    }
   
    else {
      axios.post(ROOT_URL+'/api/auth/login', { sponsorId, password })
        .then(res => {
          console.log(res);
          const {userId : userId} = res.data;
          const {name : name} = res.data;
          const {mySponsorId : mySponsorId} = res.data;
          // swal("Yeah", "Login Successful!!", "success");
          Swal.fire({
            html: `
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_myejiggj.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px; margin: 0 auto;"
              autoplay>
            </lottie-player>
            <p style="font-size: 1.2rem; margin-top: 20px;">You have successfully logged in!</p>
          `,
            
            
            
            confirmButtonText: "Go to Dashboard",
            confirmButtonColor: "#6c63ff",
            iconColor: "#4caf50",
            background: "#f9f9f9",
          });  // or 'error', 'warning', 'info', 'question'
        
          sessionStorage.setItem('userid', userId);
          sessionStorage.setItem('username', name);
          sessionStorage.setItem('mySponsorId', mySponsorId);
          
            navigate('/userdashboard');
            
          // navigate('/course');

        })
        .catch(err => {
          console.log(err);
          Swal.fire({
            title: 'Opps!',
            text: 'Try again',
            icon: 'error',  // or 'error', 'warning', 'info', 'question'
          });
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
                      alt="loginform" className="img-fluid ms-5" style={{width:"80%"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex" id="loginform">
                    <div className="card-body p-lg-5 text-black">

                      <form>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Login Page</span>
                        </div>

                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                        <div className="form-group  mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Your sponsorId</label>
                          <input type="text" className="form-control " name='sponsorId'  value={sponsorId} placeholder="Enter Your sponsor ID" onChange={e => setsponsorId(e.target.value)}  />
                          </div>
                        <div className="form-group mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail2">Password</label>
                          <input type="text" className="form-control" id="password" name='password'  placeholder="Enter  Your Password" onChange={e =>setPassword(e.target.value)}/>
                        </div>

                        <div className="pt-1 mb-4 text-center">
                          <button className="btn-primary btn-lg w-50" style={{backgroundColor:"#095444"}} onClick={handleSubmit} type="submit">Login</button>
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
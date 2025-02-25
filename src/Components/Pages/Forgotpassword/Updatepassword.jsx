import React from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import pic from "../../../assets/images/resetpass.png";

const Updatepassword = ({ email, token }) => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleUpdatePassword = async (e) => {
        e.preventDefault();
    
       
    
        try {
          const response = await axios.post(ROOT_URL+'/api/auth/updatepassword', {
            email,password,
            confirm_password: confirmPassword
          });
          setMessage(response.data.message);
          swal("Password updated", "Please login again","success");
          navigate('/login');

        } catch (error) {
          setMessage(error.response.data.message);
          swal("Password not updated", error.response.data.message,"error");
        }
      };
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
                alt="loginform" className="img-fluid"  />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center" id="loginform">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h3 fw-bold mb-0">Utbhab Marketing Private Limited</span>
                  </div>
                
          <div className="form-group  mb-4">
    <label htmlFor="exampleInputEmail1">New Password</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  value={password}
          onChange={(e) => setPassword(e.target.value)}
          required placeholder="Enter a new password"/>
  </div>
  <div className="form-group  mb-4">
    <label  htmlFor="exampleInputEmail1">Confirm password</label>
    <input type="text" className="form-control" 
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    id="exampleInputEmail1" placeholder="Enter the password again"/>
  </div>
  {message && <p>{message}</p>}

                  <div className="pt-1 mb-4 text-center">
                    <button className=" btn-lg  w-50 verifybutton" type="submit"
                     onClick={handleUpdatePassword}
                    >
                     Submit</button>
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

export default Updatepassword
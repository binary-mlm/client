import React,{useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const Login = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [franchiseId, setfranchiseId] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (franchiseId === "" || password === "") {
      Swal.fire({
        title: 'Opps!',
        text: 'Please fill out all required fields!!!',
        icon: 'error',  // or 'error', 'warning', 'info', 'question'
      });
    }
   
    else {
      axios.post(ROOT_URL+'/api/franchise/login', { franchiseId, password })
        .then(res => {
          console.log(res);
          const {userId : userId} = res.data;
          const {name : name} = res.data;
          const {franchiseId :franchiseId} = res.data;
          // swal("Yeah", "Login Successful!!", "success");
          Swal.fire({
            title: 'Success!',
            text: 'Login Successful!!',
            icon: 'success',  // or 'error', 'warning', 'info', 'question'
          });
          sessionStorage.setItem('userid', userId);
          sessionStorage.setItem('username', name);
          sessionStorage.setItem('franchiseid', franchiseId);
             navigate('/franchise/dashboard');
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
      <div className=''>
        <MDBContainer fluid className='p-5 background-radial-gradient overflow-hidden'>
          <MDBRow>
            {/* Use a single MDBCol that takes the full width */}
            <MDBCol className='text-center text-md-start d-flex flex-column justify-content-center' md='12'>
              <h1 className="my-5 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)'}}>
                The best offer <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
              </h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='12' className='position-relative'>
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <MDBCard className='p-5 bg-glass '>
              <h3 className='text-center'>PUP Login Portal</h3>
                <MDBCardBody className='p-5'>
                
                  <label>PUP ID</label>
                  <MDBInput wrapperClass='mb-4' id='form3' type='email'  onChange={e => setfranchiseId(e.target.value)} />
                  <label>Password</label>
                  <MDBInput wrapperClass='mb-4' id='form4' type='password'  onChange={e => setPassword(e.target.value)} />
                  <button className='w-25 mb-4 signinbutton' onClick={handleSubmit} size='md'>Sign In</button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default Login;

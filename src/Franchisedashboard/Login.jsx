import React from 'react';
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

const Login = () => {
    const handlesubmit =()=>{
        alert('submit');
    }
  return (
    <>
      <div className=''>
        <MDBContainer fluid className='p-5 background-radial-gradient overflow-hidden'>
          <MDBRow>
            {/* Use a single MDBCol that takes the full width */}
            <MDBCol className='text-center text-md-start d-flex flex-column justify-content-center' md='12'>
              <h1 className="my-5 display-5 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
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
              <h3 className='text-center'>Franchise Login Portal</h3>
                <MDBCardBody className='p-5'>
                
                  <label>Email</label>
                  <MDBInput wrapperClass='mb-4' id='form3' type='email' />
                  <label>Password</label>
                  <MDBInput wrapperClass='mb-4' id='form4' type='password' />
                  <button className='w-25 mb-4 btn btn-primary' onClick={handlesubmit} size='md'>Sign In</button>
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

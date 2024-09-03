import React from 'react'
import pic from '../../../assets/images/signup.png'

const Signup = () => {
  return (
   <>
    <section >
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col col-xl-10">
              <div className="card" >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-md-block  image">
                    <img src={pic}
                      alt="loginform" className="img-fluid ms-5" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>

                        <div className="d-flex mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Signup Page</span>
                        </div>
                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}
                        <div className="form-group  mb-4">
                          <label className="" htmlFor="exampleInputEmail1">Sponsor User ID</label>
                          <input type="email" className="form-control form-control-lg" name='userid' placeholder="Enter Your User ID" />
                          </div>
                        <div className="form-group mb-4">
                          <label className="" htmlFor="exampleInputEmail1">Sponsor Name</label>
                          <input type="text" className="form-control form-control-lg" id="name" name='name'  placeholder="Enter Your Name " />
                        </div>
                        <div className="form-group mb-4">
                          <label className="" htmlFor="exampleInputEmail1">Sponsor city</label>
                          <input type="text" className="form-control form-control-lg" id="city" name='city'  placeholder="Enter Your City " />
                        </div>

                        <div className="pt-1 mb-4 text-center">
                          <button className="btn-primary  w-50" type="submit">Signup</button>
                        </div>
                        <div className="row">
                        <div className='col-md-6'>
                          </div>
                          <div className='col-md-6 text-end'>
                          <span className="mb-5 pb-lg-2 pb-sm-2"> have an account? <a className="text-success text-decoration-none" href="/login"
                          >Login</a></span>
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

export default Signup
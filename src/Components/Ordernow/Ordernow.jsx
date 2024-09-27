import React from 'react'
import pic from '../../assets/images/order.jpg'
import banner from "../../assets/images/banners/orderbanner.jpg"
import { useNavigate } from 'react-router-dom'
const Ordernow = () => {
    const navigate = useNavigate();
    const handlesubmit =() => {
        navigate("/productlist")
    }
    
  return (
    <>
        <section >
        <img src={banner}/>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col col-xl-10">
              <div className="card" >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-md-block">
                    <img src={pic}
                      alt="loginform" className="img-fluid ms-5 mt-5" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>

                        <div className="d-flex mb-1 pb-1">
                          <span className="h4 fw-bold mb-0 ">Place Online Order Now</span>
                        </div>
                        <div className="form-group mb-4">

                          <label className="mb-1 mt-3" htmlFor="exampleInputEmail1" style={{fontSize:"15px"}}>Sponsor sponsorId</label>
                          <div className='d-flex'>
                          <input type="text" className="form-control w-75" id="id" name='id'  placeholder="Enter sponsor id"  />
                          <button className='btn btn-primary ms-4' onClick={handlesubmit}>Verify</button>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Sponsor Name</label>
                          <input type="text" className="form-control " id="name" name='name'  placeholder="Enter Your Name"   />
                        </div>
                        
                        <div className="form-group  mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Sponsor city</label>
                          <input type="text" className="form-control" name='city' placeholder="Enter Password"  />
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

export default Ordernow
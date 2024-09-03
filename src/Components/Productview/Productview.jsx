import React from 'react';
import pic1 from "../../assets/images/products/p1.jpg";


const Productview = () => {
  return (
  <>
    <div className='my-4'>
        <div className='container my-4'>
        <div className='row'>
          <div className='col-4'>
            <img className='img-fluid' src= {pic1} alt='noimage'/>
          </div>
          <div className='col-8'>
          <div className='container'>
          <div>
            <h4>
              Product name
            </h4>
          </div>

          </div>

          </div>
        </div>
        
        
        </div>
        
    </div>
  </>
    
  )
}

export default Productview
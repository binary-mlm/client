import React from 'react'
import banner from '../../assets/images/banners/brand.jpg'
import banner5 from '../../assets/images/banners/banner5.png'

const Brand = () => {
  return (
    <>
    <img src={banner} className="img-fluid" alt='noimg'/>
    <div className='container py-5'>
     <div className="row">
   <div className="col-md-2 col-sm-3 col-xs-6">
   <div className="brand">
   <a>
    <img className='img-fluid' src={banner5}/>
   </a>
   </div>
   </div>
   <div className='col-md-2 col-sm-3 col-xs-6'>
  <div className='brand'>
  <a>
  <img className='img-fluid' src={banner5}/>
  </a>
  </div>
  </div>
  <div className='col-md-2 col-sm-3 col-xs-6'>
  <div className='brand'>
  <a>
  <img className='img-fluid' src={banner5}/>
  </a>
  </div>
  </div>
  <div className='col-md-2 col-sm-3 col-xs-6'>
  <div className='brand'>
  <a>
  <img className='img-fluid' src={banner5}/>
  </a>
  </div>
  </div>
   </div>
   </div>
   </>
  )
}

export default Brand
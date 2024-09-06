import React from 'react'
import banner from '../../../assets/images/banners/banner1.jpg'
import Category from "../Productpage/Category"
const Product = () => {
  const productInfo = [
    {
      product_name: "Neem Aloevera Shampoo",
      product_mrp: 990,
      Product_Category: "Personalcare",
        }

  ]
 



  
  return (
 <>
 <div className='container'>
<img src={banner} alt='noimg'/>
   </div>
   
   <div className="row">
   <div className="col-lg-3">
    <Category/>
   </div>
   </div>

    
 
 </>
  )
}

export default Product
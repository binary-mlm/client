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

<img src={banner} alt='noimg'/>
   <div className="row">
   <div className="col-lg-3 " >
    <Category/>
   </div>
   <div className='col-lg-7'>
   <h5>hiiiii</h5>
   </div>
   </div>

    
 
 </>
  )
}
export default Product
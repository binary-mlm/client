import React from 'react'
import Featureproduct from "./Featureproduct";
import product1 from "../../assets/images/banners/home-banner1.jpg"; 
import product2 from "../../assets/images/banners/home-banner2.jpg"; 
import product3 from "../../assets/images/banners/home-banner5.jpg"; 
import product4 from "../../assets/images/banners/home-banner3.jpg";
import product5 from "../../assets/images/banners/home-banner4.jpg";

const Productfeature = () => {
    const products = [
        { id: 1,  image: [product1],  },
        { id: 2,  image: [product2] },
        { id: 3,  image: [product3] },
        { id: 4, image: [product4] },
        { id: 5,  image: [product5] },
      ];
  return (
    <div>
    {/* <h4 className='p-3 fw-bold'>New Products</h4> */}
    <Featureproduct products={products} />
  </div>
  )
}

export default Productfeature;
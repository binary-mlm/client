import React from 'react'
import ProductCarousel from "./ProductCarousel";
import './newproduct.css'

import product1 from "../../assets/images/products/p1.jpg"; 
import product1_hover from "../../assets/images/products/p1_hover.jpg"; 
import product2 from "../../assets/images/products/p2_hover.jpg"; 
import product3 from "../../assets/images/products/p3_hover.jpg"; 
import product4 from "../../assets/images/products/p4_hover.jpg";
import product5 from "../../assets/images/products/p5_hover.jpg";
const products = [
  { id: 1, name: 'Product 1', price: '$100', image: [product1], hoverimage:[product1_hover] },
  { id: 2, name: 'Product 2', price: '$200', image: [product2] },
  { id: 3, name: 'Product 3', price: '$300', image: [product3] },
  { id: 4, name: 'Product 4', price: '$400', image: [product4] },
  { id: 5, name: 'Product 5', price: '$500', image: [product5] },
];
const Newproduct = () => {
  return (
    <div className='newproduct'>
    
      <h4 className='p-3 fw-bold'>New Products</h4>
      <hr/>
      <ProductCarousel products={products} />
    </div>
  )
}

export default Newproduct
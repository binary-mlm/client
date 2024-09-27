import React, { useState, useEffect } from 'react'
import ProductCarousel from "./ProductCarousel";
import './newproduct.css'
import axios from 'axios';

import product1 from "../../assets/images/products/p1.jpg"; 
import product1_hover from "../../assets/images/products/p1_hover.jpg"; 
import product2 from "../../assets/images/products/p2_hover.jpg"; 
import product3 from "../../assets/images/products/p3_hover.jpg"; 
import product4 from "../../assets/images/products/p4_hover.jpg";
import product5 from "../../assets/images/products/p5_hover.jpg";
// const products = [
//   { id: 1, name: 'Product 1', price: '$100', image: [product1], hoverimage:[product1_hover] },
//   { id: 2, name: 'Product 2', price: '$200', image: [product2] },
//   { id: 3, name: 'Product 3', price: '$300', image: [product3] },
//   { id: 4, name: 'Product 4', price: '$400', image: [product4] },
//   { id: 5, name: 'Product 5', price: '$500', image: [product5] },
// ];
const Newproduct = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if(!products.length){
    const fetchProducts = async () => {
      try {
        const response = await  axios.get(ROOT_URL+'/api/user/viewProducts') // Replace with your actual API endpoint
        setProducts(response.data.products);
        console.log(response.data.products); // For debugging purposes, you can log the received data to see its structure 
       
      } catch (error) {
       console.log(error);
      }
    
    };

    fetchProducts();
  }
  }, []);

  return (
    <div className='newproduct'>
    
      <h4 className='p-3 fw-bold'>New Products</h4>
      
      <ProductCarousel products={products} />
    </div>
  )
}

export default Newproduct
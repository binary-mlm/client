import React, { useState, useEffect } from 'react'
import ProductCarousel from "./ProductCarousel";
import './newproduct.css'
import axios from 'axios';


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
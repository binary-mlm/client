import React, { useState, useEffect } from 'react'
import ProductCarousel from "./ProductCarousel";
import './newproduct.css'
import axios from 'axios';
import product1 from "../../assets/images/products/tulsi.jpg";
import product2 from "../../assets/images/products/imunity.jpg";
import product3 from "../../assets/images/products/shampoo.jpg";
import product4 from "../../assets/images/products/herbaltea.jpg";
import product5 from "../../assets/images/products/facewash.jpg";
import product6 from "../../assets/images/products/aloverasoap.jpg";
import product7 from "../../assets/images/products/preniumshop.jpg";
const products = [
  { id: 1, name: 'Udbhab Panch Tulsi', price: '500', image: [product1] },
  { id: 2, name: 'Udbhab Immunity Booster', price: '400', image: [product2] },
  { id: 3, name: 'Udbhab Premium Shampoo', price: '300', image: [product3] },
  { id: 4, name: 'Udbhab Herbal Tea', price: '400', image: [product4] },
  { id: 5, name: 'Udbhab premium facewash', price: '200', image: [product5] },
  { id: 6, name: 'Udbhab Aloe Green Apple Soap', price: '500', image: [product6] },
  { id: 7, name: 'Udbhab premium Soap', price: '500', image: [product7] },
];
const Newproduct = () => {
  // const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   if(!products.length){
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await  axios.get(ROOT_URL+'/api/user/viewProducts') // Replace with your actual API endpoint
  //       setProducts(response.data.products);
  //       console.log(response.data.products); // For debugging purposes, you can log the received data to see its structure 
       
  //     } catch (error) {
  //      console.log(error);
  //     }
    
  //   };

  //   fetchProducts();
  // }
  // }, []);

  return (
    <div className='newproduct'>
    
      <h4 className='p-3 fw-bold'>New Products</h4>
      
      <ProductCarousel products={products} />
    </div>
  )
}

export default Newproduct
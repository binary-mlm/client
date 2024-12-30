import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import "./allproduct.css";
import { useLocation , useNavigate } from 'react-router-dom';

const Allproducts = () => {
   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [selectedCategory, setSelectedCategory] = useState(''); 
    const location = useLocation(); 
  const navigate = useNavigate(); 
    const fetchProducts = async (category) => {
        try {
            setLoading(true);
            const url = category
                ? `${ROOT_URL}/api/auth/product/categoryproduct/${category.replace(/%20/g, ' ')}` // Fetch products for a specific category
                : `${ROOT_URL}/api/user/viewProducts`; // Fetch all products
            const response = await axios.get(url);
            setProducts(response.data.products);
            console.log(products);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    // Fetch products on initial load or when selectedCategory changes
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const category = queryParams.get('category') || selectedCategory; // Use query parameter or fallback to selectedCategory
      fetchProducts(category);
    }, [selectedCategory, location.search]);


    const handleCategoryChange = (category) => {
      if (category === '') {
          // Clear the query parameter for "All Exclusive Products"
          navigate('/allproduct');
      } else {
          // Update the URL with the selected category
          navigate(`/allproduct?category=${encodeURIComponent(category)}`);
      }
      setSelectedCategory(category);
  };

    const renderproducts = () => {
        return products.map((product) => (
        <div className='col-md-4 col-sm-2' key={product._id}>
         
        <a href={`/productview/${product._id}`}>
                <div className="product p-3">
                        <div className="product-image">
                          <div className="image"> 
                          
                             <img src={product.imageURL} className='img-fluid' style={{width:"100%", height:"90%"}}  alt=""/> 
                            
                          
                          </div>   
                          <div className="tag new blink2 " style={{backgroundColor: "yellow"}}><span  className="fw-bold " style={{color:"#095444"}}>new</span></div>
                        </div>
                       <div className="product-info mt-3">
                          <h3 className="name text-center" ><a href="/" className='text-decoration-none '>{product.name}</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price text-center"> <span className="price h4">₹{product.mrp_price}</span> </div>
                        </div>
                       
                        
                      </div>
                      </a>
                      </div>
        ))  
    }
  return (
    <>
         <div className="container">
         <div className="row mt-5"> 
         <div className="col-xs-12 col-sm-12 col-md-3 category" style={{backgroundColor:"transparent"}}>
         <div className="side-menu animate-dropdown outer-bottom-xs">
          <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
          <nav className="yamm megamenu-horizontal bg-white">
            <ul className="nav">
           
              <li className="item p-3" > <i className="icon fa fa-square me-3" aria-hidden="true"></i><span onClick={() =>  handleCategoryChange('')}>All Execlusive Products</span>
                
               </li>
               
              <li></li>
           
              <li className=" menu-item p-3"><i className="icon fa fa-hand-o-right me-3" aria-hidden="true"></i><span onClick={() => handleCategoryChange('personal care')}>Personal Care</span>
              
                </li>
              <li className=" menu-item p-3"> <a href="#" className=" text-decoration-none text-dark"><i className="icon fa fa-heart me-3" aria-hidden="true"></i>Beauty Care</a>
              <span className="blink inline-badge ms-3" >Coming soon!</span>
           
              </li>
             
              
              <li className="dropdown menu-item p-3 " onClick={() => handleCategoryChange('Health care')}> <i className="icon fa fa-heartbeat me-3"></i>Health Care
             
                </li>
          
              
              <li className="dropdown menu-item p-3"> <a href="#" className=" text-decoration-none text-dark" data-bs-toggle="dropdown"><i className="icon fa fa-home me-3"></i>Home Care</a>
              <span className="blink inline-badge ms-3" >Coming soon!</span>
              </li>
            
              
              <li className="dropdown menu-item p-3"> <a href="#" className=" text-decoration-none text-dark" data-bs-toggle="dropdown"><i className="icon fa fa-shopping-cart me-3"></i>Grocery</a>
              <span className="blink inline-badge ms-3" >Coming soon!</span>
                </li>
            </ul>
          </nav>
        </div>
         </div>
         <div className="col-xs-12 col-sm-12 col-md-9"> 
         <div className='container'>
            <div className='row'>
            {loading ? (
                                    <p>Loading products...</p>
                                ) : (
                                    renderproducts()
                                )}

            </div>
         </div>
        
         </div>
         </div>
         </div>
    </>
  )
}

export default Allproducts
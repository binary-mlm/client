import React ,{useState , useEffect}from "react";

import logo from "../../assets/images/udbhab.png";
import "../../assets/css/main.css";
import "../../assets/css/blue.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/rateit.css";
import "../../assets/css/bootstrap-select.min.css";
import "./mainheader.css";
import axios from 'axios';
const Mainheader = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);


  const handleInputfieldChange = (e) => {
    setQuery(e.target.value);
};
const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
useEffect(() => {
  const fetchproduct = async () => {

  if (query.length > 0) {
      document.getElementById('inputresult').style.display = 'block';
          axios.get( ROOT_URL+`/api/auth/searchproduct?q=${query}`)
          .then((response) => {
              if(response.data.products.length === 0){
                setProducts(['No_product_found']);      
              }  else{
                setProducts(response.data.products);
              console.log(response.data);
              }
              
            })
            .catch((error) => {
              console.log(error);
           })
          }
          

          else {
              document.getElementById('inputresult').style.display = 'none';
              setProducts([]);
              
          }
      }
      const debounceFetch = setTimeout(fetchproduct, 300);
          return () => clearTimeout(debounceFetch);
          }, [query]);

  return (
    <>
      <div className="main-header mt-1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
              <div className="logo1 ">
                <a href="/">
                  {" "}
                  <img
                    className="logoimg"
                    src={logo}
                    alt="logo"
                    style={{ width: "60%" }}
                  />{" "}
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 top-search-holder">
              <div className="search-area">
                <div className="control-group">
                  {/* <ul className="categories-filter animate-dropdown">
                  <li clclassNameass="dropdown"> <a class="dropdown-toggle text-decoration-none"  data-bs-toggle="dropdown" href="/">Categories <b class="caret"></b></a>
                    <ul className="dropdown-menu" role="menu" >
                      <li className="menu-header">Computer</li>
                      <li role="presentation"><a  className='text-decoration-none' role="menuitem" tabIndex="-1" href="/">- Clothing</a></li>
                      <li role="presentation"><a className='text-decoration-none' role="menuitem" tabIndex="-1" href="/">- Electronics</a></li>
                      <li role="presentation"><a className='text-decoration-none' role="menuitem" tabIndex="-1" href="/">- Shoes</a></li>
                      <li role="presentation"><a className='text-decoration-none' role="menuitem" tabIndex="-1" href="/">- Watches</a></li>
                    </ul>
                  </li>
                </ul> */}

                  <input
                    className="search-field"
                    placeholder="Search here..."
                    value={query}
                    onChange={handleInputfieldChange}
                  />
                  </div>
                  
                
              </div>
              <ul className=" list-unstyled bg-white mt-2" id='inputresult' style={{borderRadius:"5px"}}>
                {products.map(product => ( 
                    <a className="text-dark" href={`/productview/${product._id}`}><li  className="p-2" key={product._id}>{product === "No_product_found" ? 'No product found': product.name}</li></a>
                ))
               
                }
            </ul>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-4 col-xs-12 text-end">
              <div className="d-flex justify-content-end">
                <a
                  target="_blank"
                  href="https://youtube.com/@udbhab_marketing?si=XTjFU-SXcWmiSYoi"
                >
                  <i
                    className="fa fa-youtube mt-3 social_icon"
                    style={{ color: "red" }}
                  ></i>
                </a>
                {/* <i className="fa fa-twitter mt-3 ms-4 social_icon" style={{ color:" #1da1f2"}}></i> */}
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61566887730981&mibextid=ZbWKwL"
                >
                  <i
                    className="fa fa-facebook mt-3 ms-4 social_icon"
                    style={{ color: "#405DE6" }}
                  ></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/udbhabmarketing"
                >
                  {" "}
                  <i
                    className="fa fa-instagram mt-3 ms-4 social_icon"
                    style={{ color: "#833AB4" }}
                  ></i>
                </a>
              </div>
            </div>

            {/* <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row"> 
          <div className="dropdown dropdown-cart"> <div className=" lnk-cart">
            <div className="items-cart-inner">
              <div className="basket">
              <div className="basket-item-count"><span className="count">2</span></div>
              <div className="total-price-basket"> <span className="lbl">Shopping Cart</span> <span className="value">4580/-</span> </div>
              </div>
            </div>
            </div>
            
            
         </div>    
    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Mainheader;

import React from 'react'

 import logo from "../../assets/images/udbhab.png"
import "../../assets/css/main.css";
import "../../assets/css/blue.css";
import "../../assets/css/animate.min.css";
import  "../../assets/css/rateit.css";
import "../../assets/css/bootstrap-select.min.css";
import "./mainheader.css"
const Mainheader = () => {
  return (
  <>
    <div className="main-header mt-1">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-3 logo-holder"> 
         <div className="logo1 "> 
        <a href='/'> <img className='logoimg' src={logo} alt="logo" style={{width:"60%"}}/> </a>
          
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
               
                <input className="search-field" placeholder="Search here..."  />
                
                </div>
            
          </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-4 col-xs-12 text-end">
          <div className='d-flex justify-content-end'>
          <a target='_blank' href='https://youtube.com/@udbhab_marketing?si=XTjFU-SXcWmiSYoi'><i className="fa fa-youtube mt-3 social_icon" style={{ color:"red"}}></i></a>
            {/* <i className="fa fa-twitter mt-3 ms-4 social_icon" style={{ color:" #1da1f2"}}></i> */}
            <a target='_blank' href='https://www.facebook.com/profile.php?id=61566887730981&mibextid=ZbWKwL'><i className="fa fa-facebook mt-3 ms-4 social_icon" style={{color:"#405DE6"}}></i></a>
            <a target='_blank' href='https://www.instagram.com/udbhabmarketing'> <i className="fa fa-instagram mt-3 ms-4 social_icon" style={{color:"#833AB4"}}></i></a>
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
  )
}
export default Mainheader
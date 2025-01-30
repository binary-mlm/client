import React from 'react'
import "../assets/css/main.css";
import  personalcare from "../assets/icons/cream.png";
import beautycare from "../assets/icons/skin-care.png";
import healthcare from "../assets/icons/healthcare.png";
import home from "../assets/icons/home.png";
import grocery from "../assets/icons/grocery-cart.png";


const Category = () => {
  return (
    <>
        <div className="side-menu animate-dropdown outer-bottom-xs">
          <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
          <nav className="yamm megamenu-horizontal bg-white">
            <ul className="nav">
              <li className="item p-3"><img src={personalcare} width={25}/> <a href="/allproduct?category=Personal Care" className="text-decoration-none"> Personal Care</a>
                {/* <ul className="dropdown-menu mega-menu">
                  <li className="yamm-content">
                    <div className="row">
                      <div className="col-sm-12 col-md-3">

                        <ul className="links list-unstyled">
                          <li><a href="/">Dresses</a></li>
                          <li><a href="#">Shoes </a></li>
                          <li><a href="#">Jackets</a></li>
                          <li><a href="#">Sunglasses</a></li>
                          <li><a href="#">Sport Wear</a></li>
                     
                        </ul>
                      </div>
                     
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Handbags</a></li>
                          <li><a href="#">Jwellery</a></li>
                          <li><a href="#">Swimwear </a></li>
                          <li><a href="#">Tops</a></li>
                          <li><a href="#">Flats</a></li>
                        
                        </ul>
                      </div>
                    
                      
                 
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Sandals </a></li>
                          <li><a href="#">Shorts</a></li>
                          <li><a href="#">Dresses</a></li>
                          <li><a href="#">Jwellery</a></li>
                          <li><a href="#">Bags</a></li>
                         
                        </ul>
                      </div>
                   
                    </div> 
                  </li>
                 
                </ul> */}
               </li>
              
               
              
              <li className=" menu-item p-3"><img src={beautycare} width={25}/> <a href="#" className=" text-decoration-none"> Beauty Care</a>
              <span className="blink inline-badge" >Coming soon!</span>
           
              </li>
             
              
              <li className=" menu-item p-3"> <img src={healthcare} width={25}/><a href="/allproduct?category= Health Care" className=" text-decoration-none"> Health Care</a>
             
                </li>
           
              <li className="dropdown menu-item p-3"><img src={home} width={25} /> <a href="#" className=" text-decoration-none">Home Care</a>
              <span className="blink inline-badge" >Coming soon!</span>
              </li>
             <li className="dropdown menu-item p-3"> <img src={grocery} width={23}/><a href="#" className=" text-decoration-none" > Grocery</a>
              <span className="blink inline-badge" >Coming soon!</span>
                </li>
             
              
              {/* <li className="dropdown menu-item p-3"> <a href="#" className=" text-decoration-none" data-toggle="dropdown"><i className="icon fa fa-paper-plane"></i>Kids and Babies</a> 
               </li> */}
             
      
            </ul>
         
          </nav>
        </div>
    </>
  )
}

export default Category
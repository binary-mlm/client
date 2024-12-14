import React from 'react'
import "../assets/css/main.css";

const Category = () => {
  return (
    <>
        <div className="side-menu animate-dropdown outer-bottom-xs">
          <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
          <nav className="yamm megamenu-horizontal">
            <ul className="nav">
              <li className="item p-3"> <a href="#" className="text-decoration-none"><i className="icon fa fa-hand-o-right" aria-hidden="true"></i>Personal Care</a>
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
              
               
              
              <li className=" menu-item p-3"> <a href="#" className=" text-decoration-none"><i className="icon fa fa-heart" aria-hidden="true"></i>Beauty Care</a>
              <span className="blink inline-badge" >Coming soon!</span>
           
              </li>
             
              
              <li className="dropdown menu-item p-3"> <a href="#" className=" text-decoration-none" data-bs-toggle="dropdown"><i className="icon fa fa-heartbeat"></i>Health Care</a>
             
                </li>
          
              
              <li className="dropdown menu-item p-3"> <a href="#" className=" text-decoration-none" data-bs-toggle="dropdown"><i className="icon fa fa-home"></i>Home Care</a>
              <span className="blink inline-badge" >Coming soon!</span>
              </li>
            
              
              <li className="dropdown menu-item p-3"> <a href="#" className=" text-decoration-none" data-bs-toggle="dropdown"><i className="icon fa fa-shopping-cart"></i>Grosary</a>
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
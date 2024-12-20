import React from 'react';
// import pic1 from "../../assets/images/payments/1.png";
import pic2 from "../../assets/images/phonepe.png";
import pic3 from "../../assets/images/bhim.png";
import pic4 from "../../assets/images/payments/4.png";
import pic5 from "../../assets/images/rupay.png";
import pic6 from "../../assets/images/googlepay.png"
import "./footer.css"
const Footer = () => {
  return (
    <footer id="footer" className="footer color-bg">
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="address-block">
          
          
            
            <div className="module-body">
              <ul className="toggle-footer" >
                <li className="media">
                  <div className="pull-left"> <span className="icon fa-stack fa-sm"> <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i> </span> </div>
                  <div className="media-body" style={{marginLeft:"15%"}}>
                    <p>Reg. office: Indira nagar Sodepur, North 24 Parganas. Kol-700110</p>
                  </div>
                </li>
                <li className="media">
                  <div className="pull-left"> <span className="icon fa-stack fa-sm"> <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i> </span> </div>
                  <div className="media-body" style={{marginLeft:"15%"}}>
                    <p>Corporate office: Shakshi Appartment, Ground floor , Road no: 6, HB Town, Sodepur, Kol-700110</p>
                  </div>
                </li>
                <li className="media">
                  <div className="pull-left"> <span className="icon fa-stack fa-sm"> <i className="fa fa-mobile fa-stack-1x fa-inverse"></i> </span> </div>
                  <div className="media-body"  style={{marginLeft:"15%"}}>
                    <p> + (91)033-3591-8727</p><p>  +(91)7980964516 </p>
                  </div>
                </li>
                <li className="media">
                  <div className="pull-left"> <span className="icon fa-stack fa-sm"> <i className="fa fa-envelope fa-stack-1x fa-inverse"></i> </span> </div>
                  <div className="media-body"  style={{marginLeft:"15%"}}> <span><a href="#" style={{marginTop:"-6px"}}>support@myudbhab.in</a></span> </div>
                </li>
              </ul>
            </div>
            </div>
            
          </div>
        
          
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="module-heading">
              <h4 className="module-title text-white">Customer Service</h4>
            </div>
             
            <div className="module-body">
              <ul className='list-unstyled'>
                <li className="first"><a href="/login" title="Contact us">My Account</a></li>
                <li><a href="/login" title="About us">Order History</a></li>
                <li><a href="/login" title="faq">FAQ</a></li>
             
              </ul>
            </div>
           
          </div>
         
          
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="module-heading">
              <h4 className="module-title text-white">Corporation</h4>
            </div>
           
            
            <div className="module-body">
              <ul className='list-unstyled'>
                <li className="first"><a title="Your Account" href="/about">About us</a></li>
                <li><a title="Information" href="/contactus">Customer Service</a></li>
                <li><a title="Addresses" href="/managment">Company</a></li>
                
              </ul>
            </div>
           
          </div>
          
          
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="module-heading">
              <h4 className="module-title text-white">Why Choose Us</h4>
            </div>
           
            
            <div className="module-body">
              <ul className='list-unstyled'>
                <li className="first"><a href="#" title="About us">Execlusive product</a></li>
                {/* <li><a href="#" title="Blog">Blog</a></li> */}
                {/* <li><a href="#" title="Company">Company</a></li>
                <li><a href="#" title="Investor Relations">Investor Relations</a></li> */}
                <li className="last"><a href="/contactus" title="Suppliers">Contact Us</a></li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-bar">
  <div className="container">
    <div className="row">
      
      {/* Payment Methods - First on mobile */}
      <div className="col-xs-12 col-sm-4 no-padding order-xs-1 order-sm-3">
        <div className="clearfix payment-methods">
          <ul className="d-flex justify-content-end">
            <li className='methods'><img src={pic4} alt="payment"/></li>
            <li className='methods'><img src={pic6} width={40} alt="payment"/></li>
            <li className='methods'><img src={pic2} alt="payment"/></li>
            <li className='methods'><img src={pic3} width={40} alt="payment"/></li>
            <li className='methods'><img src={pic5} alt="payment"/></li>
          </ul>
        </div>
      </div>

      {/* Social Icons - Second on mobile */}
      <div className="col-xs-12 col-sm-4 no-padding social order-xs-2 order-sm-1">
        <ul className="link d-flex">
          <li><a target='_blank' href='https://youtube.com/@udbhab_marketing?si=XTjFU-SXcWmiSYoi'><i className="fa fa-youtube mt-1 me-2 icon_social" style={{ fontSize: "32px", color: "red" }}></i></a></li>
          {/* <li><i className="fa fa-twitter mt-1 me-2 icon_social" style={{ fontSize: "32px", color: "white" }}></i></li> */}
          <li><a target='_blank' href='https://www.facebook.com/profile.php?id=61566887730981&mibextid=ZbWKwL'><i className="fa fa-facebook mt-1 me-2 icon_social" style={{ fontSize: "32px", color: "aqua" }}></i></a></li>
          <li><a target='_blank' href='https://www.instagram.com/udbhabmarketing'><i className="fa fa-instagram mt-1 icon_social" style={{ fontSize: "32px", color: "pink" }}></i></a></li>
        </ul>
      </div>

      {/* Copyright Text - Third on mobile */}
      <div className="col-xs-12 col-sm-4 no-padding  order-xs-3 order-sm-2 mt-5">
        <a className='copyright' >Copyright © Udbhab Marketing Pvt Ltd 2024</a>
      </div>

    </div>
  </div>
</div>

  </footer>
  )
}

export default Footer
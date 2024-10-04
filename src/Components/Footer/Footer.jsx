import React from 'react';
import pic1 from "../../assets/images/payments/1.png";
import pic2 from "../../assets/images/payments/2.png";
import pic3 from "../../assets/images/payments/3.png";
import pic4 from "../../assets/images/payments/4.png";
import pic5 from "../../assets/images/payments/5.png";

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
                    <p>Indrira nagar Sodepur, North 24 Parganas. Kol-700110</p>
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
                  <div className="media-body"  style={{marginLeft:"15%"}}> <span><a href="#">support@myudbhab.in</a></span> </div>
                </li>
              </ul>
            </div>
            </div>
            
          </div>
        
          
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="module-heading">
              <h4 className="module-title">Customer Service</h4>
            </div>
             
            <div className="module-body">
              <ul className='list-unstyled'>
                <li className="first"><a href="#" title="Contact us">My Account</a></li>
                <li><a href="#" title="About us">Order History</a></li>
                <li><a href="#" title="faq">FAQ</a></li>
             
              </ul>
            </div>
           
          </div>
         
          
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="module-heading">
              <h4 className="module-title">Corporation</h4>
            </div>
           
            
            <div className="module-body">
              <ul className='list-unstyled'>
                <li className="first"><a title="Your Account" href="#">About us</a></li>
                <li><a title="Information" href="#">Customer Service</a></li>
                <li><a title="Addresses" href="#">Company</a></li>
                
              </ul>
            </div>
           
          </div>
          
          
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="module-heading">
              <h4 className="module-title">Why Choose Us</h4>
            </div>
           
            
            <div className="module-body">
              <ul className='list-unstyled'>
                <li className="first"><a href="#" title="About us">Execlusive product</a></li>
                <li><a href="#" title="Blog">Blog</a></li>
                {/* <li><a href="#" title="Company">Company</a></li>
                <li><a href="#" title="Investor Relations">Investor Relations</a></li> */}
                <li className=" last"><a href="contact-us.html" title="Suppliers">Contact Us</a></li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-bar">
      <div className="container">
      <div className='row'>
        <div className="col-xs-12 col-sm-4 no-padding social">
          <ul className="link">
            <li className="fb pull-left"><a target="_blank" rel="nofollow" href="#" title="Facebook"></a></li>
            <li className="tw pull-left"><a target="_blank" rel="nofollow" href="#" title="Twitter"></a></li>
            {/* <li className="googleplus pull-left"><a target="_blank" rel="nofollow" href="#" title="GooglePlus"></a></li>
            <li className="rss pull-left"><a target="_blank" rel="nofollow" href="#" title="RSS"></a></li>
            <li className="pintrest pull-left"><a target="_blank" rel="nofollow" href="#" title="PInterest"></a></li> */}
            {/* <li className="linkedin pull-left"><a target="_blank" rel="nofollow" href="#" title="Linkedin"></a></li> */}
            <li className="youtube pull-left"><a target="_blank" rel="nofollow" href="#" title="Youtube"></a></li>
            {/* <li className="youtube pull-left" ><i className="fa fa-instagram"></i></li> */}
          </ul>
        </div>
        <div className="col-xs-12 col-sm-5 no-padding copyright"><a>Copyright © Utbhab 2024.Powered by Synthosphere Technologies Private Limited</a> </div>
        <div className="col-xs-12 col-sm-3 no-padding">
          <div className="clearfix payment-methods">
            <ul>
              <li><img src={pic4} alt=""/></li>
              <li><img src={pic1} alt=""/></li>
              <li><img src={pic2} alt=""/></li>
              {/* <li><img src={pic3} alt=""/></li> */}
              
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
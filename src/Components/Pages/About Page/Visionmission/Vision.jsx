import React from 'react'
import vision from "../../../../assets/images/banners/visionmission.jpg"
import visionimg from "../../../../assets/images/visi.jpeg";
import misionimg from "../../../../assets/images/mission.jpg"
import "./vision.css"
const Vision = () => {
  return (
    <>
    <img src={vision} style={{width:"100%"}}/>
<div className='container my-4'>
<div className="row">
            <div className="col-md-12 mt-4 text-center">
              <div className="alert alert_info">
                <p className="text_style px-5">
                <blockquote className='blockquote'>“The fortunes of the new millennium will be created in the Wellness Industry“
                <footer className="blockquote-footer mt-2">From Utbhab team</footer>
                </blockquote>
                 
                </p>
              </div>
            </div>
          </div>

<div className='row'>
<div className='col-lg-4'>
  <div>
    <img src={visionimg} style={{width:"100%"}} />
  </div>
</div>
<div className='col-lg-8 visiontitle'>
<div>Our vision is to offer a wide range of world-class products to our esteemed customers at an affordable price and offer a legitimate entrepreneurship opportunity to awaken the giant within them and help them explore life to the fullest.

Utbhab believes in the ideology that one needs to compete with one's own self rather than with others. Let’s remember that the world we are living in is extravagantly abundant but on a long-term basis it rewards only those who follow the laws of the nature with a honest vision and ethical action. The road to success is always under construction. It has no short-cuts.

At Utbhab, we follow every statutory compliance, offer value-for-money products and services to our patrons to become India’s credible informed consumer-driven organization. We are built with strong values and hence we offer a legitimate platform for you to explore your inner potential and excel. By getting associated with Utbhab, you are sure to embark on a definite path of personal empowerment towards designing a better life for you and your near and dear ones.</div>
</div>
  
</div>
<div className='row mt-4'>
<div className='col-lg-8 '>
  <div className='visiontitle'>
  Our vision is to offer a wide range of world-class products to our esteemed customers at an affordable price and offer a legitimate entrepreneurship opportunity to awaken the giant within them and help them explore life to the fullest.

Utbhab believes in the ideology that one needs to compete with one's own self rather than with others. Let’s remember that the world we are living in is extravagantly abundant but on a long-term basis it rewards only those who follow the laws of the nature with a honest vision and ethical action. The road to success is always under construction. It has no short-cuts.

At Utbhab, we follow every statutory compliance, offer value-for-money products and services to our patrons to become India’s credible informed consumer-driven organization. We are built with strong values and hence we offer a legitimate platform for you to explore your inner potential and excel. By getting associated with Utbhab, you are sure to embark on a definite path of personal empowerment towards designing a better life for you and your near and dear ones.
  </div>
</div>
<div className='col-lg-4'>
<div><img src={misionimg} style={{width:"100%"}} /></div>

</div>
  
</div>


</div>
    </>
    
   
  )
}

export default Vision
import React from 'react'

const Contactus = () => {
  return (
    <div className="body-content my-4">
	<div className="container">
    <div className="contact-page">
		<div className="row">
        {/* <div className="col-md-12 contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.943231030585!2d88.39068467476064!3d22.693157128542072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65cb2733ae66dbb9%3A0x2fce9f618eb489f9!2sSynthosphere%20Technologies!5e0!3m2!1sen!2sin!4v1724493113989!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}}  referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div> */}
  <div className="col-md-8 contact">
	<div className="col-md-12 contact-title">
    <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-lg-9">
      <h1 className="mb-3 text-center">Contact Us</h1>
      <form>
        <div className="row g-3">
          <div className="col-md-12">
            <label for="your-name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="your-name" name="your-name" required/>
          </div>
          
          <div className="col-md-6">
            <label for="your-email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="your-email" name="your-email" required/>
          </div>
          <div className="col-md-6">
            <label for="your-subject" className="form-label">Your Subject</label>
            <input type="text" className="form-control" id="your-subject" name="your-subject"/>
          </div>
          <div className="col-12">
            <label for="your-message" className="form-label">Your Message</label>
            <textarea className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <button data-res="<?php echo $sum; ?>" type="submit" className="btn btn-dark w-100 fw-bold" >Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  </div>
</div>	
	
</div>  
        </div>
        
        <div className="col-md-4 contact-info">
	<div className="contact-title text-center mt-5">
  <h1 className="mb-3 text-center">Information</h1>
	</div>
	<div className="clearfix address">
		<span className="contact-i"><i class="fa fa-map-marker"></i></span>
		<span className="contact-span">Indira nagar Sodepur, North 24 Parganas. Kol-700110</span>
	</div>
	<div className="clearfix phone-no">
		<span className="contact-i"><i class="fa fa-mobile"></i></span>
		<span className="contact-span">+(91)7980964516</span>
	</div>
	<div className="clearfix email">
		<span className="contact-i"><i className="fa fa-envelope"></i></span>
		<span className="contact-span"><a  className="text-decoration-none" href="/">support@myudbhab.in</a></span>
	</div>
  <div>
  {/* <div className='container mt-4 text-center'>
  <ul>
            <li className="fb pull-left"><i class="fa fa-facebook-square text-primary" style={{fontSize:"24px"}}></i></li>
            <li className="tw pull-left"><a target="_blank" rel="nofollow" href="#" title="Twitter"></a></li>
            <li className="googleplus pull-left"><a target="_blank" rel="nofollow" href="#" title="GooglePlus"></a></li>
            <li className="rss pull-left"><a target="_blank" rel="nofollow" href="#" title="RSS"></a></li>
            </ul>
            </div> */}
            </div>
 
        </div>
        </div>
       
        
        </div>
        </div>
        </div>
  )
}

export default Contactus
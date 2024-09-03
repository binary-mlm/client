import React from 'react'
import pic1 from "../../assets/images/banners/home-banner.jpg";
import pic2 from "../../assets/images/banners/home-banner4.jpg";

const Wide2 = () => {
  return (
    <div className="wide-banners outer-bottom-xs">
    <div className="row">
      <div className="col-md-8">
        <div className="wide-banner1 cnt-strip">
          <div className="image"> <img className="img-responsive w-100" src={pic1} alt=""/> </div>
          <div className="strip strip-text">
            <div className="strip-inner">
              <h2 className="text-right">Amazing Sunglasses<br/>
                <span className="shopping-needs">Get 40% off on selected items</span></h2>
            </div>
          </div>
          <div className="new-label">
            <div className="text">NEW</div>
          </div>
        
        </div>
        
      </div>
    
      <div className="col-md-4">
        <div className="wide-banner cnt-strip">
          <div className="image"> <img className="img-responsive w-100"  src={pic2} alt=""/> </div>
          
          
         
        </div>
       
      </div>
      
    </div>
   
  </div>
 
  )
}

export default Wide2
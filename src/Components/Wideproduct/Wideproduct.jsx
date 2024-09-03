import React from 'react'
import banner1 from "../../assets/images/banners/home-banner1.jpg";
import banner2 from "../../assets/images/banners/home-banner2.jpg";
import banner3 from "../../assets/images/banners/home-banner3.jpg";

const Wideproduct = () => {
  return (
    <div className="wide-banners outer-bottom-xs">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive w-100"  src={banner1} alt=""/> </div>
              </div> 
            </div>
            
            <div className="col-lg-4 col-md-3 col-sm-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive w-100" src={banner2} alt=""/> </div>
              </div>
             
            </div>
            
           
            <div className=" col-lg-4 col-md-3 col-sm-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive w-100" src={banner3} alt=""/> </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Wideproduct;
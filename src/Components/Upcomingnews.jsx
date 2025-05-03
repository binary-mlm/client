import React from 'react'
import add1 from "../assets/images/add2.jpg"
// import add2 from "../assets/images/tourmondar.jpg";
import breaking from "../assets/images/breakingnews.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import rank1 from "../assets/images/Achivement/rank_1.jpg";
import rank2 from "../assets/images/Achivement/rank2.jpg";
import rank3 from "../assets/images/Achivement/rank3.jpg";
import rank5 from "../assets/images/Achivement/rank5.jpg";
import rank6 from "../assets/images/Achivement/rank6.jpg";
import rank7 from "../assets/images/Achivement/rank7.jpg";
// import rank4 from "../assets/images/Achivement/rank4.jpg";
const Upcomingnews = () => {
  const images = [
    // [rank1],
    [rank2],
    [rank3],
    [rank5],
    [rank6],
    [rank7]
    // [rank4],
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
        <div className="side-menu animate-dropdown outer-bottom-xs">
          <div className="head">Upcoming News/Events</div>
          <div className='text-center my-3 fw-bold h3' style={{color:"#064336"}}>Rank Achivers</div>
          <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img}  className="w-100 h-auto" />
          </div>
        ))}
      </Slider>
          <div className='d-flex flex-column'>
          <div className='text-center mt-2'><img  className="img-fluid blink2" src={breaking} style={{width:"80%"}}/></div>
        <div className='mt-2'>
        {/* <img className='mb-3' src={add2} style={{width:"100%"}}/> */}
        
          <img src={add1} style={{width:"100%"}}/>
         
          </div>
          </div>
        </div>


       
    </>
  )
}

export default Upcomingnews
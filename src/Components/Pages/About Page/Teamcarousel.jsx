import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.css"
const Teamcarousel = ({ users }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Number of cards to show at once
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
<div className="product-carousel mb-5">
      <Slider {...settings}>
        {users.map((user) => (
          <>
          <div className="item ">
                <div className='container p-3 ms-2'>
                <div className='p-5 bg-white'>
              <div className="avatar" ><img src={user.image} className='rounded-full mx-auto' alt="Image"/></div>
              <div className="testimonials text-lg font-medium"><em>"</em>{user.comment}<em>"</em></div>
              <div className="clients_author">{user.name} <span>{user.role}</span> </div>
              </div>
            </div>
            </div>  
          </>
        ))}
      </Slider>
    </div>
  )
}

export default Teamcarousel
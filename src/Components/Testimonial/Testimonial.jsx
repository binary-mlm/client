import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonial = ({users}) => {
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
    <>
        <div className="product-carousel mb-5">
      <Slider {...settings}>
        {users.map((user) => (
          <>
           
          <div className="item ">
                <div className='container newproduct p-3 ms-2'>
              <div className="avatar" ><img src={user.image} className='rounded-full mx-auto' alt="Image"/></div>
              <div className="testimonials text-lg font-medium"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
              <div className="clients_author">{user.name} <span>Xperia Designs</span> </div>
            </div>
            </div> 
              </>
        ))}
        </Slider>
        </div>
 
    </>
  )
}

export default Testimonial
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Featureproduct = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 3,
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
        {products.map((product) => (

          <>
          <img src={product.image} width="90%" style={{borderRadius:"5px"}} alt="noimage" />
            
          </>
        ))}
      </Slider>
    </div>
  );
};
export default Featureproduct;

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import product1 from "../../assets/images/products/p1.jpg"; 
const ProductCarousel = ({ products }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 3, // Number of cards to show at once
       slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
        slidesToScroll: 2

            },
          },
        ],
      };
    
      return (
        <div className="product-carousel mb-5">
          <Slider {...settings}>
            {products.map((products) => (
                <>
                
                <a href={`/productview/${products._id}`}>
                <div className="product p-3">
                        <div className="product-image">
                          <div className="image"> 
                          
                             <img src={products.imageURL} className='img-fluid' style={{width:"100%", height:"90%"}}  alt=""/> 
                              {/* <img src={product.hoverimage} alt="" class="hover-image"/> */}
                          
                          </div>   
                          <div className="tag new blink2 " style={{backgroundColor: "yellow"}}><span  className="fw-bold " style={{color:"#095444"}}>new</span></div>
                        </div>
                       <div className="product-info mt-3">
                          <h3 className="name text-center" ><a href="/" className='text-decoration-none '>{products.name}</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price text-center"> <span className="price h4">₹{products.mrp_price}</span> </div>
                        </div>
                       
                        {/* <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className=" btn-group">
                                <button className="btn btn-primary" data-toggle="dropdown" type="button"> Quick view </button>
                               
                              </li>
                            
                            </ul>
                          </div>   
                        </div>   */}
                      </div>
                      </a>
              </>
            ))}
          </Slider>
        </div>
      );
}

export default ProductCarousel;
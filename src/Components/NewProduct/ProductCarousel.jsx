import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ProductCarousel = ({ products }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Number of cards to show at once
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
            {products.map((product) => (
                <>
                <div className="product p-3">
                        <div className="product-image">
                          <div className="image"> 
                          <a href="/productview">
                             <img src={product.image} width="20%" alt=""/> 
                              {/* <img src={product.hoverimage} alt="" class="hover-image"/> */}
                          </a> 
                          </div>   
                          <div className="tag new"><span>new</span></div>
                        </div>
                       <div className="product-info mt-3">
                          <h3 className="name text-center" ><a href="/" className='text-decoration-none '>Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price text-center"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                        </div>
                       
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                {/* <button class="btn btn-primary cart-btn" type="button">Add to cart</button> */}
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="/" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                            </ul>
                          </div>   
                        </div>  
                      </div>
              </>
            ))}
          </Slider>
        </div>
      );
}

export default ProductCarousel;
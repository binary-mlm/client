import React from 'react'
import product1 from "../../assets/images/products/p5.jpg"
import product2 from "../../assets/images/products/p9.jpg"
import product3 from "../../assets/images/products/p7.jpg"

const Specialdeal = () => {
  return (
    <>
        <div class="sidebar-widget outer-bottom-small">
        <h3 class="section-title">Special Deal</h3>
        <div class="sidebar-widget-body outer-top-xs">
          <div class="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
            <div class="item">
              <div class="products special-product">
                <div class="product">
                  <div class="product-micro">
                    <div class="row product-micro-row">
                      <div class="col col-xs-5">
                        <div class="product-image">
                          <div class="image">
                    
                            <a href="#">
                              <img
                                src={product1}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col col-xs-7">
                        <div class="product-info">
                          <h3 class="name">
                            <a href="#">Floral Print Shirt</a>
                          </h3>
                          <div class="rating rateit-small"></div>
                          <div class="product-price">
                            {" "}
                            <span class="price"> $450.99 </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product">
                  <div class="product-micro">
                    <div class="row product-micro-row">
                      <div class="col col-xs-5">
                        <div class="product-image">
                          <div class="image">
                            <a href="#">
                              <img
                                src={product2}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col col-xs-7">
                        <div class="product-info">
                          <h3 class="name">
                            <a href="#">Floral Print Shirt</a>
                          </h3>
                          <div class="rating rateit-small"></div>
                          <div class="product-price">
                            {" "}
                            <span class="price"> $450.99 </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product">
                  <div class="product-micro">
                    <div class="row product-micro-row">
                      <div class="col col-xs-5">
                        <div class="product-image">
                          <div class="image">
                            <a href="#">
                              <img
                                src={product3}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col col-xs-7">
                        <div class="product-info">
                          <h3 class="name">
                            <a href="#">Floral Print Shirt</a>
                          </h3>
                          <div class="rating rateit-small"></div>
                          <div class="product-price">
                            {" "}
                            <span class="price"> $450.99 </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Specialdeal
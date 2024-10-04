import React from 'react'
import "./banner.css"


const  Banner = () => {
  return (
    <>
        <div id="carousel" className="carousel slide hero-slides" data-ride="carousel">
        <div class="carousel-indicators">
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    {/* <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
  </div>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active boat">
      <div className="container h-100 d-none d-md-block">
        <div className="row align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="caption animated fadeIn ms-5">
              <h6 className="animated fadeInLeft text-muted">Top Brands</h6>
              <h2 className="animated fadeInRight fw-bold">Women Collections</h2>
              <a className="animated fadeInUp  delicious-btn mt-3" href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item sea">
      <div className="container h-100 d-none d-md-block">
        <div className="row align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="caption animated fadeIn ms-5">
            <h6 className="animated fadeInLeft text-muted">Top Brands</h6>
              <h2 className="animated fadeInRight fw-bold">Women Collections</h2>
              <a className="animated fadeInUp btn delicious-btn mt-3" href="#">Shop now</a>
              {/* <h2 className="animated fadeInLeft">Discover the canyon by the sea</h2>
              <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
              <a className="animated fadeInUp btn delicious-btn" href="#">Learn more</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
export default Banner;
import React from 'react'

const Topmenu = () => {
  return (
    <div className="top-bar animate-dropdown">
    <div className="container">
      <div className="header-top-inner">
        <div className="cnt-account">
          <ul className="list-unstyled">
            <li className="myaccount"><a className='text-decoration-none' href="#"><span>My Account</span></a></li>
            <li className="wishlist"><a className='text-decoration-none' href="#"><span>Wishlist</span></a></li>
            <li className="header_cart hidden-xs"><a  className ="text-decoration-none"href="#"><span>My Cart</span></a></li>
            <li className="check"><a className='text-decoration-none' href="#"><span>Checkout</span></a></li>
            <li className ="login"><a className='text-decoration-none' href="#"><span>Login</span></a></li>
          </ul>
        </div>
   
        <div className="cnt-block">
          <ul className="list-unstyled list-inline">
            <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle text-decoration-none"  data-bs-toggle="dropdown"><span className="value">USD </span><b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="#">USD</a></li>
                <li><a href="#">INR</a></li>
                <li><a href="#">GBP</a></li>
              </ul>
            </li>
            <li className="dropdown dropdown-small lang"> <a href="#" className="dropdown-toggle text-decoration-none"  data-bs-toggle="dropdown"><span className="value">English </span><b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="#">English</a></li>
                <li><a href="#">French</a></li>
                <li><a href="#">German</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    
    </div>
   
  </div>
  )
}

export default Topmenu
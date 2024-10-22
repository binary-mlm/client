import React from 'react'
import "../../../public/Franchise/css/style.css";

import logo1 from "/Franchise/images/logo.png"
import user from "/Franchise/images/faces/face1.jpg"
const Nav = () => {
  const username = sessionStorage.getItem("username")
  return (
    <>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div className="text-center navbar-brand-wrapper d-flex align-items-center">
    <a className="navbar-brand brand-logo"><img src={logo1} alt="logo" /></a>
    <a className="navbar-brand brand-logo-mini"><img src={logo1}  alt="logo" /></a>

  </div>
 
  
  <div className="navbar-menu-wrapper d-flex align-items">
 
    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span className="mdi mdi-menu"></span>
    </button>
    
    <ul className="navbar-nav navbar-nav-right">
      <li className="nav-item nav-profile dropdown">
        <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="nav-profile-img">
            <img src={user} alt="image"/>
            <span className="availability-status online"></span>
          </div>
          <div className="nav-profile-text">
            <p className="mb-1 text-black">{username}</p>
          </div>

        </a>
        <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
         
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/franchise/login">
            <i className="mdi mdi-logout me-2 text-primary"></i> Signout </a>
        </div>
      </li>
    </ul>
    
  </div>
</nav>
    </>
  )
}

export default Nav
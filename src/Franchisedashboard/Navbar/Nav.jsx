import React from 'react'


import logo1 from "/Franchise/images/logo.png"
import user from "/Franchise/images/faces/user.jpg"
const Nav = () => {
  const handleLogout =(e) =>{
    e.preventDefault();
    sessionStorage.removeItem('franchiseid');
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('contactno');
    localStorage.removeItem('token');
    sessionStorage.removeItem('username');
    window.location.assign("/franchise/login")
  }
  const username = sessionStorage.getItem("username")
  return (
    <>
    
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div className="text-center navbar-brand-wrapper d-flex align-items-center">
    <a className="navbar-brand brand-logo"><img src={logo1} alt="logo" /></a>
    <a className="navbar-brand brand-logo-mini"><img src={logo1} width={200}  alt="logo" /></a>
   
  </div>
  
  <div className="navbar-menu-wrapper d-flex align-items">
    <ul className="navbar-nav navbar-nav-right">
      <li className="nav-item nav-profile dropdown">
        <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="nav-profile-img">
            <img src={user} alt="image"/>
            <span className="availability-status online"></span>
          </div>
          <div className="nav-profile-text">
            <p className="mb-1 text-black mt-1">{username}</p>
          </div>

        </a>
        <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
         
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" onClick={handleLogout} >
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
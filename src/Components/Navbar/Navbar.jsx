import React from 'react'
// import "../assets/css/main.css";
import "./navbar.css"

const Navbar = () => {
  return (
   <>
   
  <nav className="navbar navbar-expand-lg navbarmenu">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item item_nav">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item item_nav">
          <a className="nav-link" href="/about">About</a>
        </li>
        
        <li className="nav-item item_nav">
          <a className="nav-link" href="#">Compensation Plan</a>
        </li>
       
        <li className="nav-item dropdown item_nav ms-3">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           All Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li className='subitem'><a className="dropdown-item" href="/product">Personal care</a></li>
            <li className='subitem'><a className="dropdown-item " href="/product">Home care</a></li>
            <li className='subitem'><a className="dropdown-item " href="/product">Animal care</a></li>
          </ul>
        </li>
        <li className="nav-item item_nav">
          <a className="nav-link" href="/signup">Join us</a>
        </li>
        <li className="nav-item item_nav">
          <a className="nav-link" href="/contactus">Contact us</a>
        </li>
        <li className="nav-item item_nav">
          <a className="nav-link" href="/login">Login</a>
        </li>
        {/* <li className="nav-item dropdown item">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
      <div className="navbar-text item" style={{color:"yellow"}} >
        Navbar text with an inline element
      </div>
    </div>
  </div>
</nav>
     
   </>
  )
}

export default Navbar
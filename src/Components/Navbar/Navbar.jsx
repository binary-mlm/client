import React from 'react'
// import "../assets/css/main.css";
import "./navbar.css"

const Navbar = () => {
  return (
   <>
   
  <nav className="navbar navbar-expand-lg navbarmenu mt-2">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{color:'white'}}>☰</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item item_nav">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown item_nav ms-3">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           About Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li className='subitem'><a className="dropdown-item" href="/about">Introduction of Utbhab marketing</a></li>
            <li className='subitem'><a className="dropdown-item " href="/vision">Our vision & mission</a></li>
            <li className='subitem'><a className="dropdown-item " href="/managment">Management & team</a></li>
            <li className='subitem'><a className="dropdown-item " href="/legaldocument">Legal documents</a></li>
            <li className='subitem'><a className="dropdown-item " href="/award">Awards and rewards</a></li>
          </ul>
        </li>
        {/* <li className="nav-item item_nav">
          <a className="nav-link" href="/about">About</a>
        </li> */}
        
        {/* <li className="nav-item item_nav">
          <a className="nav-link" href="/manufacturing">Manufacturing</a>
        </li> */}
       
        {/* <li className="nav-item item_nav">
          <a className="nav-link" href="#">Women</a>
        </li> */}
        {/* <li className="nav-item item_nav">
          <a className="nav-link" href="/brand">Brands</a>
        </li> */}
        <li className="nav-item item_nav">
          <a className="nav-link" href="/education">Education</a>
        </li>
        <li className="nav-item item_nav">
          <a className="nav-link" href="/success_story">Industy & success story</a>
        </li>
        <li className="nav-item item_nav">
          <a className="nav-link" href="/News">News & events</a>
        </li>
        {/* <li className="nav-item dropdown item_nav ms-4">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Social media
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li className='subitem'><a className="dropdown-item" href="/">Facebook</a></li>
            <li className='subitem'><a className="dropdown-item " href="/">Instagram</a></li>
            <li className='subitem'><a className="dropdown-item " href="/">Youtube</a></li>
            <li className='subitem'><a className="dropdown-item " href="/">Twitter</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item item_nav">
          <a className="nav-link" href="/logistic">Logistic Partner</a>
        </li> */}
       
        <li className="nav-item item_nav">
          <a className="nav-link" href="/download">Download</a>
        </li>
        <li className="nav-item item_nav">
          <a className="nav-link" href="/contactus">Contact us</a>
        </li>
        <li className="nav-item item_nav">
          <a className="nav-link" href="/signup">Join us</a>
        </li>
        <li className="nav-item item_nav">
          <a className="nav-link" href="/login">Login</a>
        </li>
         <li className="nav-item item_nav">
          {/* <a className="nav-link" target='_blank' href="/">PUP login</a> */}
          <a className="nav-link" target='_blank' href="/franchise/login">PUP login</a>
          
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
     
    </div>
  </div>
</nav>
     
   </>
  )
}

export default Navbar
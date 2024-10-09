import React from 'react'
import user from '../../assets/images/trainer.png'
import { Link } from 'react-router-dom'
import "./usernavbar.css"

const UserNavbar = () => {
  const user_name = sessionStorage.getItem('username')
  return (
    <>
 <header className="header" style={{backgroundColor:"#710977",padding:"3%"}}>
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo">
          <img src={user}  alt="Logo" width={35} className="logo-img" />
          <span className='ms-2 username'>{user_name}</span>
        </div>

        {/* Username Section */}
        <div className="name">
        <span className=' h3 text-center fw-bold text-white'>Welcome To User  Dashboard</span>
        </div>

        {/* Logout Button */}
        <div className="logout">
        <Link to="/"><button className='logout btn btn-success w-25 p-2'>Logout</button></Link>
        </div>
      </div>
    </header>
  
        {/* <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#710977"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={user} width={35}/></a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className=" active text-white" aria-current="page">Srijani Banerjee</a>
        
      </div>
    </div>
    <span className="navbar-text">
        <Link to="/"><button className='btn btn-success'>Logout</button></Link>
      </span>
  
  </div>
</nav> */}
    </>
  )
}

export default UserNavbar
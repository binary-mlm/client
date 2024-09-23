import React from 'react'
import user from '../../assets/images/trainer.png'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={user} width={35}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page">Srijani Banerjee</a>
        {/* <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
    <span class="navbar-text">
        <Link to="/"><button className='btn btn-primary'>Logout</button></Link>
      </span>
  </div>
</nav>
    </>
  )
}

export default UserNavbar
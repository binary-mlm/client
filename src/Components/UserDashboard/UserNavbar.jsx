import React, {useState,useEffect} from 'react'
import user from '../../assets/images/trainer.png'
import { Link } from 'react-router-dom'
import "./usernavbar.css"
import axios from "axios";

const UserNavbar = () => {
  const [name , setName] = useState([]);
  const [sponosorid , setsponsorId] = useState([]);
  const userId = sessionStorage.getItem("userid");
  const [userdata, setUserdata] = useState([]);
  // const [data, setdata] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    UserData();
  }, []);
  const UserData = async () => {
    try {
      const response = await axios.get(ROOT_URL + `/api/auth/findUser/${userId}`)
      console.log(response.data);
      setName(response.data.name);
      setsponsorId(response.data.mySponsorId);
    } catch (err) {
      console.log(err);
    }
  };
  const handlelogout = () => {
   
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("mySponsorId");
    window.location.href = "/";
  }

  return (
    <>
 <header className="header" style={{backgroundColor:"#710977",padding:"3%"}}>
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo">
          <img src={user}  alt="Logo" style={{width:"10%" , height:"10%"}} className="logo-img" />
          <span className='ms-2 username'>{name}</span>
        </div>

        {/* Username Section */}
        <div className="name">
        <span className='h3 text-center fw-bold text-white'>Welcome To User  Dashboard</span><br/>
        <span className='h4 text-center fw-bold text-white  ms-4'> My Sponosor ID: {sponosorid}</span>
        </div>

        {/* Logout Button */}
        <div className="logout">
        <button className='logout btn btn-success w-25 p-3' onClick={handlelogout}>Logout</button>
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
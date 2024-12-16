import React, { useState, useEffect } from "react";
import user from "../../assets/images/trainer.png";
import "./usernavbar.css";
import axios from "axios";

const UserNavbar = () => {
  const [name, setName] = useState([]);
  const [sponosorid, setsponsorId] = useState([]);
  const userId = sessionStorage.getItem("userid");

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    UserData();
  }, []);
  const UserData = async () => {
    try {
      const response = await axios.get(
        ROOT_URL + `/api/auth/findUser/${userId}`
      );
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
    sessionStorage.removeItem("usermobilenumber");
    sessionStorage.removeItem("mysponosorid");
    window.location.href = "/";
  };

  return (
    <>
      <header
        className="header"
        style={{ backgroundColor: "#095444", padding: "3%" }}
      >
        <div className="header-content">
          {/* Logo Section */}
          <div className="logo">
            <img
              src={user}
              alt="Logo"
              style={{ width: "10%", height: "10%" }}
              className="logo-img"
            />
            <span className="ms-2 username">{name}</span>
          </div>

          {/* Username Section */}
          <div className="name">
            <span className="h4 text-center fw-bold text-white welcome">
              Welcome To User Dashboard
            </span>
            <br />
            <span className=" text-center fw-bold text-white ms-4  idsponsor">
             
              My ID: {sponosorid}
            </span>
          </div>

          {/* Logout Button */}
          <div className="logout">
            <button
              className="logout-btn "
              style={{ backgroundColor: "#FFFFFF" }}
              onClick={handlelogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default UserNavbar;

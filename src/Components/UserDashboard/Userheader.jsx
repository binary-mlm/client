import React from 'react';
import { Link } from 'react-router-dom';
import home from "../../assets/images/Home.png";
import lead from "../../assets/images/lead.png";
import contact from "../../assets/images/contact.png";
import quote from "../../assets/images/quote.png";
import task from "../../assets/images/task.png";


const Sidebar = () => {
  return (
    <div className="d-flex">
      {/* Sidebar container */}
      <div className="sidebar bg-light p-3" id="sidebar">
        <h4 className="fw-bold mb-4">Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <Link to="/userdashboard" className="nav-link d-flex align-items-center text-dark">
              <img src={home} width={20} height={25} className="me-2" alt="Home" />
              Home
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/userdasboard/welcomeuser" className="nav-link d-flex align-items-center text-dark">
              <img src={lead} width={20} height={25} className="me-2" alt="Welcome" />
              Welcome
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/userdasboard/editprofile" className="nav-link d-flex align-items-center text-dark">
              <img src={contact} width={20} height={24} className="me-2" alt="Edit Profile" />
              Edit Profile
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/userdasboard/kycverification" className="nav-link d-flex align-items-center text-dark">
              <img src={contact} width={20} height={24} className="me-2" alt="Edit Profile" />
              KYC verification
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/reports" className="nav-link d-flex align-items-center text-dark">
              <img src={quote} width={20} height={24} className="me-2" alt="Reports" />
              Reports
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/userdasboard/genealogy" className="nav-link d-flex align-items-center text-dark">
              <img src={lead} width={20} height={25} className="me-2" alt="Genealogy" />
              Genealogy
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/payout" className="nav-link d-flex align-items-center text-dark">
              <img src={task} width={20} height={24} className="me-2" alt="Payout" />
              Payout
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/rank-achievers" className="nav-link d-flex align-items-center text-dark">
              <img src={contact} width={20} height={24} className="me-2" alt="Rank Achievers" />
              Rank Achievers
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/logistics" className="nav-link d-flex align-items-center text-dark">
              <img src={contact} width={20} height={24} className="me-2" alt="Logistics" />
              Logistic Partners
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/resources" className="nav-link d-flex align-items-center text-dark">
              <img src={contact} width={20} height={24} className="me-2" alt="Resources" />
              Resources
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/about" className="nav-link d-flex align-items-center text-dark">
              <img src={contact} width={20} height={24} className="me-2" alt="About" />
              About
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="/logout" className="nav-link d-flex align-items-center text-dark">
              <img src={contact} width={20} height={24} className="me-2" alt="Logout" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
      
      
    </div>
  );
};

export default Sidebar;

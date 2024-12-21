import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import home from "../../assets/images/Home.png";
import lead from "../../assets/images/lead.png";
import contact from "../../assets/images/contact.png";
import quote from "../../assets/images/quote.png";
import task from "../../assets/images/task.png";
import "./userheader.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state
  const [activeItem, setActiveItem] = useState("");
  
  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Update active item
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      {/* Toggle Button for Mobile */}
      <button
        className="sidebar-toggle-btn d-md-none"
        style={{ color: isOpen ? "black" : "#cce7d3" }}
        onClick={toggleSidebar}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar container */}
      <div className={`sidebar p-3 ${isOpen ? "open" : ""}`} id="sidebar">
        <ul className="nav flex-column mt-2">
          <li className=" sideitem mb-3 p-1">
            <NavLink
              to="/userdashboard"
              className={`nav-link d-flex align-items-center sideitem ${
                activeItem === "home" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("home")}
            >
              <img
                src={home}
                width={20}
                height={25}
                className="me-2"
                alt="Home"
              />
              Dashboard
            </NavLink>
          </li>

          <li className="sideitem mb-3 p-1 ">
            <NavLink
              to="/userdasboard/welcomeuser"
              className={`nav-link d-flex align-items-center sideitem ${
                activeItem === "welcome" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("welcome")}
            >
              <img
                src={lead}
                width={20}
                height={25}
                className="me-2"
                alt="Welcome"
              />
              Welcome
            </NavLink>
          </li>
          <li className="sideitem mb-3 p-1">
            <NavLink
              to="/userdasboard/registration"
              className={`nav-link d-flex align-items-center sideitem ${
                activeItem === "registration" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("registration")}
            >
              <img
                src={task}
                width={20}
                height={25}
                className="me-2"
                alt="registration"
              />
              Registration
            </NavLink>
          </li>
          <li className="sideitem mb-3 p-1 ">
            <NavLink
              to="/userdasboard/idcard"
              className={`nav-link d-flex align-items-center sideitem ${
                activeItem === "idcard" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("idcard")}
            >
              <img
                src={quote}
                width={20}
                height={25}
                className="me-2"
                alt="Id Card"
              />
              ID Card
            </NavLink>
          </li>
          {/*           <li className="nav-item mb-3">
            <Link
              to="/userdasboard/editprofile"
              className="nav-link d-flex align-items-center sideitem"
            >
              <img
                src={contact}
                width={20}
                height={24}
                className="me-2"
                alt="Edit Profile"
              />
              Edit Profile
            </Link>
          </li> */}
          <li className="sideitem mb-3 p-1">
            <NavLink
              to="/userdasboard/kycverification"
              className={`nav-link d-flex align-items-center sideitem ${
                activeItem === "kycverification" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("kycverification")}
            >
              <img
                src={contact}
                width={20}
                height={24}
                className="me-2"
                alt="kycverification"
              />
              KYC verification
            </NavLink>
          </li>
          <li className="sideitem mb-3">
            <div
              className={`nav-link d-flex align-items-center sideitem dropdown-toggle ${
                activeItem === "Reports" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("Reports")}
              id="reportDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={quote}
                width={20}
                height={25}
                className="me-2"
                alt="reports"
              />
              Reports
            </div>
            <ul className="dropdown-menu" aria-labelledby="reportDropdown">
              <li>
                <NavLink
                  className={`dropdown-item ${
                    activeItem === "My Orders" ? "active-item" : ""
                  }`}
                  to="/userdasboard/myoders"
                  onClick={() => handleItemClick("My Orders")}
                >
                  My orders
                </NavLink>
              </li>
             
            </ul>
          </li>
          {/* <li className="nav-item mb-3">
            <Link to="/userdasboard/genealogy" className="nav-link d-flex align-items-center sideitem">
              <img src={lead} width={20} height={25} className="me-2" alt="Genealogy" />
              Genealogy
            </Link>
          </li> */}
          <li className="sideitem mb-3 dropdown">
            <div
              className={`nav-link d-flex align-items-center sideitem dropdown-toggle ${
                activeItem === "Genealogy" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("Genealogy")}
              id="genealogyDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={lead}
                width={20}
                height={25}
                className="me-2"
                alt="Genealogy"
              />
              Genealogy
            </div>
            <ul className="dropdown-menu" aria-labelledby="genealogyDropdown">
              <li>
                <NavLink
                  className={`dropdown-item ${
                    activeItem === "Genealogy Tree" ? "active-item" : ""
                  }`}
                  to="/userdasboard/genealogy"
                  onClick={() => handleItemClick("Genealogy Tree")}
                >
                  Genealogy Tree
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`dropdown-item ${
                    activeItem === "Direct team" ? "active-item" : ""
                  }`}
                  to="/userdasboard/direct_team"
                  onClick={() => handleItemClick("Direct team")}
                >
                  Direct team
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="sideitem mb-3 dropdown">
            <div
              className={`nav-link d-flex align-items-center sideitem dropdown-toggle ${
                activeItem === "payout" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("payout")}
              id="genealogyDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={lead}
                width={20}
                height={25}
                className="me-2"
                alt="payout"
              />
              Payout
            </div>
            <ul className="dropdown-menu" aria-labelledby="genealogyDropdown">
              <li>
                <NavLink
                 
                  className={`dropdown-item ${
                    activeItem === "Weekly Payout" ? "active-item" : ""
                  }`}
                  to="/userdasboard/payoutweekly"
                  onClick={() => handleItemClick("Weekly Payout")}
                >
                  Weekly Payout
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`dropdown-item ${
                    activeItem === "Monthly Payout" ? "active-item" : ""
                  }`}
                  to="/userdasboard/payoutmonthly"
                  onClick={() => handleItemClick("Monthly Payout")}
                >
                  Monthly Payout
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="sideitem  mb-3">
            <NavLink
              to="/userdashboard/rank-achievers"
              className={`nav-link d-flex align-items-center sideitem ${
                activeItem === "Rank Achievers" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("Rank Achievers")}
            >
              <img
                src={contact}
                width={20}
                height={24}
                className="me-2"
                alt="Rank Achievers"
              />
              Rank Achievers
            </NavLink>
          </li>
          <li className="sideitem mb-3">
            <NavLink
              to="/userdasboard/poppartners"
              className={`nav-link d-flex align-items-center sideitem ${
                activeItem === "PUP Partners" ? "active-item" : ""
              }`}
              onClick={() => handleItemClick("PUP Partners")}
            >
              <img
                src={contact}
                width={20}
                height={24}
                className="me-2"
                alt="Logistics"
              />
              PUP Partners
            </NavLink>
          </li>
          {/* <li className="nav-item mb-3">
            <Link
              to="/resources"
              className="nav-link d-flex align-items-center  sideitem"
            >
              <img
                src={contact}
                width={20}
                height={24}
                className="me-2"
                alt="Resources"
              />
              Resources
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

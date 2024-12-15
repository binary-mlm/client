import React ,{useState} from "react";
import { Link } from "react-router-dom";
import home from "../../assets/images/Home.png";
import lead from "../../assets/images/lead.png";
import contact from "../../assets/images/contact.png";
import quote from "../../assets/images/quote.png";
import task from "../../assets/images/task.png";
import "./userheader.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="d-flex">
      {/* Toggle Button for Mobile */}
      <button
        className="sidebar-toggle-btn d-md-none" style={{color:"#cce7d3"}}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar container */}
      <div className={`sidebar bg-light p-3 ${isOpen ? "open" : ""}`} id="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <Link
              to="/userdashboard"
              className="nav-link d-flex align-items-center sideitem"
            >
              <img src={home} width={20} height={25} className="me-2" alt="Home" />
              Home
            </Link>
          </li>
       
          <li className="nav-item mb-3 ">
            <Link
              to="/userdasboard/welcomeuser"
              className="nav-link d-flex align-items-center sideitem"
            >
              <img
                src={lead}
                width={20}
                height={25}
                className="me-2"
                alt="Welcome"
              />
              Welcome
            </Link>
          </li>
          <li className="nav-item mb-3 ">
            <Link
              to="/usersignup"
              className="nav-link d-flex align-items-center sideitem"
            >
              <img
                src={lead}
                width={20}
                height={25}
                className="me-2"
                alt="Welcome"
              />
              Welcome
            </Link>
          </li>
          <li className="nav-item mb-3 ">
            <Link
              to="/userdasboard/idcard"
              className="nav-link d-flex align-items-center sideitem"
            >
              <img
                src={quote}
                width={20}
                height={25}
                className="me-2"
                alt="Id Card"
              />
              ID Card
            </Link>
          </li>
          <li className="nav-item mb-3">
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
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/userdasboard/kycverification"
              className="nav-link d-flex align-items-center sideitem"
            >
              <img
                src={contact}
                width={20}
                height={24}
                className="me-2"
                alt="Edit Profile"
              />
              KYC verification
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/userdasboard/genealogy"
              className="nav-link d-flex align-items-center sideitem dropdown-toggle"
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
                alt="Genealogy"
              />
              Reports
            </Link>
            <ul className="dropdown-menu" aria-labelledby="reportDropdown">
              <li>
                <Link className="dropdown-item" to="/userdasboard/myoders">
                  My orders
                </Link>
              </li>
              {/* <li><Link className="dropdown-item" to="/userdasboard/direct_team">Direct team</Link></li> */}
            </ul>
          </li>
          {/* <li className="nav-item mb-3">
            <Link to="/userdasboard/genealogy" className="nav-link d-flex align-items-center sideitem">
              <img src={lead} width={20} height={25} className="me-2" alt="Genealogy" />
              Genealogy
            </Link>
          </li> */}
          <li className="nav-item mb-3 dropdown">
            <Link
              className="nav-link d-flex align-items-center sideitem dropdown-toggle"
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
            </Link>
            <ul className="dropdown-menu" aria-labelledby="genealogyDropdown">
              <li>
                <Link className="dropdown-item" to="/userdasboard/genealogy">
                  Genealogy Tree
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/userdasboard/direct_team">
                  Direct team
                </Link>
              </li>
            </ul>
          </li>


          <li className="nav-item mb-3 dropdown">
            <Link
              className="nav-link d-flex align-items-center sideitem dropdown-toggle"
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
            Payout
            </Link>
            <ul className="dropdown-menu" aria-labelledby="genealogyDropdown">
              <li>
                <Link className="dropdown-item" to="/userdasboard/payoutweekly">
                  Weekly Payout
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/userdasboard/payoutmonthly">
                  Monthly Payout
                </Link>
              </li>
            </ul>
          </li>
         
          
          <li className="nav-item mb-3">
            <Link
              to="/userdashboard/rank-achievers"
              className="nav-link d-flex align-items-center sideitem"
            >
              <img
                src={contact}
                width={20}
                height={24}
                className="me-2"
                alt="Rank Achievers"
              />
              Rank Achievers
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/userdasboard/poppartners"
              className="nav-link d-flex align-items-center sideitem"
            >
              <img
                src={contact}
                width={20}
                height={24}
                className="me-2"
                alt="Logistics"
              />
              PUP Partners
            </Link>
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

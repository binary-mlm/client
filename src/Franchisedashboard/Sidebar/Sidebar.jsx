import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./sidebar.css";

const Sidebar = ({ setCurrentPage, isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleNavItemClick = (page) => {
    setCurrentPage(page);
    navigate(`/franchise/${page}`);
    toggleSidebar();
  };

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <ul className="nav mt-5">
        <span className="font-weight-bold mb-2 h4 ms-3">PUP Dashboard</span>
        <li className="nav-item itemnav" onClick={() => handleNavItemClick('dashboard')}>
          <a className="nav-link fw-bold" style={{color:"#064336" , fontSize:"17px"}}>Dashboard</a>
        </li>
        <li className="nav-item itemnav" onClick={() => handleNavItemClick('inventory')}>
          <a className="nav-link fw-bold" style={{color:"#064336" , fontSize:"17px"}}>Billing inventory</a>
        </li>
        <li className="nav-item itemnav" onClick={() => handleNavItemClick('invoicelist')}>
          <a className="nav-link fw-bold" style={{color:"#064336" , fontSize:"17px"}}>Inventory stock</a>
        </li>
        <li className="nav-item itemnav" onClick={() => handleNavItemClick('userorderlist')}>
          <a className="nav-link fw-bold" style={{color:"#064336", fontSize:"17px"}}>Customer invoice</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

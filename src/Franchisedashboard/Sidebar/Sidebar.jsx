import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../../public/Franchise/css/style.css";
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
        <span className="font-weight-bold mb-2 h4 ms-3">Franchise Dashboard</span>
        <li className="nav-item" onClick={() => handleNavItemClick('dashboard')}>
          <a className="nav-link">Dashboard</a>
        </li>
        <li className="nav-item" onClick={() => handleNavItemClick('inventory')}>
          <a className="nav-link">Inventory</a>
        </li>
        <li className="nav-item" onClick={() => handleNavItemClick('invoicelist')}>
          <a className="nav-link">Order List</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

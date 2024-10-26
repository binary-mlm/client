import React from 'react';
import "../../../public/Franchise/css/style.css";
import "./sidebar.css";

const Sidebar = ({ setCurrentPage, isOpen, toggleSidebar }) => {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <ul className="nav mt-5">
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">Franchise</span>
            
            </div>
          </a>
        </li>
        <li className="nav-item" onClick={() => setCurrentPage('dashboard')}>
          <a className="nav-link">Dashboard</a>
        </li>
        <li className="nav-item" onClick={() => setCurrentPage('inventory')}>
          <a className="nav-link">Inventory</a>
        </li>
        <li className="nav-item" onClick={() => setCurrentPage('invoicelist')}>
          <a className="nav-link">Invoice List</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

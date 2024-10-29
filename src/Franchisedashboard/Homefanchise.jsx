import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Navbar/Nav';
import Sidebar from "./Sidebar/Sidebar";
import Franchisedashboard from "./dashboardfanchise/Franchisedashboard";
import Inventory from './Inventory/Inventory';
import Invoicelist from "./Inventory/Invoicelist";

const Homefanchise = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.replace('/franchise/', '');
    setCurrentPage(path || 'dashboard');
  }, [location]);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Franchisedashboard />;
      case 'inventory':
        return <Inventory />;
      case 'invoicelist':
        return <Invoicelist />;
      default:
        return <Franchisedashboard />;
    }
  };

  return (
    <>
      <div className="container-scroller">
        <Nav />
      </div>
      <div className="container-fluid page-body-wrapper">
        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
        
        <Sidebar 
          setCurrentPage={setCurrentPage} 
          isOpen={isSidebarOpen} 
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
        />
        
        <div className="main-panel">
          <h2 className="text-center">Franchise Dashboard</h2>
          {renderPage()}
        </div>
      </div>
    </>
  );
};

export default Homefanchise;

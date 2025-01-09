import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./Navbar/Nav";
import Sidebar from "./Sidebar/Sidebar";
import Franchisedashboard from "./dashboardfanchise/Franchisedashboard";
import Inventory from "./Inventory/Inventory";
import Invoicelist from "./Inventory/Invoicelist";
import Useroderlist from "./Inventory/Useroderlist";
import "./Sidebar/sidebar.css";

const Homefanchise = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.replace("/franchise/", "");
    setCurrentPage(path || "dashboard");
  }, [location]);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Franchisedashboard />;
      case "inventory":
        return <Inventory />;
      case "invoicelist":
        return <Invoicelist />;
      case "userorderlist":
        return <Useroderlist />;
      default:
        return <Franchisedashboard />;
    }
  };

  return (
    <>
      {/* <div className="container-scroller">
        <Nav />
      </div> */}
      <Nav />
      <div className="container-fluid page-body-wrapper">
        <div></div>
        {/* Mobile Toggle Button */}

        <button
          className="mobile-toggle"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "✖" : "☰"}
        </button>
        <Sidebar
          setCurrentPage={setCurrentPage}
          isOpen={isSidebarOpen}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        />

        <div className="main-panel">{renderPage()}</div>
      </div>
    </>
  );
};

export default Homefanchise;

import React ,{useState}from 'react'
import Nav from './Navbar/Nav'
import Sidebar from "./Sidebar/Sidebar"
import Footer from './Footer/Footer'
import Franchisedashboard from "./dashboardfanchise/Franchisedashboard";
import Inventory from './Inventory/Inventory';

const Homefanchise = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Franchisedashboard />;
      case 'inventory':
        return <Inventory />; // Render other components based on sidebar menu clicks
      default:
        return <Franchisedashboard />;
    }
  };
  return (
    <>
      <div className="container-scroller">
            <Nav/>
        </div>
        <div className="container-fluid page-body-wrapper">
        <Sidebar setCurrentPage={setCurrentPage}/>
        <div className="main-panel mt-5">
        {renderPage()}
        {/* <Franchisedashboard/> */}
        
         
         
        </div>
      
      </div>
       

        
    </>
  )
}

export default Homefanchise
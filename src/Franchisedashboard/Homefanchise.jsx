import React ,{useState}from 'react'
import Nav from './Navbar/Nav'
import Sidebar from "./Sidebar/Sidebar"
// import Footer from './Footer/Footer'
import Franchisedashboard from "./dashboardfanchise/Franchisedashboard";
import Inventory from './Inventory/Inventory';
import Invoicelist from "./Inventory/Invoice";

const Homefanchise = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Franchisedashboard />;
      case 'inventory':
        return <Inventory />;
        case 'invoicelist':
        return <Invoicelist />; // Render other components based on sidebar menu clicks
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
        <h2 className='mt-5 text-center'>Franchise Dashboard</h2>
        {renderPage()}
        {/* <Franchisedashboard/> */}
        
         
         
        </div>
      
      </div>
       

        
    </>
  )
}

export default Homefanchise
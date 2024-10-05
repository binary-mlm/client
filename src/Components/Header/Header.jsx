import React from 'react'
// import Topmenu from './Topmenu';
import "../../assets/css/main.css";
import "../../assets/css/blue.css";
import Mainheader from "../Header/Mainheader";
import Navbar from '../Navbar/Navbar';



{/* <link rel="stylesheet" href="assets/css/rateit.css">
<link rel="stylesheet" href="assets/css/bootstrap-select.min.css"></link> */}

export const Header = () => {
  return (
    <>
        <header className="header-style-1">
           {/* <Topmenu/>  */}
           <Mainheader/>
           <Navbar/>
        </header>
    </>
  )
}

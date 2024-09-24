import React from 'react'
import home from "../../assets/images/Home.png";
import lead from "../../assets/images/lead.png";
import contact from "../../assets/images/contact.png";
import quote from "../../assets/images/quote.png";
import task from "../../assets/images/task.png";
const Userheader = () => {
  return (
    <>
   
    <div>
      <ul style={{backgroundColor:"white",color:"black" }}>
        <li className='p-2'>
        <div className='d-flex'>
        <img src={home} width={20} height={25} className='mt-2' />
        <a style={{color:"#E52CF0"}} className='fw-bold ms-2 item' href="/userdashboard">Home</a></div></li>
        
        <li className='p-2'>
        <div className='d-flex'>
        <img src={lead} width={20} height={25} className='mt-2'/>
        <a  href="/welcomeuser" className='fw-bold ms-2 item'>Welcome</a></div></li>
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={contact} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>Edit profile</a></div></li>
          
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={quote} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>Reports</a></div></li>
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={lead} width={20} height={24} className='mt-2'/>
        <a  href="/genealogy" className='fw-bold ms-2 item'>Genealogy</a></div></li>
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={task} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>Payout</a></div></li>
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={contact} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>Rank achievers</a></div></li>
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={contact} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>Logistic partners</a></div></li>
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={contact} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>Wall of fame</a></div></li>
       
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={contact} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>Tour achievers</a></div></li>
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={contact} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>Resources</a></div></li>
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={contact} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>About</a></div></li>
        <li className='p-2 '>
        <div className='d-flex'>
        <img src={contact} width={20} height={24} className='mt-2'/>
        <a  href="/" className='fw-bold ms-2 item'>Logout</a></div></li>
      </ul>
    </div>
    </>
    
  )
}

export default Userheader
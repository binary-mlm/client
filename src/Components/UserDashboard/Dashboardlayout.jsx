import React from 'react'
import Userheader from '../UserDashboard/Userheader'
import UserNavbar from '../UserDashboard/UserNavbar'



const Dashboardlayout = ({children}) => {
  return (
    <>
    <div>
    <div>
    <UserNavbar/>
    <div className='row'>
      <div className='col-lg-2 mb-3'>
      <Userheader/>
      </div>
      <div className='col-lg-10'>
      <main>{children}</main>
      </div>
    </div>
    <div className='p-2 text-center bg-secondary' >
    Copyright © 2024 Udbhab Marketing Pvt Ltd. All rights reserved.
    </div>
    </div> 
    </div>
    </>
  )
}

export default Dashboardlayout
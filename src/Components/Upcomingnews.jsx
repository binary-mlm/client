import React from 'react'
import add1 from "../assets/images/add2.jpg"
import breaking from "../assets/images/breakingnews.png"
const Upcomingnews = () => {
  return (
    <>
        <div className="side-menu animate-dropdown outer-bottom-xs">
          <div className="head">Upcoming News/Events</div>
          <div className='d-flex flex-column'>
          <div className='text-center mt-2'><img  className="img-fluid blink2" src={breaking} style={{width:"80%"}}/></div>
        <div className='mt-2'>
          <img src={add1} style={{width:"100%"}}/>
          </div>
          </div>
        </div>
       
    </>
  )
}

export default Upcomingnews
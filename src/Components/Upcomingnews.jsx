import React from 'react'
import add1 from "../assets/images/add2.png"
import breaking from "../assets/images/breakingnews.png"
const Upcomingnews = () => {
  return (
    <>
        <div className="side-menu animate-dropdown outer-bottom-xs">
          <div className="head">Upcoming News/Events</div>
          <div className='d-flex flex-column'>
          <div className='text-center'><img  className="img-fluid" src={breaking} style={{width:"80%"}}/></div>
        <div>
          <img src={add1} style={{width:"97%"}}/>
          </div>
          </div>
        </div>
       
    </>
  )
}

export default Upcomingnews
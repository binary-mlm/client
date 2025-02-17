import React from 'react'
import banner from '../../assets/images/banners/education.png'
import trainerview from '../../assets/images/trainer.png'
import trainerview1 from '../../assets/images/zaha.jpg'
import trainerview2 from '../../assets/images/srijani.jpg'

import trainerview3 from '../../assets/images/avijit.jpg'
import trainerview4 from '../../assets/images/nil.jpg'

// import education from '../../assets/images/education.jpg'
import './education.css'
const Education = () => {
  
  return (
    <>
        <img src={banner} className="img-fluid" alt='noimg'/>
        <div className='education_sectioin mt-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10 col-md-12 col-sm-12 col-xs-12 education'>
              <p className='mb-3' style={{lineHeight:"26px"}}>Online Zoom education for a marketing company offers flexible, interactive training sessions that enhance team collaboration. With features like breakout rooms and recording capabilities, it accommodates diverse learning styles and allows for real-time engagement. This approach ensures teams stay updated on industry trends while maximizing cost-effectiveness and accessibility.</p>
              </div>
            </div>
            <div className='trainer my-3'>
              BUSINESS TRAINERS
            </div>
            <div className='container w-75 '>
            <div className='row'>
            <div className="col-lg-3">
            <div className="trainer-box text-center my-2">
              <img src={trainerview3}  className="rounded-circle"  width={80} alt='trainer' />
              <div className="trainer-name fw-bold"  style={{fontSize:"18px"}}>Avijit Chakraborty</div>
              <div className="trainer-designation" style={{fontSize:"13px"}}>Trainer</div>
            </div>
            </div>
            <div className="col-lg-3">
            <div className="trainer-box text-center my-2">
              <img src={trainerview4}  className="rounded-circle"  width={80} height={80} alt='trainer' />
              <div className="trainer-name fw-bold">M Nilachandra Singha</div>
              <div className="trainer-designation" style={{fontSize:"13px"}}>Trainer</div>
            </div>
            </div>
            <div className="col-lg-3 text-center my-2">
            <div className="trainer-box">
              <img src={trainerview1}  className="rounded-circle"  width={80} alt='trainer' />
              <div className="trainer-name fw-bold" style={{fontSize:"18px"}}>Zahangir Sardar</div>
              <div className="trainer-designation" style={{fontSize:"13px"}}>Trainer</div>
            </div>
            </div>
            <div className="col-lg-3 text-center my-2">
            <div className="trainer-box">
              <img src={trainerview2}  className="rounded-circle"  width={80} height={80} alt='trainer' />
              <div className="trainer-name fw-bold" style={{fontSize:"18px"}}>Srijani Banerjee</div>
              <div className="trainer-designation" style={{fontSize:"13px"}}>Beauty care product Trainer</div>
            </div>
            </div>
            {/* <div className="col-lg-3 text-center my-2">
            <div className="trainer-box">
              <img src={trainerview}  className="rounded-full"  width={50} alt='trainer' />
              <div className="trainer-name fw-bold" style={{fontSize:"18px"}}>Trainer Name</div>
              <div className="trainer-designation" style={{fontSize:"13px"}}>Trainer Designation</div>
            </div>
            </div> */}
            {/* <div className="col-lg-3 text-center my-3">
            <div className="trainer-box">
              <img src={trainerview}  className="rounded-full"  width={50} alt='trainer' />
              <div className="trainer-name fw-bold" style={{fontSize:"18px"}}>Trainer Name</div>
              <div className="trainer-designation" style={{fontSize:"13px"}}>Trainer Designation</div>
            </div>
            </div> */}
            </div>
              <div className='mb-2 mx-5'>
              {/* <img src={education} width={800}/> */}

              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Education
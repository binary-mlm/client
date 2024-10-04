import React from 'react'
import icon from "../../../assets/images/icon.png"
const Chooseus = () => {
  return (
   <>
     <div className="container py-4">
                    <div className="display-6 text-center fw-bold heading">
                    Why Choose Us?
                    </div>

                   <div className="row py-5 g-4" >

                        <div className="col-lg-3 ">
                            <div className="card  align-items-center carddesign1 cardshadow">
                                <div className='feature mt-3' id='feature1'> 

                                <img className="img mt-3 ms-3 " src={icon} width={50}  alt="100%x280" />
                                </div>

                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold ">Exclusive Products</h5>
                                    <h6 className="card-text">Unique, high-quality offerings with constant innovation and demand</h6>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3  ">
                            <div className="card align-items-center carddesign2 cardshadow">
                                <div className=' feature mt-3' id='feature2'> 
                                <img className="img mt-3 ms-3" src={icon} width={50} alt="100%x280" />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Super Power Training System</h5>
                                    <h6 className="card-text text-center">Extensive product knowledge and sales strategy training provided</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 ">
                            <div className="card align-items-center carddesign3 cardshadow h-100">
                                <div className='feature mt-3' id='feature3'>
                                     <img className="img  mt-3 ms-3" src={icon} width={50} alt="100%x280" /></div>

                                <div className="card-body ">
                                    <h5 className="card-title text-center fw-bold">Experience Leadership</h5>
                                    <h6 className="card-text text-center">Experienced mentors guide and support your business growth</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 ">
                            <div className="card align-items-center carddesign4 cardshadow h-100">
                                <div className='feature mt-3' id='feature4'> 
                                <img className="img  mt-3 ms-3" src={icon} width={50} alt="100%x280" /></div>

                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Super Community</h5>
                                    <h6 className="card-text text-center"> Thriving network with recognition, rewards, and personal development</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
   </>
  )
}

export default Chooseus
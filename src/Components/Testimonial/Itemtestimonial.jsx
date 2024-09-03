import React from 'react'
import Testimonial from "./Testimonial"
import user1 from "../../assets/images/testimonials/member1.png"
import user2 from "../../assets/images/testimonials/member2.png"
import user3 from "../../assets/images/testimonials/member3.png"
const userdata = [
    { id: 1, name: 'john joe', price: 'Full Fullstack', image: [user1] },
    { id: 2, name: 'john joe', price: 'Full Fullstack', image: [user2] },
    { id: 3, name: 'john joe', price: 'Full Fullstack', image: [user3] },
  ]; 
const Itemtestimonial = () => {
  return (
    <div>
    
    <h4 className='fw-bold text-center'>Testimonials</h4>
    <Testimonial users={userdata} />
  </div>
  )
}

export default Itemtestimonial
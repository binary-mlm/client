import React from 'react'
import Teamcarousel from "./Teamcarousel"
import team1 from "../../../assets/images/testimonials/member1.png"

const Teammember = () => {
    const products = [
        { id: 1, name: 'user 1', role:"Team member", comment: 'hiigghghghghjgjgjgj', image: [team1], },
        { id: 2, name: 'user 2', role:"Team member",comment: 'hghggggfhfhfffghf', image: [team1] },
        { id: 3, name: 'user 3', role:"Team member", comment: 'hghggggfhfhfffghf', image: [team1] }
        
      ];
  return (
    <div>
    <h4 className='p-3 fw-bold text-center'>Team Members</h4>
    <Teamcarousel users={products} />
  </div>
  )
}

export default Teammember;
import React from 'react'
import  pdf from "../../assets/images/udbhabpdf.pdf"
import imagepdf from "../../assets/images/imagepdf.png"

const Download = () => {
  return (
    <div className='container my-3'>
    <div className='d-flex'>
        <a href={pdf} download >
           <img src={imagepdf}  width={150} alt='pdf download'/><br/>
           <div className='text-center fw-bold text-dark'>Udbhab Product Brochure</div>
        </a>
        </div>

    </div>
  )
}

export default Download
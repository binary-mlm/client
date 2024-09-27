import React from 'react'
import pic from "../../assets/images/welcome.jpg"
import pic2 from "../../assets/images/welcome1.jpg"
import {useReactToPrint} from 'react-to-print'
import { useRef } from 'react'
import "./Css/welcome.css"

function Welcomeuser() {
    const invoicepdf = useRef();
    const generatePDF= useReactToPrint({
        content: ()=>invoicepdf.current,
        documentTitle:"Invoice",
        // onAfterPrint:()=>alert("pdf succesfully saved")
      });
  return (
<>
    <div  className='invoice mt-5'>
    <div  className='container'>
    <div className='row'>
        <div className='col-lg-12'>
   
    
        <div ref={invoicepdf} >
        <div className='card'>
        <div className='card-body'>
        <div className='double-border'>
        <div  className='row'>
        {/* <div className='col-sm-2'>
        <div><img src={pic} /></div>
        </div> */}
        <div className='col-lg-12'>
        <div className='container mt-4'>
        <h5 className='fw-bold'> Hello Mr. AVIJIT CHAKRABORTY</h5>
            <p style={{fontSize:"14px"}}>
Thank you for being a part of SHPL. By doing so, you have taken one of the most important decisions of your life that has the potential to transform your life. I take this occasion to heartily congratulate you and extend a warm welcome to this ever-growing SHPL family.
            </p>
            <p style={{fontSize:"14px"}}>Since 20 May 2018, we have grown from strength to strength and today, we are one of the fastest growing direct selling companies of India, building a vigorous consumer network pan India. We offer over 300 world-class products and services with excellent packing, affordable pricing and value-for-money benefits. No wonder, SHPL products have become a household name and we are happy to have you representing them. We wish you all the very best.</p>
       <p style={{fontSize:"14px"}}>SHPL offers a legitimate and ethical entrepreneurship opportunity where you can build a serious career with commitment, focus and hard work. Our compensation plan generously pays lucrative sales commission without too many conditions and I invite you to give your 100% so that you can achieve both time and financial freedom.</p>
        <p style={{fontSize:"14px"}}>Before you start actively building your SHPL business, use our products, feel their benefits and equip yourself with sufficient knowledge of all SHPL products. Once you do so, study SHPL business plan, familiarize yourself with our web site and study the IBO Back Office well. Adequate preparation is the hallmark of a true champion. In case you need any assistance, do not hesitate to contact our Support Team, who will be glad to assist you with a smile. Kindly mention your SHPL User ID in all your future communication with us.</p>
       
       <p style={{fontSize:"14px"}}>Once again, I welcome you to this vibrant SHPL consumer network and congratulate you for choosing to build an exciting career with us. We look forward to work with you closely.</p>
        <p style={{fontSize:"14px"}}>I wish you all the very best. May all your dreams come true.</p>
        <p style={{fontSize:"14px"}}><strong style={{fontSize:"14px"}}>Gopal Kundu<br/>CMD, SHPL</strong></p>
        </div>
       </div>
        

        </div>
        </div>
        </div>

        </div>    
    </div>

    </div>
    </div>
    </div>
</div>
    
    
    <div className='text-center'>
    <button className='btn btn-primary btn-lg my-4' onClick={generatePDF}><i className="fa fa-print"> </i> Print</button>
    </div>
</>
  )
}

export default Welcomeuser
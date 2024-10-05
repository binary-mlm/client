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
        {/* <h5 className='fw-bold'> Hello Mr. AVIJIT CHAKRABORTY</h5> */}
        <p>Hello Mr. AVIJIT CHAKRABORTY,</p>
        <p>
        

Thank you for being a part of Udbhab Marketing Private Limited. By doing so, you have taken one of the most important decisions of your life that has the potential to transform your future. I take this occasion to heartily congratulate you and extend a warm welcome to this ever-growing Udbhab Marketing family.

Since 4th October, 2024, we have been committed to building a strong and vibrant network of consumers across India. We offer over 300 world-class products and services with excellent packaging, affordable pricing, and value-for-money benefits. No wonder, Udbhab Marketing products are on their way to becoming a household name, and we are excited to have you representing them. We wish you all the very best in this journey.

Udbhab Marketing provides a legitimate and ethical entrepreneurship opportunity where you can build a successful career through commitment, focus, and hard work. Our compensation plan is designed to reward you generously with lucrative sales commissions, and I invite you to give your 100% to achieve both time and financial freedom.

Before you start actively building your Udbhab Marketing business, I encourage you to use our products, experience their benefits, and equip yourself with sufficient knowledge of all the offerings. Once you're familiar with them, study the Udbhab Marketing business plan, explore our website, and understand the IBO Back Office well. Adequate preparation is the hallmark of a true champion. In case you need any assistance, feel free to contact our Support Team, who will be more than happy to assist you. Kindly mention your **Udbhab Marketing User ID** in all future communication with us.

Once again, welcome to the Udbhab Marketing family! Congratulations on choosing to build an exciting career with us. We look forward to working closely with you.

I wish you all the very best. May all your dreams come true.


        </p>
        <p>Warm regards,  <br/>
        Udbhab Marketing Private Limited</p>
            
    {/* <p style={{fontSize:"14px"}}><strong style={{fontSize:"14px"}}>Gopal Kundu<br/>CMD, SHPL</strong></p> */}
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
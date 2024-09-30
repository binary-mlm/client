import React ,{useEffect,useState}from 'react'
import axios from 'axios';
import './homepage.css'
const Homepage = () => {
  const [userdata, setUserdata] = useState([]);
  const [referralleftLink , setReferralleftLink] = useState([]);
  const [referralrightLink , setReferralrightLink] = useState([]);
  useEffect(() => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const userId = sessionStorage.getItem("userid");

    //  console.log(token);
   if(!userdata.length){
    axios
      .get(ROOT_URL + `/api/auth/findUser/${userId}`)
      .then((res) => {
        console.log(res);
        setUserdata(res.data)
        setReferralleftLink(res.data.leftRefferalLink)
        setReferralrightLink(res.data.rightRefferalLink)
      })
      .catch((err) => {
        console.log(err);
        
      });
    }
  }, []);

  const handleCopyLinkleft = () => {
    if (referralleftLink) {
     
      navigator.clipboard.writeText(referralleftLink)
        .then(() => {
          // alert('Referral link and code copied to clipboard!');
        })
        .catch((error) => {
          console.error('Error copying referral link and code:', error);
        });
    } else {
      console.error('No referral link to copy');
    }
  };
  const handleCopyLinkright = () => {
    if (referralrightLink) {
     
      navigator.clipboard.writeText(referralrightLink)
        .then(() => {
          // alert('Referral link and code copied to clipboard!');
        })
        .catch((error) => {
          console.error('Error copying referral link and code:', error);
        });
    } else {
      console.error('No referral link to copy');
    }
  };

  return (
    <>
       <div className='ms-4 mb-5'>
      <div>
        <h1 className='text-center mt-5 fw-bold'>Welcome To User  Dashboard</h1>
      </div>
      <div className='d-flex mt-5'>
      <div className='business text-center fw-bold'>MY BUSINESS DATA</div>
      <div className='businessmonth text-center ms-5 fw-bold '>MY CURRENT MONTH BUSINESS</div>
      <div className='business text-center ms-5 fw-bold'>MY CUMULATIVE BUSINESS</div>
      <div>
      </div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center fw-bold'>MY DATE OF ACTIVATION<br/>
      21 Apr 2022</div>
      <div className='card_item text-center ms-5 fw-bold'>MY DIRECT FBV<br/>
      L - 0  |  R - 0</div>
      <div className='card_item text-center ms-5 fw-bold'>MY DIRECT FBV<br/>
      L - 0  |  R - 0</div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center fw-bold'>MY KYC STATUS<br/>
      Pending</div>
      <div className='card_item text-center ms-5 fw-bold'>MY DIRECT FBV<br/>
      L - 0  |  R - 0</div>
      <div className='card_item text-center ms-5 fw-bold'>MY DIRECT FBV<br/>
      L - 0  |  R - 0</div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center fw-bold'>MY PERSONAL FBV<br/>
      0</div>
      <div className='card_item text-center ms-5 fw-bold'>MY PERSONAL RBV<br/>
      0</div>
      <div className='card_item text-center ms-5 fw-bold'>MY PERSONAL RBV<br/>
      1,204</div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center fw-bold'>MY QUALIFICATION STATUS<br/>
      Qualified</div>
      <div className='card_item text-center ms-5 fw-bold'>MY GROUP RBV<br/>
      L - 0  |  R - 0</div>
      <div className='card_item text-center ms-5 fw-bold'>MY GROUP RBV<br/>
      L - 55,383  |  R - 12,396</div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center fw-bold'>MY WEEKLY CAP<br/>
      125,000</div>
      <div className='card_item text-center ms-5 fw-bold'>MY TOTAL BV (FBV + RBV)<br/>L - 0  |  R - 0
      </div>
      <div className='card_item text-center ms-5 fw-bold'>MY TOTAL BV (FBV + RBV)<br/>
      L - 55,383  |  R - 12,396</div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center fw-bold'>MY REWARD (RANK) STATUS<br/>
      125,000</div>
      <div className='card_item text-center ms-5 fw-bold'>MY CNC OFFER ELIGIBILITY<br/>Not Qualified
      </div>
      <div className='card_item text-center ms-5 fw-bold'>MY TOTAL EARNING (₹)<br/>
      1,380</div>
      </div>
     
      {userdata ? (<>
        <div>
        <div className='col-2 mt-4'>
        <span className='leftrefferal'>My Left Refferal Link:</span>
       
        </div>
        <div className='col-10 referrallink mt-2 fw-bold'>
        {userdata.leftRefferalLink} <i className='fa fa-copy' onClick={handleCopyLinkright}></i>
        </div>
    
      
        <div className='col-2 mt-4'>
        <span className='rightrefferal'>My Left Refferal Link:</span>
        </div>
        <div className='col-10 referrallink mt-2 fw-bold '>{userdata.rightRefferalLink} <i className='fa fa-copy' onClick={handleCopyLinkright}></i></div>
        
        </div>
      </>) : <>No link</>}
     
      </div>
 
    </>
  )
}
export default Homepage
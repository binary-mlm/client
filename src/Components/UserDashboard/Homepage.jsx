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
        
      </div>
      
      <div className='d-flex mt-5'>
      <div className='business text-center'>MY BUSINESS CENTER</div>
      <div className='businessmonth text-center ms-5  '>MONTHLY BUSINESS</div>
      <div className='business text-center ms-5'>TOTAL BUSINESS</div>
      <div>
      </div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center'><span className='fw-bold'>ACTIVE DATE</span><br/>
      <span>21 Apr 2022</span></div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>DIRECT BV(DBV)</span><br/>
      <span> L - 0  |  R - 0</span></div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>TOTAL TEAM</span><br/>
      <span> L - 0  |  R - 0</span></div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center '><span className='fw-bold'>KYC STATUS</span><br/>
      <span>Pending</span></div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>DIRECT TEAM</span><br/>
     <span> L - 0  |  R - 0</span></div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>TOTAL ACCUMULATE BV</span><br/>
      L - 0  |  R - 0</div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center'><span className='fw-bold'> PERSONAL FBV</span><br/>
      <span>0</span></div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>PERSONAL BV</span><br/>
      0</div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>TOTAL PERSONAL BV</span><br/>
      L - 0  |  R - 0</div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center'><span className='fw-bold'>QUALIFICATION</span><br/>
      Qualified</div>
      <div className='card_item text-center ms-5 fw-bold'><span className='fw-bold'>TEAM BUSINESS VOL(TBV)</span><br/>
      L - 0  |  R - 0</div>
      <div className='card_item text-center ms-5 fw-bold'><span className='fw-bold'>WEEKLY EARNING(₹)</span><br/>
      12,396</div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center'><span className='fw-bold'>WEEKLY CAPPING</span><br/>
      125,000</div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>MY TOTAL BV (FBV + RBV)</span><br/>L - 0  |  R - 0
      </div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>MONTHLY EARNING(₹)</span><br/>
       12,396</div>
      </div>
      <div className='d-flex mt-2'>
      <div className='card_item text-center'><span className='fw-bold'>RANK ACHIEVEMENT STATUS</span><br/>
      ACHIEVED</div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>ACHIEVEMENT STATUS</span><br/>Not Qualified
      </div>
      <div className='card_item text-center ms-5'><span className='fw-bold'>TOTAL EARNING (₹)</span><br/>
      1,380</div>
      </div>
     
      {userdata ? (<>
        <div className='d-flex'>
        <div className=' mt-5'>
        <span className='leftrefferal'>My Left Refferal Link</span>
       
        </div>
        <div className=' referrallink mt-5  ms-2 fw-bold'>
        {userdata.leftRefferalLink} <i className='fa fa-copy' onClick={handleCopyLinkleft}></i>
        </div>
        </div>
    
      <div className='d-flex'>
        <div className=' mt-4'>
        <span className='rightrefferal'>My Right Refferal Link</span>
        </div>
        <div className=' referrallink mt-4 fw-bold ms-2'>{userdata.rightRefferalLink} <i className='fa fa-copy' onClick={handleCopyLinkright}></i></div>
        </div>
      </>) : <>No link</>}
     
      </div>
    </>
  )
}
export default Homepage
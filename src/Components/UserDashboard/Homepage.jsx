
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homepage.css";
const Homepage = () => {
  const [userdata, setUserdata] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [referralleftLink, setReferralleftLink] = useState([]);
  const [referralrightLink, setReferralrightLink] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const sponsorId = sessionStorage.getItem("mySponsorId");
  const [copied, setCopied] = useState(false);
  const [copiedright , setCopiedright] = useState(false);
  const logIn = () => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const userId = sessionStorage.getItem("userid");
    //  console.log(token);
    if (!userdata.length) {
      axios
        .get(ROOT_URL + `/api/auth/findUser/${userId}`)
        .then((res) => {
          console.log(res);
          setUserdata(res.data);
          setReferralleftLink(res.data.leftRefferalLink);
          setReferralrightLink(res.data.rightRefferalLink);
          sessionStorage.setItem("usermobilenumber", res.data.mobileNumber);
          // after successfully logged in, redirect to dashboard page
          dashboardData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const dashboardData = async () => {
    try {
      const response = await axios.post(ROOT_URL + '/api/user/getDashboardData', { sponsorId });
      console.log(response.data);
      setData(response.data);
       
     
    } catch (err) {
      console.log(err);
      setError("Data not found");
    }
  };
  // useEffect to login
  useEffect(() => {
    logIn();
  }, []);
  const handleCopyLinkleft = () => {
    if (referralleftLink) {
      navigator.clipboard
        .writeText(referralleftLink)
        .then(() => {
          setCopied(true); // Set copied to true
          setTimeout(() => setCopied(false), 4000);
          // alert('Referral link and code copied to clipboard!');
        })
        .catch((error) => {
          console.error("Error copying referral link and code:", error);
        });
    } else {
      console.error("No referral link to copy");
    }
  };
  const handleCopyLinkright = () => {
    if (referralrightLink) {
      navigator.clipboard
        .writeText(referralrightLink)
        .then(() => {
          setCopiedright(true); // Set copied to true
          setTimeout(() => setCopiedright(false), 4000);
          // alert('Referral link and code copied to clipboard!');
        })
        .catch((error) => {
          console.error("Error copying referral link and code:", error);
        });
    } else {
      console.error("No referral link to copy");
    }
  };
  return (
    <>
      <div className="ms-4 mb-5 me-2">
        <div></div>
        {data && (
          <>
            <div className="d-flex mt-5">
              <div className="business text-center fontstyle">MY BUSINESS CENTER</div>
              <div className="businessmonth text-center ms-5 fontstyle ">
                WEEKLY BUSINESS
              </div>
              <div className="business text-center ms-5 fontstyle">TOTAL BUSINESS</div>
              <div></div>
            </div>
            <div className="d-flex mt-2">
              <div className="card_item text-center">
                <span className="fw-bold fontstyle">ACTIVE STATUS</span>
                <br />
                <span>{data.activeDate}</span>
              </div>
              <div className="card_item text-center ms-5">
                <span className="fw-bold fontstyle">DIRECT BV(DBV)</span>
                <br />
                <span> L - {data.totalDirectBV.leftDirectBV} | R - {data.totalDirectBV.rightDirectBV}</span>
              </div>
              <div className="card_item text-center ms-5">
                <span className="fw-bold">TOTAL TEAM</span>
                <br />
                <span> L - {data.leftTreeUsersCount} | R - {data.rightTreeUsersCount}</span>
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="card_item text-center ">
                <span className="fw-bold">KYC STATUS</span>
                <br />
                <span>{data.kycStatus}</span>
              </div>
              <div className="card_item text-center ms-5">
                <span className="fw-bold">WEEKLY TEAM BUSINESS</span>
                <br />
                <span> L - {data.totalBVPointsEarned.leftBV} | R - {data.totalBVPointsEarned.rightBV}</span>
              </div>
              <div className="card_item text-center ms-5">
                <span className="fw-bold">ACCUMULATE BV</span>
                <br />{data.totalBVPointsEarned.leftBV + data.totalBVPointsEarned.rightBV}
               
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="card_item text-center">
                <span className="fw-bold">CAR ACHIEVEMENT BONUS</span>
                <br />
                <span>0</span>
              </div>
              <div className="card_item text-center ms-5">
                <span className="fw-bold">DIRECT SALES BONUS</span>
                <br />₹{data.directSalesBonus}
              </div>
              <div className="card_item text-center ms-5">
                <span className="fw-bold"> ACCUMULATED PERSONAL BV</span>
                <br /> {data.totalDirectBV.total}
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="card_item text-center">
                <span className="fw-bold">HOUSE ACHIEVEMENT BONUS</span>
                <br />
                ₹0
              </div>
              <div className="card_item text-center ms-5 fw-bold">
                <span className="fw-bold">TEAM SALES BONUS</span>
                <br/>₹0
                {/* <br />L - {data.leftTreeUsersCount} | R - {data.rightTreeUsersCount} */}
              </div>
              <div className="card_item text-center ms-5 fw-bold">
                <span className="fw-bold">WEEKLY EARNING(₹)</span>
                <br />
                ₹{data.weeklyEarning}
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="card_item text-center">
                <span className="fw-bold">MONITORING BONUS</span>
                <br />
                ₹0
              </div>
              <div className="card_item text-center ms-5">
                <span className="fw-bold"> MY TEAM BV (LBV + RBV)</span>
                <br />
                L - {data.totalBVPointsEarned.leftBV} | R - {data.totalBVPointsEarned.rightBV}
               
              </div>
              {/* <div className="card_item text-center ms-5">
                <span className=" fw-bold">MY TOTAL BV (LBV + RBV)</span>
                <br />{mytotallbv}
              </div> */}
              <div className="card_item text-center ms-5">
                <span className="fw-bold">MONTHLY EARNING(₹)</span>
                <br />
                ₹{data.monthlyEarning}
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="card_item text-center">
                <span className="fw-bold">RANK ACHIEVEMENT BONUS</span>
                <br />
                ₹0
              </div>
              <div className="card_item text-center ms-5 pe-4">
                <span className="fw-bold">LIFETIME ROYALTY  BONUS</span>
                <br />
                ₹0
              </div>
              <div className="card_item text-center ms-5">
                <span className="fw-bold">TOTAL EARNING (₹)</span>
                <br />
                ₹{data.lifetimeEarning}
              </div>
            </div>
          </>
        )}
        {userdata ? (
          <>
            <div className=" onlyrefferal d-flex">
              {/* <div className=" mt-5">
                <span className="leftrefferal text-center">My Left Refferal Link</span>
              </div> */}
              <div className=" referrallink mt-5  ms-2 fw-bold">
              <span className="leftrefferal text-center">My Left Refferal Link</span> {userdata.leftRefferalLink}{" "}
                {
                    copied ? <span className="ms-2 text-success">Copied!</span> : <i className="fa fa-copy ms-2" onClick={handleCopyLinkleft}></i>
                  }
              </div>
            </div>
            <div className="row">
              {/* <div className="col-lg-3 col-sm-12 mt-4">
                <span className="rightrefferal">My Right Refferal Link</span>
              </div> */}
              <div className="col-lg-8 col-sm-12 referrallink mt-4 fw-bold ms-2">
              <span className="rightrefferal">My Right Refferal Link</span> {userdata.rightRefferalLink}{" "}
                {
                  copiedright ? <span className="ms-2 text-success">Copied! </span> : <i className="fa fa-copy ms-2" onClick={handleCopyLinkright}></i>
                }
              </div>
            </div>
          </>
        ) : (
          <>No link</>
        )}
      </div>
    </>
  );
};
export default Homepage;

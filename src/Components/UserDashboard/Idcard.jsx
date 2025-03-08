import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Css/idcard.css";
import bg1 from "../../assets/images/1.jpg";
import bg2 from "../../assets/images/2.jpg";
const Idcard = () => {
  const invoiceRef = useRef();
  const [userPhoto, setUserPhoto] = useState(null);
  // Fetch user details
  const username = sessionStorage.getItem("username");
  const mySponsorId = sessionStorage.getItem("mySponsorId");
  const contactNumber = sessionStorage.getItem("usermobilenumber");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  // Fetch user profile photo
//   useEffect(() => {
//     if (mySponsorId) {
//       axios.post(`${ROOT_URL}/api/user/profilephoto`, { mySponsorId })
//         .then((res) => {
//           setUserPhoto(res.data.profilephoto);
//         })
//         .catch((err) => console.error(err));
//     }
//   }, [mySponsorId]); // Add dependencies to prevent infinite calls
  // Download PDF function
  const downloadPDF = () => {
    const input = invoiceRef.current;
    html2canvas(input, { useCORS: true, allowTaint: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("MyIDCard.pdf");
    });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPhoto(reader.result); // Set base64 image
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
    <div className="d-flex justify-content-center mt-5">
    <div className="fw-bold mt-2">Please upload your photo here:</div>
    <div className="ms-2"> <input
                  type="file"
                  className="uploadFile img mt-2"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleImageChange}
                /></div>

    </div>
    <div className="idcard-container mt-5" >
      <div className="row" ref={invoiceRef}>
        <div className="col-lg-6 mt-5">
        <div className="idcard"  style={{ backgroundImage: `url(${bg1})` }}>
        <div className="photo-container">
        
        {/* <input type="file" className="uploadFile img mt-2"  accept=".png, .jpg, .jpeg" onChange={(e) => handleImageChange(e, setUserPhoto)} /> */}
                  
        {userPhoto ? (
                <img src={userPhoto} alt="User" className="user-photo" />
              ) : (
                <>No image</>
              )}
        </div>
        {/* User Details */}
        <div className="userid-container mt-5">
      <div className="d-flex">
      {/* <div className=" text-white">ID: </div> */}
      <div className="text-white">  {mySponsorId}</div>
      </div>

            </div>
           
        <div className="details">
        <div className="useraddress-container">
      <div className="d-flex text-white">
      <div>Ph No:</div>
      <div className="ms-1">+91 {contactNumber}
      </div>
      </div>
      </div>
        <div className="username-container">
      <div className="d-flex text-center">
        <div className="text-white fw-bold"> {username}</div>
        </div>
       </div>
      <div className=" website text-white">www.myudbhab.in</div>
          {/* <p className="contact">Ph No: {contactNumber}</p> */}
        </div>
        
        
        </div>
        </div>
        <div className="col-lg-6 mt-5">
        <div className="idcard"  style={{ backgroundImage: `url(${bg2})` }}>
        <div className="office-container">
      <div className="fw-bold">Udbhab Marketing Pvt Ltd.</div>
      <div>Shakshi Apartment, Ground floor</div>
       <div>Road no: 6, HB Town,Sodepur, </div>
      <div>North 24 Parganas, Kolkata-700110</div>
       <div>Contact No:+91 79 8096 4516</div>      
       <div>
      </div>       
      </div>     

        </div>
        </div>
      
        {/* User Image */}
        
     
      </div>
      {/* Download Button */}
      <button className="download-btn mb-3" onClick={downloadPDF}>Download ID Card</button>
    </div>
    </>
  );
};
export default Idcard;
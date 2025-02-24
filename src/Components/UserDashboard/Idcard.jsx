import React, { useRef , useState , useEffect} from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import photo from "../../assets/images/kusig.png"
// import pic from "../../assets/images/srijani.jpg";
import "./Css/idcard.css";
import logo from "../../assets/images/udbhab.png";
const Idcard = () => {
  const invoiceRef = useRef();
  const [userphoto, setUserphoto] = useState(null);

  const downloadPDF = () => {
    // alert("Downloading")
    const input = invoiceRef.current;
   
    html2canvas(input, {
      useCORS: true,  // Allow cross-origin images
      allowTaint: true, // Allow tainted cross-origin images
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Myidcard.pdf");
    });
  }
  const ROOT_URL= import.meta.env.VITE_LOCALHOST_URL;
  const username = sessionStorage.getItem("username");
  const mySponsorId = sessionStorage.getItem("mySponsorId");
  const contactNumber = sessionStorage.getItem("usermobilenumber");

  useEffect(() => {
    if(mySponsorId){
      axios.post(ROOT_URL + `/api/user/profilephoto`,{ mySponsorId })
      .then((res) => {
         console.log(res);
        setUserphoto(res.data.profilephoto);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  })
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button className="signupbutton m-3" onClick={downloadPDF}>
          <i
            className="fa fa-download"
            style={{ fontSize: "20px", color: "white" }}
          ></i>
          Download
        </button>
      </div>
      <div className="container">
      <div  ref={invoiceRef} className="card w-50">
      <div className="card-body background" style={{border:" 10px solid #6C957E"}}>
      <div className="row" >
      <div className="col-lg-6 col-sm-12">
      <div className="d-flex justify-content-center">
      <img src={logo} width={150}/>
      </div>
     
      <div className="h4 text-center" style={{color:"rgb(9, 84, 68)"}}>UDBHAB MARKETING PVT. LTD.</div>
      <div className="d-flex justify-content-center mt-3 text-align-center">
      {
        userphoto? (
          <> 
          <img src={userphoto}  style={{ width: "30%" , borderRadius:"28%" }} />
          
          </>
         
        ) : ("")    
        }
        </div>
        <div className="d-flex justify-content-center mt-4">
        <span className="username_id h5 fw-bold">{username}</span>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="text-center p-2" style={{backgroundColor:"rgb(9, 46, 38)" , borderRadius:"10px"}}>
            <span className="h4 text-white">ID: </span><span className="h4 text-white">{mySponsorId}</span>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <div className="d-flex">
            <div className="fw-bold fontcontact">Phone Number:</div>
            <div className="ms-1 fw-bold fontcontact">+91 {contactNumber}
            </div>
            
          </div>
          
          <div className="website text-white">www.myudbhab.in</div>
        </div>
       
      </div>
      {/* <div className="username-container">
      <div className="d-flex text-center">
      
        <div className="text-white h4 fw-bold"> {username}</div>
        </div>
      </div> */}
      {/* <div className="userid-container mt-5">
      <div className="d-flex">
      <div className=" h3 text-white">ID:</div>
      <div className="h3  text-white"> {mySponsorId}</div>
      </div>
      </div> */}
      {/* <div className="useraddress-container">
      <div className="d-flex text-white">
      <div>Contact Number:</div>
      <div className="ms-1">+91 {contactNumber}
      </div>
      
      </div>
      
      <div className=" website text-white">www.myudbhab.in</div>
     

            </div> */}
      
     
      <div className="col-lg-6" >
      <div className="d-flex justify-content-center">
      <img src={logo} width={150}/>
      
      </div>
      <div className="h4 text-center" style={{color:"rgb(9, 84, 68)"}}>UDBHAB MARKETING PVT. LTD.</div>
      <div className=" office d-flex justify-content-center flex-column">
      <div className="fontoffice">Shakshi Apartment, Ground floor</div>
      <div className="fontoffice">Road no: 6, HB Town,Sodepur, </div>
      <div className="fontoffice">North 24 Parganas, Kolkata-700110</div>
      <div className="fontoffice">Contact No:+91 79 8096 4516</div>
      </div>
<div className="d-flex justify-content-end">
<img  src={photo} style={{width:"40%"}}/>

</div>
      <div className="d-flex justify-content-end">
      <div className="fw-bold text-end">Authorised Signatory</div>
      </div>
      {/* <div className="background_back">

      <div className="office-container">
      <div className="fw-bold">Udbhab Marketing Pvt Ltd.</div>
      <div>Shakshi Apartment, Ground floor</div>
      <div>Road no: 6, HB Town,Sodepur, </div>
      <div>North 24 Parganas, Kolkata-700110</div>
      <div>Contact No:+91 79 8096 4516</div>
      <div>
      </div>
      </div>     
            </div> */}
            </div>

      </div>
      </div>
</div>
      </div>
      </div>
       
     
    
  );
};

export default Idcard;

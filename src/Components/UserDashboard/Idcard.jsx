import React, { useRef , useState , useEffect} from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Css/idcard.css";
const Idcard = () => {
  const invoiceRef = useRef();
  const [userphoto, setUserphoto] = useState(null);


 ;
  const downloadPDF = () => {
    const input = invoiceRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Myidcard.pdf"); // You can customize the name of the file
    });
  };
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
        <button className="signupbutton m-3">
          <i
            className="fa fa-download"
            style={{ fontSize: "20px", color: "white" }}
            onClick={downloadPDF}
          ></i>{" "}
          Download
        </button>
      </div>
      <div className="container">
      <div  ref={invoiceRef} className="card">
      <div className="card-body">
      <div className="row">
      <div className="col-lg-4 offset-lg-2 col-sm-12">
      <div className="background">
      <div className="image-container">
      {
        userphoto? (
          <img src={userphoto}  className="image_user" style={{ width: "18%" }} />
        ) : (
          <img
            src=""
           
            alt="No image"
            style={{ width: "25%%" }}
          />
        )  // Replace this with your actual user photo URL. If not available, use a placeholder image.  // Replace this with your actual user photo URL. If not available, use a placeholder image.  // Replace this with your actual user photo URL. If not available, use a placeholder image.  // Replace this with your actual user photo URL. If not available, use a placeholder image.  // Replace this with your actual user photo URL. If not available, use a placeholder image.  // Replace this with your actual user photo URL. If not available, use a placeholder image.  // Replace this with your actual user photo URL. If not available, use a placeholder image
      }
        
      </div>
      <div className="username-container">
      <div className="d-flex">
      <div>Name: </div>
        <div className="ms-1">{username}</div>
        </div>
      </div>
      <div className="userid-container">
      <div className="d-flex mt-2">
      <div className="">User ID:</div>
      <div className="ms-1"> {mySponsorId}</div>
      </div>
      </div>    
            </div>
      </div>
      <div className="col-lg-4">
      <div className="background_back">
      {/* <div className="userdateofbirth-container">
      <div className="d-flex">
        <div>Date of Birth:</div>
        <div className="ms-1">{sponsorId}</div>
      </div>
      </div> */}
      <div className="useraddress-container">
      <div className="d-flex">
      <div>Contact Number:</div>
      <div className="ms-1">{contactNumber}
      </div>
      </div>
      </div>
      <div className="useremercency-container">
      <div className="d-flex">
      <div>Emercency Number:</div>
      <div className="ms-1">{contactNumber}
      </div>
      </div>
      </div>
      <div className="office-container">

      <div>Udbhab Marketing Pvt Ltd.</div>
      <div>Shakshi Appartment, Ground floor</div>
      <div>Road no: 6, HB Town,Sodepur, </div>
      <div>North 24 Parganas, Kolkata-700110</div>
      <div>Contact No:+(91)7980964516</div>
      <div>
      </div>
      </div>     
            </div>
            </div>

      </div>
      </div>

      </div>
      </div>
       
      </div>
    
  );
};

export default Idcard;

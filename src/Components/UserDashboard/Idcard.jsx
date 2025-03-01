import React, { useRef , useState , useEffect} from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import photo from "../../assets/images/idba.jpg"
// import pic from "../../assets/images/srijani.jpg";
import "./Css/idcard.css";
import bg1 from "../../assets/images/1.jpg";
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
   
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row" id="section-to-print">
                
                {/* ID Card Front */}
                <div className="col-lg-4 col-sm-12 offset-lg-2">
                  <div className="bg_front"
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "578px",
                      width: "360px",
                      border: "1px solid #175fab",
                    }}
                  >
                    <div className="iboprofileimg text-center p-3">
                      <img
                        src="https://myshpl.com/business/profileImage/SH2814552.jpg"
                        className="img-fluid"
                        alt="Profile"
                        id="proimg"
                      />
                    </div>

                    <div className="iboprofiledata text-center text-dark">
                      <span className="iboname fw-bold d-block" id="memname">
                        AVIJIT CHAKRABORTY
                      </span>
                      <span className="ibodesignation d-block">
                        Independent Business Owner
                      </span>
                      <table className="table text-dark">
                        <tbody>
                          <tr>
                            <td>User ID</td>
                            <td>:</td>
                            <td id="iuserid">SH2814552</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* ID Card Back */}
                <div className="col-lg-4 col-sm-12">
                  <div
                    style={{
                      backgroundImage: "url(/ibo_assets/idcard-back.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "578px",
                      width: "360px",
                      border: "1px solid #175fab",
                    }}
                  >
                    <table className="table text-dark m-3">
                      <tbody>
                        <tr>
                          <td>Date of Birth</td>
                          <td>:</td>
                          <td id="dob_show">01 Jan 1970</td>
                        </tr>
                        <tr>
                          <td>SHPL IBO Since</td>
                          <td>:</td>
                          <td id="ibo_joining_date_show">21 Apr 2022</td>
                        </tr>
                        <tr>
                          <td>Blood Group</td>
                          <td>:</td>
                          <td id="blood_group_show">-</td>
                        </tr>
                        <tr>
                          <td>Contact No</td>
                          <td>:</td>
                          <td id="contact_show">9836314437</td>
                        </tr>
                        <tr>
                          <td>Emergency Contact No.</td>
                          <td>:</td>
                          <td id="emerjency_contact_show">9836314437</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* Print Button */}
              <div className="text-center mt-3 mb-3">
                <button
                  className="signupbutton px-4"
                  onClick={() => window.print()}
                >
                  PRINT ID CARD
                </button>
                <p className="mt-3">
                  <strong>Note:</strong> Kindly take a printout of this ID card
                  on High Glossy Photo Paper. Do not forget to adjust the 'Print
                  Size' to 3.375″ x 2.125″. <br />
                  You may take help from a professional printer for the same.
                </p>
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

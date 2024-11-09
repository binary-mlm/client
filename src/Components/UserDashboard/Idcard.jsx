import React, { useRef } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Css/idcard.css";
const Idcard = () => {
  const invoiceRef = useRef();

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
      <div className="username-container">
        <h5>Srijani Banerjee</h5>
      </div>
      <div className="userid-container">
      <div className="d-flex mt-2">
      <div className=" h5 fw-bold">User ID:</div>
      <div className=" h5 fw-bold">UD123456</div>

      </div>
      </div>
     
      
            
            </div>
      </div>
      <div className="col-lg-4">
      <div className="background_back">
      
            
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

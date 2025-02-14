import React ,{useRef} from "react";
import logo from "../../../assets/images/udbhab_icon.png";
import "./Payoutinvoice.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Payoutinvoice = () => {
  const invoicepdf = useRef();

  const downloadPDF = () => {
    const input = invoicepdf.current;

    html2canvas(input, {
      useCORS: true, // Enables cross-origin images
      scale: 2, // Higher scale for better quality
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "letter");

      // Calculate width and height based on the A4 page size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate image aspect ratio to match the full-page dimensions
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      // Calculate final dimensions
      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;

      // Add image to PDF with calculated dimensions
      pdf.addImage(imgData, "PNG", 0, 0, finalWidth, finalHeight);
      pdf.save("invoice.pdf");
      // alert("PDF successfully saved");
    });
  };
  return (
    <>
   
       <div className="voucher-container">
       <div ref={invoicepdf}>
       <div className="container">
      <header className="voucher-header mt-2">
      <div className="row">
        <div className="col-lg-4">
            <img src={logo} style={{width:"150px"}}/>
        </div>
        <div className="col-lg-8">
        <h1>UDBHAB MARKETING PVT. LTD</h1>
        <p>(CIN: U47890WB2024PTC274607)</p>
        <p>Indira nagar Sodepur, North 24 Parganas. Kol-700110
          
        </p>
        
        {/* <p>Email: info.ecofynity@gmail.com</p> */}
        <p>Web: www.myudbhab.in</p>
        </div>
      </div>
        
      </header>

      <section className="voucher-section">
        <h2>PAYMENT VOUCHER (MONTH: October 2024) (From: 01-10-2024 To: 31-10-2024)</h2>
        <div className="table-responsive">
        <table className="voucher-table">
          <tbody>
            <tr>
              <td><strong>Distributor ID</strong></td>
              <td>EM46964285</td>
              <td><strong>Distributor Name</strong></td>
              <td>AGRAJ PRADHAN</td>
            </tr>
            <tr>
              <td><strong>Rank</strong></td>
              <td>DOUBLE CROWN AMBASSADOR</td>
              <td><strong>PAN</strong></td>
              <td>BBKPP9014R</td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>

      <section className="voucher-section">
        <h2>BUSINESS DETAILS (MONTH: October 2024) (From: 01-10-2024 To: 31-10-2024)</h2>
        <table className="voucher-table">
          
        </table>
      </section>

      <section className="voucher-section">
        <h2>DISTRIBUTOR'S INCOME DETAILS</h2>
        <table className="voucher-table">
          <thead>
            <tr>
              <th>Bonus Type</th>
              <th>Status</th>
              
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Direct sales Bonus</td>
              <td>Y</td>
             
              <td>58414.20</td>
            </tr>
            <tr>
              <td>Team  sales Bonus</td>
              <td>Y</td>
             
              <td>2080.00</td>
            </tr>
            
            <tr>
              <td>Car achievement Bonus</td>
              <td>Y</td>
             
              <td>48420.00</td>
            </tr>
            <tr>
              <td>House achievement Bonus</td>
              <td>Y</td>
             
              <td>48420.00</td>
            </tr>
            
           
            <tr>
              <td>Life time royalty</td>
              <td>Y</td>
              
              <td>48420.00</td>
            </tr>
            {/* Add other rows similarly */}
            <tr>
              <td><strong>Total Income</strong></td>
              <td>-</td>
              
              <td>204246.2</td>
            </tr>
            <tr>
              <td><strong>TDS</strong></td>
              <td>-</td>
              
              <td>10212.31</td>
            </tr>
            <tr>
              <td><strong>Total Income (After Deduction)</strong></td>
              <td>-</td>
              
              <td>194033.89</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="voucher-footer">
        <p>
          Note: If the PAN Number is not updated with our system, then the rate of
          TDS deduction will be 20%. Service tax will be paid by the Distributor
          themselves.
        </p>
      </footer>
    </div>
    </div>
    </div>
    <div className="d-flex justify-content-center">
    <button className="btn bg-success text-white  mt-1 mb-2 text-center" onClick={downloadPDF}>
              <i className="fa fa-download"> </i> Download invoice</button>
            </div>

    </>
  );
};

export default Payoutinvoice;

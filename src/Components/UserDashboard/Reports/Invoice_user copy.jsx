import React, { useRef } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "../../../assets/images/udbhab.png";
import { useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
const Invoice_user = () => {
  const location = useLocation();
  const { sponsorId, order } = location.state;
  const total_Amount = order.products.reduce(
    (total, product) => total + product.totalAmount,
    0
  );
    const invoicepdf = useRef();

  const downloadPDF = () => {
    const input = invoicepdf.current;

    html2canvas(input, {
      useCORS: true, // Enables cross-origin images
      scale: 2, // Higher scale for better quality
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

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
      alert("PDF successfully saved");
    });
  };
  return (
    <>
      <div className="invoice">
        <div className="container">
          <div className="invoice-action text-end mt-2">
            <button className="btn btn-success p-3 mt-5" onClick={downloadPDF}>
              <i className="fa fa-download"> </i> Download invoice
            </button>
          </div>
          <div className="row mt-2">
            <div className="col-lg-12">
              <div ref={invoicepdf}>
                <div
                  className="card w-100 mb-4 text-center"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <div className="card-body">
                    <div className="row">
                    <div className="col-sm-12 text-center">
                    <img className="img-fuild" src={logo} width={140} />
                    <p className="mb-1">
                            Indrira Nagar Sodepur, North 24 Parganas,
                            Kolkata-700110
                          </p>
                          <p className="mb-1">
                            <i className="uil uil-envelope-alt me-1"></i>Email:
                            support@myudbhab.in
                          </p>
                          <p>
                            <i className="uil uil-phone me-1"></i>
                            +(91)7980964516
                          </p>
                          
                    </div>
                  
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6 text-start">
                        <div>
                          <h5 className="font-size-16 mb-1">From:</h5>
                          <h5 className="font-size-15 mb-2">
                            Srijani Banerjee
                          </h5>
                          <p className="mb-1">Howrah, West Bengal</p>
                          <p className="mb-1">
                            Email: srijani.banerjee2000@gmail.com
                          </p>
                          <p>Ph no: 8584062451</p>
                        </div>
                      </div>
                      <div className="col-sm-6 d-flex justify-content-end">
                        <div>
                          <h5 className="font-size-16 mb-1 ms-1">To:</h5>
                          <h5 className="font-size-15 mb-2">{sponsorId}</h5>
                         
                          {/* <p className="mb-1">Email: Subham@gmail.com</p>
                          <p>Ph no: 7878522452</p> */}
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <h5 className="font-size-15 text-start">Order Summary</h5>

                      <div className="table-responsive">
                        <table className="table align-middle table-striped  mb-0 table-group-divider">
                          <thead>
                            <tr>
                              <th className="text-start">Product Name</th>
                              <th>Quantity</th>
                              <th>Price</th>
                              <th>Total Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            
                          {order.products.map((product) => (
                              <tr key={product._id}>
                                <td className="text-start">{product.name}</td>
                                <td className="text-center">
                                  {product.quantity}
                                </td>
                                <td>{product.price}</td>
                                <td>{product.totalAmount}</td>
                              </tr>
                            ))}
                           
                            <tr>
                       <th colSpan="3" className="text-end">Total Amount :</th>
                       <td className="text-start">{total_Amount}/-</td>
                     </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
  


export default Invoice_user
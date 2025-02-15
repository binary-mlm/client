import React, { useRef } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "../../assets/images/udbhab_icon.png";
import { useLocation } from "react-router-dom";
const Invoice = () => {
  const location = useLocation();
  const { franchiseId, order } = location.state;
  const franchise_name = sessionStorage.getItem('username');
  const franchise_email= sessionStorage.getItem('email');
  const username= sessionStorage.getItem('username');
  
  
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
      pdf.addImage(imgData, "PNG", 0, 0, finalWidth, finalHeight ,undefined, "FAST");
      pdf.save("invoice.pdf",{ optimize: true });
      // alert("PDF successfully saved");
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
                   <div className="col-lg-2 text-start">
                                                <img src={logo} style={{width:"100%"}}/>
                                            </div>
                                            <div className="col-lg-10 text-center">
                                            <h2 className="fw-bold" style={{color:"#075444"}}>UDBHAB MARKETING PVT. LTD</h2>
                                            <p className="fw-bold" style={{fontSize:"16px"}}>(GSTIN: 19AADCU7009B1ZJ)</p>
                                            <p className="fw-bold">Reg. Office: Indira nagar Sodepur, North 24 Parganas. Kol-700110
                                              
                                            </p>
                                            <p className="fw-bold">Corporate office: Shakshi Apartment, Ground floor , Road no: 6, HB Town, Sodepur, Kol-700110</p>
                                            
                                            {/* <p>Email: info.ecofynity@gmail.com</p> */}
                                            <p className="fw-bold">Website: www.myudbhab.in</p>
                                            </div>
                      {/* <div className="col-sm-6 invoice-title text-start mt-3">
                        <div>
                          <span className="h4">
                            Udbhab Marketing Private Limited
                          </span>
                        </div>
                        <div className="mt-2">
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
                      <div className="col-sm-6 text-end mt-2">
                        <img className="img-fuild" src={logo} width={140} />
                      </div> */}
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6 text-start">
                        <div>
                          <h5 className="font-size-16 mb-1">From:</h5>
                          <h5 className="font-size-15 mb-2">
                            Udbhab Marketing Private Limited
                          </h5>
                          <p className="mb-1"></p>
                          <p className="mb-1">
                            Email: admin@myudbhab.in
                          </p>
                          <p>Ph no: 7980964516</p>
                        </div>
                      </div>
                      <div className="col-sm-6 d-flex justify-content-end">
                        <div>
                          <h5 className="font-size-16 mb-1 ms-1">To:</h5>
                          
                          <span className="font-size-20 mb-2">{franchise_name}</span><br/>
                          <span className="font-size-20 mb-2">ID: {franchiseId}</span>
                          
                          {/* <p className="mb-1">Email: Subham@gmail.com</p>
                          <p>Ph no: 7878522452</p> */}
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <h5 className="font-size-15 text-start">Order Summary</h5>
                      <div className="row">
                    <div className=" col-lg-3 col-md-6 col-sm-12 text-start font-size-13">Order Number: {order.orderDetails.orderNumber}</div>
                    <span className=" col-lg-9 col-md-6 col-sm-12 text-end font-size-13">Order date:{new Date(
                          order.orderDetails.orderDate
                        ).toLocaleDateString()}</span>
                        </div>
                      <div className="table-responsive">
                        <table className="table align-middle table-striped  mb-0 table-group-divider">
                          <thead>
                            <tr>
                              <th className="text-start">Product Name</th>
                              <th className="text-center">Quantity</th>
                              <th className="text-center">Price(Incl. GST)</th>
                              <th className="text-center">Total Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.products.map((product) => (
                              <tr key={product._id}>
                                <td className="text-start">{product.name}</td>
                                <td className="text-center">
                                  {product.quantity}
                                </td>
                                <td className="text-center">{product.price}</td>
                                <td className="text-center">{product.totalAmount}</td>
                              </tr>
                            ))}
                            
                     <tr>
                        <td colSpan="3" className="text-end">
                          <h5>
                            
                          </h5>
                        </td>
                        <td className="text-center">
                          <h5>
                            <strong> Total:  <i className="fa fa-inr"></i>
                               {total_Amount}/-
                            </strong>
                          </h5>
                        </td>
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

export default Invoice;

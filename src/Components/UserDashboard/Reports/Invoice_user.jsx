import React, { useRef } from "react";
import "./invoice.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "../../../assets/images/udbhab_icon.png";
import { useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
const Invoice_user = () => {
  const location = useLocation();
  const { sponsorId, order } = location.state;

  const username = sessionStorage.getItem("username");
  const user_phone = sessionStorage.getItem("usermobilenumber");

  const total_Amount = order.products.reduce(
    (total, product) => total + product.totalAmount,
    0
  );
  const invoicepdf = useRef();
  const today = new Date().toLocaleDateString();

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
      <div className="container">
        <div className="invoice-action text-end mt-2">
          <button className="btn btn-success p-3 mt-5" onClick={downloadPDF}>
            <i className="fa fa-download"> </i> Download invoice
          </button>
        </div>
        <div ref={invoicepdf} className="mt-2">
          <div className="col-lg-12">
            <div className="row" style={{ border: "1px solid black" }}>
              <div className="receipt-main col-xs-10 col-sm-10 col-md-12">
                {/* Header */}
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="receipt-start">
                      <img
                        className="img-responsive"
                        alt="udbhab"
                        src={logo}
                        style={{ width: "30%" }}
                      />
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 text-end ">
                    <div className="receipt-right">
                      <h5>Udbhab Marketing Pvt Ltd</h5>
                      <p>
                        +(91)7980964516 <i className="fa fa-phone" />
                      </p>
                      <p>
                        support@myudbhab.in <i className="fa fa-envelope-o" />
                      </p>
                      <p>
                        India <i className="fa fa-location-arrow" />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="row mt-4">
                  <div className="col-xs-8 col-sm-8 col-md-8 text-left">
                    <div className="receipt-right">
                      <p>Name: {username}</p>
                      <p>Sponsor ID : {sponsorId}</p>
                      <p>Mobile : {user_phone}</p>
                      {/* <p><b>Email :</b> {username}@gmail.com</p>
                  <p><b>Address :</b> New York, USA</p> */}
                    </div>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4">
                    <div className="receipt-left text-end">
                      <span className="ms-5" style={{ fontSize: "16px" }}>
                        Order No : {order.orderDetails.orderNumber}
                      </span>
                      <br />
                      <span className="ms-5" style={{ fontSize: "16px" }}>
                        Order date : {new Date(
                            order.orderDetails.orderDate
                          ).toLocaleDateString()}
                      </span>
                      <br/>
                      <span className="ms-5 " style={{ fontSize: "16px" }}>
                        Delivery mood: {order.deliveryMode}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invoice Table */}
                <div className="mt-2">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center">Product Name</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.products.map((product) => (
                        <tr key={product._id}>
                          <td className="text-center">{product.name}</td>
                          <td className="text-center">{product.quantity}</td>
                          <td className="text-center">{product.price}</td>
                          <td className="text-center">{product.totalAmount}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="3" className="text-end">
                          <h5>
                            <strong ></strong>
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

                {/* Footer */}
                <div className="row mt-2">
                  <div className="col-xs-8 col-sm-8 col-md-8 text-left">
                    <div className="receipt-right">
                      <h6>
                        <b>
                          Date :
                          {today}
                        </b>
                      </h6>
                    </div>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 text-end">
                    <h6 style={{ color: "rgb(140, 140, 140)" }}>
                      Thanks for shopping!
                    </h6>
                    {/* <div className="receipt-left">
                  <h1>Stamp</h1>
                </div> */}
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

export default Invoice_user;

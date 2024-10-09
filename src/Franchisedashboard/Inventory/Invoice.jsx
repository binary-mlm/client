import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/udbhab.png";
const Invoice = () => {
  const invoicepdf = useRef();
  const { id } = useParams();
  // const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  // const [invoice,setInvoice] = useState([]);
  const generatePDF = useReactToPrint({
    content: () => invoicepdf.current,
    documentTitle: "Invoice",
    onAfterPrint: () => alert("pdf succesfully saved"),
  });

  return (
    <>
      <div className="invoice">
        <div className="container">
          <div className="invoice-action text-end mt-2">
            <button className="btn btn-success p-3 mt-5" onClick={generatePDF}>
              <i className="fa fa-print"> </i> Download invoice
            </button>
          </div>
          <div className="row mt-2">
            <div className="col-lg-12">
              <div ref={invoicepdf} className="">
                <div
                  className="card w-75 mb-4 text-center"
                  style={{ marginLeft: "12%" }}
                >
                  <div
                    className="card-body"
                    style={{ border: "5px solid black" }}
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        <img className="img-fuild" src={logo} width={160} />
                        <h4>Udbhab Marketing Private Limited</h4>
                      </div>
                    </div>

                    <div className="col-sm-7 invoice-title text-start mt-3">
                      <div>
                        <span className="h4">
                          Udbhab Marketing Private Limited
                        </span>
                        <br />
                        <span className="isologo"></span>
                      </div>
                      <div className="mt-2">
                        <p className="mb-1">
                          {" "}
                          Indrira nagar Sodepur, North 24 Parganas. Kol-700110
                        </p>
                        <p className="mb-1">
                          <i className="uil uil-envelope-alt me-1"></i>Email:
                          support@myudbhab.in
                        </p>
                        <p>
                          <i className="uil uil-phone me-1"></i>+(91)7980964516{" "}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6 text-start">
                        <div>
                          <h5 className="font-size-16 mb-1">From:</h5>
                          <h5 className="font-size-15 mb-2">
                            Srijani Banrejee
                          </h5>
                          <p className="mb-1">
                            <span>Howrah</span>, <span>West Bengal</span>
                          </p>
                          <p className="mb-1">
                            Email: srijani.banerjee2000@gmail.com
                          </p>
                          <p>Ph no: 8584062451</p>
                        </div>
                      </div>

                      <div className="col-sm-6 d-flex justify-content-end">
                        <div>
                          <h5 className="font-size-16 mb-1 ms-1">To:</h5>
                          <h5 className="font-size-15 mb-2">Subham Sarkar</h5>
                          <p className="mb-1">
                            <span>solmarg</span>, <span>Kashmir</span>
                          </p>
                          <p className="mb-1">Email:Subham@gmail.com</p>
                          <p>Ph no: 7878522452</p>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <h5 className="font-size-15 text-start">Order Summary</h5>

                      <div className="table-responsive">
                        <table className="table align-middle table-striped  table-centered mb-0 table-group-divider">
                          <thead>
                            <tr className="text-center">
                              <th className="text-start">Product Name</th>
                              <th className="text-start">SKU code</th>
                              <th className="text-start">MRP</th>
                              <th className="text-start">GST</th>
                              <th className="text-start">Quantity</th>
                              <th className="text-start">Total BV</th>
                              <th colSpan="4">Total MRP</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-start">Udbhab Face wash</td>
                              <td className="text-start">UD123456</td>
                              <td className="text-start">200</td>
                              <td className="text-start">20</td>
                              <td className="text-start">10</td>
                              <td className="text-center">10</td>
                              <td className="text-center">300</td>
                              {/* <td  colSpan="4">/-</td> */}
                            </tr>

                            <tr>
                              <th
                                scope="row"
                                colspan="6"
                                className="text-uppercase text-end"
                              >
                                Grand Total:-
                              </th>
                              <td>495.1/-</td>
                            </tr>
                            {/* <tr >
                    <th scope="row" className="border-0 text-end">Total(Rs):</th>
                    <td className="border-0 "><h6 className="fw-semibold text-center">{invoice.amount}/-</h6></td>
                  </tr> */}
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

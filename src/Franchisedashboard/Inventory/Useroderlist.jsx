import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Userorderlist = () => {
  const franchiseId = sessionStorage.getItem("franchiseid");
  const [orderhistory, setorderhistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 20; // Number of orders per page
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchorderhistory = async () => {
      if (franchiseId) {
        try {
          const response = await axios.post(
            ROOT_URL + `/api/franchise/createdOrders`,
            { franchiseId }
          );

          if (response.data.length === 0) {
            swal("Oops!", "No inventory found for this franchise!", "error");
          } else {
            // setorderhistory(response.data.franchiseOrders);
            const sortedOrders = response.data.franchiseOrders.sort((a, b) => {
              return new Date(b.orderDetails.orderDate) - new Date(a.orderDetails.orderDate);
              
            });
            setorderhistory(sortedOrders);
            console.log(response.data.franchiseOrders);
          }
        } catch (error) {
          console.error("Error fetching:", error);
        }
      } else {
        setorderhistory([]);
      }
    };

    fetchorderhistory();
  }, []);

  const handleInvoice = (order) => {
    navigate("/franchise/userorderinvoice", { state: { franchiseId, order } });
  };

  // ** Pagination Logic **
  const totalPages = Math.ceil(orderhistory.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orderhistory.slice(indexOfFirstOrder, indexOfLastOrder);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="mt-5">
        <div className="h3 text-center">Customer Invoice History</div>

        {orderhistory.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead style={{ backgroundColor: "#095444" }}>
                <tr>
                  <th className="text-center text-white">S/N</th>
                  <th className="text-center text-white">Order Number</th>
                  <th className="text-center text-white">Total Amount</th>
                  <th className="text-center text-white">Order Date</th>
                  <th className="text-center text-white">Payment mode</th>
                  <th className="text-center text-white">User Name</th>
                  <th className="text-center text-white">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order, index) => (
                  <tr key={order._id}>
                    <td className="text-center">
                      {indexOfFirstOrder + index + 1}
                    </td>
                    <td className="text-center">
                      {order.orderDetails.orderNumber}
                    </td>
                    <td className="text-center">
                      {order.orderDetails.totalAmount}/-
                    </td>
                    <td className="text-center">
                      {new Date(
                        order.orderDetails.orderDate
                      ).toLocaleDateString()}
                    </td>
                    <td className="text-center">{order.orderDetails.paymentoption ? <span>{order.orderDetails.paymentoption}</span>  : "-"}</td>
                    <td className="text-center">{order.userDetails.userName}</td>
                    <td className="text-center">
                      <span>
                        <i
                          className="fa fa-eye"
                          onClick={() => handleInvoice(order)}
                          style={{ fontSize: "20px", cursor: "pointer" }}
                        ></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Buttons */}
            <div className="d-flex justify-content-center mt-4 mb-3">
              <button
                className="verifybutton me-2"
                
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="align-self-center">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="verifybutton ms-2"
                
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
            <h4>No orders found</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Userorderlist;

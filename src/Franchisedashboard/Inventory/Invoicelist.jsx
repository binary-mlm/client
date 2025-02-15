import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Invoicelist = () => {
  const franchiseId = sessionStorage.getItem("franchiseid");
  const [inventory, setInventory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Define the number of invoices per page
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFranchises = async () => {
      if (franchiseId) {
        try {
          const response = await axios.post(
            ROOT_URL + `/api/admin/getFranchiseOrders`,
            { franchiseId }
          );

          if (response.data.length === 0) {
            swal("Oops!", "No inventory found for this franchise!", "error");
          } else {
            setInventory(response.data.orders);
            console.log(response.data.orders);
          }
        } catch (error) {
          console.error("Error fetching inventory:", error);
        }
      } else {
        setInventory([]);
      }
    };

    fetchFranchises();
  }, []);

  const handleInvoice = (order) => {
    navigate("/franchise/invoice", { state: { franchiseId, order } });
  };

  // ** Pagination Logic **
  const totalPages = Math.ceil(inventory.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="mt-5">
        <div className="h3 text-center">Order List (from Admin)</div>

        {inventory.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead style={{ backgroundColor: "#095444" }}>
                <tr>
                  <th className="text-center text-white">S/N</th>
                  <th className="text-center text-white">Order Number</th>
                  <th className="text-center text-white">Total Amount</th>
                  <th className="text-center text-white">Order Date</th>
                  <th className="text-center text-white">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((order, index) => (
                  <tr key={order._id}>
                    <td className="text-center">{indexOfFirstItem + index + 1}</td>
                    <td className="text-center">{order.orderDetails.orderNumber}</td>
                    <td className="text-center">{order.orderDetails.totalAmount}/-</td>
                    <td className="text-center">
                      {new Date(order.orderDetails.orderDate).toLocaleDateString()}
                    </td>
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

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-4">
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

export default Invoicelist;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';

const Invoicelist = () => {
  const franchiseId = sessionStorage.getItem('franchiseid');
  const [inventory, setInventory] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL
  const navigate = useNavigate();
  useEffect(() => {
    const fetchFranchises = async () => {
      if (franchiseId) {
        try {
          const response = await axios.post(ROOT_URL+`/api/admin/getFranchiseOrders`,{franchiseId}); // Adjust this endpoint to match your API
          if (response.data.length === 0) {
              swal('Opps!', 'No inventory found for this franchise!', 'error')
          } else {
            setInventory(response.data.orders);
            console.log(response.data.orders);
          }
        } catch (error) {
          console.error('Error fetching inventory:', error);
        }
      } else {
        setInventory([]);
      }
    };

    fetchFranchises();
  }, []);

  const handleInvoice = (order) => {
    navigate('/franchise/invoice', { state: { franchiseId, order } });
  };

  return (
   <>
   <div className='mt-5'>
   <div className='h3 text-center'>Order List(from Admin)</div>
     {inventory.length > 0 && (
      <div className='table-responsive'>
        <table className='table table-striped'>
          <thead  style={{backgroundColor:"#095444" }}>
            <tr>
              {/* <th>Product ID</th> */}
              <th className='text-center text-white'>Order Number</th>
              <th className='text-center text-white '>Total Amount</th>
              <th className='text-center text-white'>Order date </th>
              {/* <th className='text-center'>BV Points</th> */}
              <th className='text-center text-white'>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((order) => (
              <tr key={order._id}>
               
                <td className='text-center'>{order.orderDetails.orderNumber}</td>
                <td className='text-center'>{order.orderDetails.totalAmount}/-</td>
                <td className='text-center'>{new Date(order.orderDetails.orderDate).toLocaleDateString()}</td>
                <td className='text-center'><span><i className="fa fa-eye"  onClick={() => handleInvoice(order)}  style={{ fontSize: "20px" }} ></i> </span></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
      </div>
   </>
  )
}

export default Invoicelist
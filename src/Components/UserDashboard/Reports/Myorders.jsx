import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Myorders = () => {
  const sponsorId = sessionStorage.getItem('mySponsorId');
    const [myorders, setmyorders] = useState([]); // State to hold API data
    // const [loading, setLoading] = useState(true);   // State for loading status
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const navigate = useNavigate();
    useEffect(() => {
      const fetchOrders = async () => {
        if (sponsorId) {
          try {
            const response = await axios.post(ROOT_URL+`/api/user/myOrders`,{sponsorId}); // Adjust this endpoint to match your API
           
              setmyorders(response.data.myOrders);
              console.log(response.data.myOrders);
             
            
          } catch (error) {
            console.error('Error fetching inventory:', error);
          }
        } else {
          setmyorders([]);
        }
      };
  
      fetchOrders();
    }, []);

    const handleInvoice = (order) => {
      navigate('/userdasboard/invoice', { state: { sponsorId, order } });
    };
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  return (
   <>
    <div className=' container mt-4'>
    <h3 className='fw-bold text-center'>My Orders</h3>
    
    {myorders && myorders.length > 0 ? (
      <div className='table-responsive'>
        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th className='text-center' scope="col">Order No</th>
                    <th className='text-center' scope="col">Total Amount</th>
                    <th className='text-center' scope="col">BV Points</th>
                    <th className='text-center' scope="col">Order Date(MM/DD/YYYY)</th>
                    <th className='text-center' scope="col">Pickup mode</th>
                    <th className='text-center' scope="col">Download Invoice</th>
                </tr>
            </thead>
            <tbody>
                {myorders.map((order) => (
                    <tr key={order._id}>
                        <td className='text-center p-2'>{order.orderDetails.orderNumber}</td>
                        <td className='text-center'>{order.orderDetails.totalAmount}/-</td>
                        <td className='text-center'>{order.orderDetails.totalBVPoints}</td>
                        <td className='text-center'>{new Date(order.orderDetails.orderDate).toLocaleDateString()}</td>
                        <td className='text-center'>{order.deliveryMode}</td>
                        <td className='text-center'><span><i className="fa fa-download"  onClick={() => handleInvoice(order)}  style={{ fontSize: "20px" }} ></i> </span></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    ) : (
        <p className='text-center mt-4'>No orders found.</p>
    )}
    </div>
   </>
  )
}

export default Myorders
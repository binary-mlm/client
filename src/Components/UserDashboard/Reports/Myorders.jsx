import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Myorders = () => {
    const [myorders, setmyorders] = useState([]); // State to hold API data
    const [loading, setLoading] = useState(true);   // State for loading status
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    // Fetch referral data from the API
    axios.get(`${ROOT_URL}/api/user/myOrders`) // replace with actual sponsorId
      .then(response => {
        setmyorders(response.data); // Set the referral data
        setLoading(false); // Data loading complete
      })
      .catch(error => {
        console.log(error);
        // setError('Failed to fetch referral data');
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
   <>
    <div className=' container mt-4'>
    <h3 className='fw-bold text-center'>My orders</h3>
    <table className="table table-success table-striped">
  <thead>
    <tr>
    <th scope="col">Order date</th>
    <th scope="col">Product id</th>
      <th scope="col">BV</th>
      <th scope="col">Amount</th>
      <th scope="col">Delivery Mode</th>
      <th scope="col">Download Invoice</th>
    </tr>
  </thead>
  <tbody>
  {myorders.map((orders) => (
            <tr  key={orders._id}>
            <td className='p-2'>{orders.mySponsorId}</td>
              <td>{orders.name}</td>
              <td>{orders.email}</td>
              <td>{orders.mobileNumber}</td>
            </tr>
          ))}
    </tbody>
    </table>
    </div>
   </>
  )
}

export default Myorders
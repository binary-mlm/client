import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Myorders = () => {
    // const [myorders, setmyorders] = useState([]); // State to hold API data
    // const [loading, setLoading] = useState(true);   // State for loading status
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  // useEffect(() => {
    
  //   axios.get(`${ROOT_URL}/api/user/myOrders`) // replace with actual sponsorId
  //     .then(response => {
  //       setmyorders(response.data); // Set the referral data
  //       setLoading(false); // Data loading complete
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       // setError('Failed to fetch referral data');
  //       setLoading(false);
  //     });
  // }, []);
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
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
 
            <tr>
            <td className='p-2'></td>
              <td></td>
              <td>hii</td>
              <td></td>
              <td></td> 
              <td><a href='/userdasboard/invoice'> <i className='fa fa-download'></i>Download</a> </td>
            </tr>
         
    </tbody>
    </table>
    </div>
   </>
  )
}

export default Myorders
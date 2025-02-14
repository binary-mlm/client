import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Payoutweekly = () => {
    const [allweeklypayout, setAllweeklypayout] = useState([]); // State to hold API data
    const [loading, setLoading] = useState(true);   // State for loading status
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const userid = sessionStorage.getItem('userid');
    useEffect(() => {
        // Fetch referral data from the API
        axios.get(`${ROOT_URL}/api/payouts/weekly/${userid}`) // replace with actual sponsorId
          .then(response => {
            console.log(response.data.weeklyEarnings);  // For debugging purposes, log the received data to see its structure
            setAllweeklypayout(response.data.weeklyEarnings); // Set the referral data
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
        <div className=' container mt-4 table-responsive'>
    <h3 className='fw-bold text-center'>All weekly Payout</h3>
    <table className="table table-success table-striped">
  <thead>
    <tr>
      <th className='text-center' scope="col">Week</th>
      <th className='text-center' scope="col">MatchBV</th>
      <th className='text-center' scope="col">Direct sales bonus</th>
      <th className='text-center' scope="col">Team sales bonus</th>
      <th className='text-center' scope="col">Payout Amount</th>
      <th className='text-center' scope="col">Payout Status</th>
      {/* <th className='text-center' scope="col">View Invoice</th> */}
      
    </tr>
  </thead>
  <tbody>
  {allweeklypayout.length > 0 ? (
  <>
  {allweeklypayout.map((payout) => (
            <tr  key={payout._id}>
            <td className='text-center'>{payout.week}</td>
              <td className='text-center'>{payout.matchedBV}</td>
              <td className='text-center'>{payout.directSalesBonus}</td>
              
              <td className='text-center'>{payout.teamSalesBonus}</td>
              <td className='text-center'>{payout.payoutAmount}</td>
              <td className='text-center'>{payout.paymentStatus}</td>
              {/* {(payout.paymentStatus === "Paid") 
  ? <td className='text-center'><Link to="/userdasboard/payoutinvoice"><i className="fa fa-download"></i></Link></td>
  : <td className='text-center'>No invoice</td>
} */}
              {/* <td className='text-center'><Link to="/userdasboard/payoutinvoice"><i className="fa fa-download"></i></Link></td> */}
            </tr>
          ))}
          </>
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No Weekly Payout found</td>
            </tr>
          )}
  </tbody>
    </table>
    </div>
    </>
  )
}

export default Payoutweekly
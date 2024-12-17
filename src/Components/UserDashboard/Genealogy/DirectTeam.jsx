import React,{useState,useEffect} from 'react'
import axios from 'axios';


const DirectTeam = () => {
    const sponsorId = sessionStorage.getItem("mySponsorId");
    const [referrals, setReferrals] = useState([]); // State to hold API data
    const [loading, setLoading] = useState(true);   // State for loading status
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    // Fetch referral data from the API
    axios.post(`${ROOT_URL}/api/user/getDirectReferrals`, { sponsorId }) // replace with actual sponsorId
      .then(response => {
        setReferrals(response.data); // Set the referral data
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
    <h3 className='fw-bold text-center'>Direct Team</h3>
    <table className="table table-success table-striped">
  <thead>
    <tr>
     
    <th scope="col">SL/NO</th>
      <th scope="col">Name</th>
      <th scope="col">User ID</th>
      
      <th scope="col">MobileNumber</th>
    </tr>
  </thead>
  <tbody>
  {referrals.map((referral , index) => (
            <tr  key={referral._id}>
            <td>{index + 1}</td>
            <td>{referral.name}</td>
              <td className='p-2'>{referral.mySponsorId}</td>
              
              <td>{referral.mobileNumber}</td>
            </tr>
          ))}
    </tbody>
    </table>
    </div>
   </>
  )
}

export default DirectTeam
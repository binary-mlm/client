import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Poppartners = () => {
    const [allfanchise, setAllfanchise] = useState([]); // State to hold API data
    const [loading, setLoading] = useState(true);   // State for loading status
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    // Fetch referral data from the API
    axios.get(`${ROOT_URL}/api/user/getAllFranchies`) // replace with actual sponsorId
      .then(response => {
        console.log(response.data);  // For debugging purposes, log the received data to see its structure
        setAllfanchise(response.data); // Set the referral data
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
    <h3 className='fw-bold text-center'>All PUP Partners</h3>
    <div className='table-responsive'>
    <table className="table table-success table-striped">
  <thead>
    <tr>
     
      
      <th scope="col">PUP_id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">MobileNumber</th>
    </tr>
  </thead>
  <tbody>
  {allfanchise.map((franchise) => (
            <tr  key={franchise._id}>
            <td className='p-2'>{franchise.franchiseId}</td>
              <td>{franchise.franchiseName}</td>
              <td>{franchise.email}</td>
              <td>{franchise.contactInfo}</td>
            </tr>
          ))}
    </tbody>
    </table>
    </div>
    </div>
   </>
  )
}

export default Poppartners
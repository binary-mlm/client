import React ,{useState , useEffect} from 'react'
import "./Css/rankachive.css";
import axios from "axios";
const Rankachive = () => {
  const [achievedRank, setAchievedRank] = useState("");
  const sponsorId = sessionStorage.getItem("mySponsorId");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  

    const tableData = [
        { no: 1, rankName: "Star", vbMatching: "25,000 VB MATCHING", reward: "Udbhab T-shirt" },
        { no: 2, rankName: "Double Star", vbMatching: "50,000 VB MATCHING", reward: "Business tool kit" },
        { no: 3, rankName: "Super Star", vbMatching: "75,000 VB MATCHING", reward: "RTP" },
        { no: 4, rankName: "Mega Star", vbMatching: "1,00,000 VB MATCHING", reward: "Exclusive wrist watch" },
        { no: 5, rankName: "Udbhab Bronze Club", vbMatching: "1,50,000 VB MATCHING", reward: "Rank pin + national tour" },
        { no: 6, rankName: "Udbhab Silver Club", vbMatching: "3,00,000 VB MATCHING", reward: "Bronze pin + tablet" },
        { no: 7, rankName: "Udbhab Pearl Club", vbMatching: "6,00,000 VB MATCHING", reward: "Silver pin + laptop" },
        { no: 8, rankName: "Udbhab Gold Club", vbMatching: "12,00,000 VB MATCHING", reward: "Pearl pin + foreign trip" },
        { no: 9, rankName: "Udbhab Platinum Club", vbMatching: "30,00,000 VB MATCHING", reward: "Gold pin + Rs. 50,000 cash" },
        { no: 10, rankName: "Udbhab Diamond Club", vbMatching: "35,00,000 VB MATCHING", reward: "Platinum pin + Rs. 75,000 cash" },
        { no: 11, rankName: "Udbhab Blue Diamond Club", vbMatching: "45,00,000 VB MATCHING", reward: "Diamond pin + Rs. 1 lakh" },
        { no: 12, rankName: "Udbhab White Diamond Club", vbMatching: "50,00,000 VB MATCHING", reward: "Rank pin + Rs. 1.5 lakhs" },
        { no: 13, rankName: "Udbhab Purple Diamond Club", vbMatching: "1,00,00,000 VB MATCHING", reward: "Rank pin + Rs. 3.5 lakhs" },
        { no: 14, rankName: "Udbhab Royal Diamond Club", vbMatching: "2,00,00,000 VB MATCHING", reward: "Rank pin + Rs. 7.5 lakhs" },
        { no: 15, rankName: "Udbhab Crown Diamond Club", vbMatching: "5,00,00,000 VB MATCHING", reward: "Rank pin + Rs. 10 lakhs" },
        { no: 16, rankName: "Udbhab Unicorn Diamond Club", vbMatching: "10,00,00,000 VB MATCHING", reward: "Rank pin + Rs. 20 lakhs" },
      ];
    
      useEffect(() => {
        const fetchDashboardData = async () => {
          try {
           
           const response = await axios.post(ROOT_URL + '/api/user/getDashboardData', { sponsorId });
           const rankFromAPI = response.data.rank?.replace(/[^\w\s]/g, "").trim(); // Removes non-alphanumeric characters
            setAchievedRank(rankFromAPI); // Assuming the rank field is returned as "STAR⭐"
          } catch (err) {
            console.error(err);
            
          }
        };
        fetchDashboardData();
      }, [sponsorId]);
    
      // Helper function to determine if a row is achieved
      const isAchieved = (rankName) => {
        if (!achievedRank) return false;
      
        // Normalize the rankName and achievedRank for comparison
        const normalizedRankName = rankName.toLowerCase();
        const normalizedAchievedRank = achievedRank.toLowerCase();
        const achievedIndex = tableData.findIndex(
          item => item.rankName.toLowerCase() === normalizedAchievedRank
        );
        const currentIndex = tableData.findIndex(
          item => item.rankName.toLowerCase() === normalizedRankName
        );
      
        return currentIndex <= achievedIndex;
      };  
  return (
    <>
         <div className="table-container table-responsive">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Rank Name</th>
                <th>VB Matching</th>
                <th>Reward</th>
                <th>Achievement</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.rankName}</td>
                  <td>{item.vbMatching}</td>
                  <td>{item.reward}</td>
                  <td >
                  <button
                   className='btn btn-success'
                    disabled={!isAchieved(item.rankName)}
                  >
                     {isAchieved(item.rankName) ? "Yes" : "No"}
                  </button>
                  </td>
                  <td><button className='btn btn-warning'>Unclaimed</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
    </>
  )
}

export default Rankachive
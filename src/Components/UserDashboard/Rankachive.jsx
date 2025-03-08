import React, { useState, useEffect } from "react";
import "./Css/rankachive.css";
import axios from "axios";


  const Rankachive = () => {
    const [achievedRank, setAchievedRank] = useState("");
    const [isClaimed, setIsClaimed] = useState(false); // Single claimed state for achieved rank
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
    const fetchData = async () => {
      try {
        // Fetch Achieved Rank
        const rankResponse = await axios.post(`${ROOT_URL}/api/user/getDashboardData`, { sponsorId });
        const rankFromAPI = rankResponse.data.rank?.replace(/[^\w\s]/g, "").trim();
        setAchievedRank(rankFromAPI);

        // Fetch Claimed Status
        const statusResponse = await axios.get(`${ROOT_URL}/api/payouts/getUserRankStatus/${sponsorId}`);
        if (statusResponse.data.success) {
          setIsClaimed(statusResponse.data.user.isclaimed);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [sponsorId]);

  // Determine the highest achieved rank index
  const getAchievedRankIndex = () => {
    if (!achievedRank) return -1;
    return tableData.findIndex((item) => item.rankName.toLowerCase() === achievedRank.toLowerCase());
  };

  // Function to check if a rank is achieved
  const isAchieved = (rankName) => {
    const achievedIndex = getAchievedRankIndex();
    const currentIndex = tableData.findIndex((item) => item.rankName.toLowerCase() === rankName.toLowerCase());
    return currentIndex <= achievedIndex;
  };

  const handleClaim = async (rankName) => {
    try {
      const response = await axios.put(`${ROOT_URL}/api/claim-rank`, {
        sponsorId,
        rankName,
      });

      if (response.data.success) {
        setIsClaimed(true);
      }
    } catch (error) {
      console.error("Error claiming reward:", error);
    }
  };

  return (
    <div className="table-container table-responsive">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Rank Name</th>
            <th>VB Matching</th>
            <th>Reward</th>
            <th>Achievement</th>
            <th>Claim Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>{item.rankName}</td>
              <td>{item.vbMatching}</td>
              <td>{item.reward}</td>
              <td>
                <button className="btn btn-success" disabled={!isAchieved(item.rankName)}>
                  {isAchieved(item.rankName) ? "Yes" : "No"}
                </button>
              </td>
              <td>
                {isAchieved(item.rankName) && isClaimed ? (
                  <button className="btn btn-success">Claimed</button>
                ) : (
                  <button
                    className="btn btn-warning"
                    disabled={!isAchieved(item.rankName) || isClaimed}
                    onClick={() => handleClaim(item.rankName)}
                  >
                    Unclaimed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rankachive;

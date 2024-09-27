import React, { useState, useEffect } from "react";
import axios from "axios";
import "./genealogy.css"; // import your CSS

const Genealogy = () => {
  // State to manage which nodes are active (open)
  const [activeNodes, setActiveNodes] = useState({});
  const [treeData, setTreeData] = useState(null); // State for tree data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const userId = sessionStorage.getItem("userid");

  // Toggle function to open/close child nodes
  const handleNodeClick = (e, nodeIndex) => {
    e.preventDefault(); // Prevent default anchor behavior
    e.stopPropagation(); // Stop event propagation

    setActiveNodes((prev) => ({
      ...prev,
      [nodeIndex]: !prev[nodeIndex], // toggle the node's active state
    }));
  };

  // Fetching the data from API using Axios
  useEffect(() => {
    const fetchTreeData = async () => {
      try {
        const response = await axios.get(ROOT_URL + `/api/auth/getSponsorChildrens/${userId}`); // Replace with your actual API endpoint
        setTreeData(response.data); // Assuming the response contains the tree structure
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        // setError("Failed to fetch tree data");
        setLoading(false);
      }
    };

    fetchTreeData();
  }, []);

  // Recursive function to render the tree, including null nodes
  const renderTree = (node, indexPath = "") => {
    const currentPath = indexPath;
    const isActive = !!activeNodes[currentPath];

    // Check if the node is null and render a placeholder if true
    if (!node) {
      return (
        <li key={`${indexPath}-empty`} className="empty-node">
          <div className="member-view-box">
            <div className="member-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png" // Placeholder image for empty node
                alt="Empty Node"
                style={{width:"90%", height:"80%"}}
              />
            </div>
            {/* <div className="member-footer">
              <div className="name">
                <span>Empty</span> 
              </div>
              <div className="sponsorId">
                <span>---</span> 
              </div>
            </div> */}
          </div>
        </li>
      );
    }

    // Regular node rendering
    return (
      <li key={node._id}>
        <a
          href="#"
          onClick={(e) => handleNodeClick(e, currentPath)} 
        >
          <div className="member-view-box">
            <div className="member-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                alt="Member"
              />
            </div>
            <div className="member-footer">
              <div className="name">
                <span>{node.value}</span>
              </div>
              <div className="sponsorId">
                <span>{node.mySponsorId}</span>
              </div>
            </div>
          </div>
        </a>
        {/* Recursively render left and right children */}
        <ul className={isActive ? "active" : ""}>
          {renderTree(node.leftChild, `${currentPath}-left`)}
          {renderTree(node.rightChild, `${currentPath}-right`)}
        </ul>
      </li>
    );
  };

  // Display loading, error, or the tree
  return (
    <div className="body genealogy-body genealogy-scroll">
      <div className="genealogy-tree">
        {loading && <p>Loading tree...</p>}
        {error && <p>{error}</p>}
        {treeData && <ul>{renderTree(treeData)}</ul>}
      </div>
    </div>
  );
};

export default Genealogy;

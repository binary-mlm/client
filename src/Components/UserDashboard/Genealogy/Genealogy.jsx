import React, { useState, useEffect } from "react";
import axios from "axios";
import "./genealogy.css";
import { useNavigate } from "react-router-dom";
import user from "../../../assets/images/user.png";

const Genealogy = () => {
  const [activeNodes, setActiveNodes] = useState({});
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentNodeId, setCurrentNodeId] = useState(sessionStorage.getItem("userid"));
  const navigate = useNavigate(); // Hook to handle navigation
  const userid = sessionStorage.getItem("userid");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const MAX_LEVEL = 4; // Maximum levels to display

  // Fetch tree data for a given nodeId
  const handleExtremeTop = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/api/auth/getSponsorChildrens/${userid}`);
      setTreeData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch tree data");
      setLoading(false);
    }
  };

  const fetchTreeData = async (nodeId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${ROOT_URL}/api/auth/getSponsorChildrens/${nodeId}`);
      setTreeData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch tree data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTreeData(currentNodeId);
  }, [currentNodeId]);

  // Handle node click
  const handleNodeClick = (e, nodeId) => {
    e.preventDefault();
    setCurrentNodeId(nodeId);
  };

  // Handle signup for vacant left or right nodes
  const handleSignupClick = (e, formType, parentSponsorId) => {
    e.preventDefault();
    if (formType === "left") {
      navigate(`/signupleft/${parentSponsorId}`);
    } else if (formType === "right") {
      navigate(`/signupright/${parentSponsorId}`);
    }
  };

  // Function to render the tree recursively
  const renderTree = (node, currentLevel = 1, indexPath = "", parentSponsorId = "") => {
    const currentPath = indexPath;
    const isActive = !!activeNodes[currentPath];

    // If it's the maximum level, only render signup or the node, no children
    if (currentLevel === MAX_LEVEL) {
      if (!node) {
        const formType = indexPath.endsWith("-left") ? "left" : "right";
        return (
          <li key={`${indexPath}-empty`} className="empty-node">
            <div className="member-view-box">
              <div className="member-image">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="Empty Node"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="member-footer">
                <div className="name">
                  <a href="#" onClick={(e) => handleSignupClick(e, formType, parentSponsorId)}>
                    <span>Signup</span>
                    <span style={{ display: "none" }}>{parentSponsorId}</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      }
      return (
        <li key={node._id || currentPath}>
          <a href="#" onClick={(e) => handleNodeClick(e, node._id)}>
            <div className="member-view-box">
              <div className="member-image">
                <img src={user} alt="Member" />
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
        </li>
      );
    }

    // If the node is null before level 4, render signup with vacant children
    if (!node) {
      const formType = indexPath.endsWith("-left") ? "left" : "right";
      return (
        <li key={`${indexPath}-empty`} className="empty-node">
          <div className="member-view-box">
            <div className="member-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Empty Node"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="member-footer">
              <div className="name">
                <a href="#" onClick={(e) => handleSignupClick(e, formType, parentSponsorId)}>
                  <span>Signup</span>
                  <span style={{ display: "none" }}>{parentSponsorId}</span>
                </a>
              </div>
            </div>
          </div>
          <ul>
            {/* Vacant child nodes */}
            <li className="vacant-node">
              <div className="member-view-box">
                <div className="member-footer">
                  <div className="name">Vacant</div>
                </div>
              </div>
            </li>
            <li className="vacant-node">
              <div className="member-view-box">
                <div className="member-footer">
                  <div className="name">Vacant</div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      );
    }

    // If it's a valid node, render the node and its children recursively
    return (
      <li key={node._id || currentPath}>
        <a href="#" onClick={(e) => handleNodeClick(e, node._id)}>
          <div className="member-view-box">
            <div className="member-image">
              <img src={user} alt="Member" />
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
        <ul className={isActive ? "active" : ""}>
          {/* Recursively render left and right children */}
          {renderTree(node.leftChild, currentLevel + 1, `${currentPath}-left`, node.mySponsorId)}
          {renderTree(node.rightChild, currentLevel + 1, `${currentPath}-right`, node.mySponsorId)}
        </ul>
      </li>
    );
  };

  return (
    <>
      <div className="flex flex-column">
        <div className="text-center">
          <button className="btn btn-primary mt-5" onClick={handleExtremeTop}>
            Extreme Top
          </button>
        </div>

        <div>
          <div className="body genealogy-body genealogy-scroll">
            <div className="genealogy-tree">
              {loading && <p>Loading tree...</p>}
              {error && <p>{error}</p>}
              {treeData && <ul>{renderTree(treeData)}</ul>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genealogy;

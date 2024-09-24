import React from "react";
import "./genealogy.css";
import user from "../../../assets/images/trainer.png";

const Genealogy = () => {
  return (
    <>
      
        
       
    
      <div className="container">
      <button className="btn btn-primary">Extreme Left</button>
        <div class="tree">
          <ul>
            <li>
            
              <a href="#">
              <div className="d-flex flex-column">
                <img src={user} width={60} />
                <span className="userstyle" >user1</span>
                </div>
              </a>
              
              
              <ul>
                <li>
                  <a href="#">
                  <div className="d-flex flex-column">
                <img src={user} width={60} />
                <span className="userstyle" >user2</span>
                </div>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                      <div className="d-flex flex-column">
                <img src={user} width={60} />
                <span className="userstyle" >user3</span>
                </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <div className="d-flex flex-column">
                <img src={user} width={60} />
                <span className="userstyle" >user4</span>
                </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                  <div className="d-flex flex-column">
                <img src={user} width={60} />
                <span className="userstyle" >user5</span>
                </div>
                  </a>
                  <ul>
                    <ul>
                      <li>
                        <a href="#">
                        <div className="d-flex flex-column">
                <img src={user} width={60} />
                <span className="userstyle" >user6</span>
                </div>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                            <div className="d-flex flex-column">
                <img src={user} width={60} />
                <span className="userstyle" >user7</span>
                </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                            <div className="d-flex flex-column">
                <img src={user} width={60} />
                <span className="userstyle" >user8</span>
                </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                        <div className="d-flex flex-column">
                <img src={user} width={60} />
                <span className="userstyle" >user9</span>
                </div>
                        </a>
                      </li>
                    </ul>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary">Extreme Right</button>
      </div>
    </>
  );
};

export default Genealogy;

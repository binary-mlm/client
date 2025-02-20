import React from 'react'
import news from "../../assets/images/news.png";
import new1 from "../../assets/images/News/udbhab_news.jpg";
import new2 from "../../assets/images/News/mondarmonitour.jpg";
import "./news.css";

const News = () => {
  return (
   <>
    <img src={news} style={{width:"100%"}}/>
    <div className="container w-75">
        <div className="d-flex flex-column align-items-center my-4">
          <div className="d-flex justify-content-center w-100">
            <img className="newsimg" src={new2} style={{ width: "80%" }} alt="News 2" />
          </div>
          <div className="d-flex justify-content-center w-100 mt-3">
            <img className="newsimg" src={new1} style={{ width: "80%" }} alt="News 1" />
          </div>
        </div>
      </div>
   </>
  )
}

export default News
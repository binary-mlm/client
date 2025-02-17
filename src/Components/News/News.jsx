import React from 'react'
import news from "../../assets/images/news.png";
import new1 from "../../assets/images/News/udbhab_news.jpg";
import "./news.css";

const News = () => {
  return (
   <>
    <img src={news} style={{width:"100%"}}/>
    <div className='container w-75'>
    <div className='d-flex justify-content-center my-4'>
      <img className='newsimg' src={new1} style={{width:"80%" }}/>
    </div> 
    </div>
   </>
  )
}

export default News
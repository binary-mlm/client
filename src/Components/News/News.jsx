import React from 'react'
import news from "../../assets/images/news.png"

const News = () => {
  return (
   <>
    <img src={news} style={{width:"100%"}}/>
    <div className='container w-75'>
    No awards or rewards are currently available. 
    </div>
   </>
  )
}

export default News
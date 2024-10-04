import React from 'react'
import vision from "../../../../assets/images/banners/visionmission.jpg"
import visionimg from "../../../../assets/images/visi.jpeg";
import misionimg from "../../../../assets/images/mission.jpg"
import "./vision.css"
const Vision = () => {
  return (
    <>
    <img src={vision} style={{width:"100%"}}/>
<div className='container my-4'>
<div className="row">
            <div className="col-md-12 mt-4 text-center">
              <div className="alert alert_info">
                <p className="text_style px-5">
                <blockquote className='blockquote'>“The fortunes of the new millennium will be created in the Wellness Industry“
                <footer className="blockquote-footer mt-2">From Utbhab team</footer>
                </blockquote>
                 
                </p>
              </div>
            </div>
          </div>

<div className='row'>
<div className='col-lg-4'>
  <div>
    <img src={visionimg} style={{width:"100%"}} />
  </div>
</div>
<div className='col-lg-8 visiontitle'>
<div>The wealthiness industry encompasses a wide range of sectors focused on personal finance, investment, and wealth management. This industry includes financial advisory services, investment firms, asset management, and fintech companies that provide tools and resources for individuals looking to grow and manage their wealth. 

In recent years, the industry has evolved significantly due to technological advancements and a shift toward digital platforms, making financial services more accessible. Robo-advisors, online trading platforms, and personal finance apps have democratized investment opportunities, allowing people from all backgrounds to participate in wealth-building strategies.
</div>
</div>
  
</div>
<div className='row mt-4'>
<div className='col-lg-8 '>
  <div className='visiontitle'>
  the wealthiness industry emphasizes education, offering resources that empower individuals to make informed financial decisions. Financial literacy programs and investment seminars are increasingly popular, helping people navigate complex financial landscapes.

As global wealth continues to grow, especially among emerging markets, the demand for innovative wealth management solutions is expected to rise. This presents significant opportunities for companies to cater to a diverse clientele, ensuring they can achieve their financial goals and secure their futures. Overall, the wealthiness industry plays a crucial role in fostering financial independence and economic growth
  </div>
</div>
<div className='col-lg-4'>
<div><img src={misionimg} style={{width:"100%"}} /></div>

</div>
  
</div>


</div>
    </>
    
   
  )
}

export default Vision
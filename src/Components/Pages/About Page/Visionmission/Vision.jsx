import React from 'react'
import vision from "../../../../assets/images/banners/visionmission.png"
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
                <blockquote className='blockquote'>“The leaders of tomorrow will emerge from the Innovation Industry“
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
<div className='col-lg-8 visiontitle' style={{textAlign:"justify"}}>
<div>The wellness industry encompasses a wide range of sectors focused on personal finance, investment, and wealth management. This industry includes financial advisory services, investment firms, asset management, and fintech companies that provide tools and resources for individuals looking to grow and manage their wealth. 

In recent years, the industry has evolved significantly due to technological advancements and a shift toward digital platforms, making financial services more accessible. Robo-advisors, online trading platforms, and personal finance apps have democratized investment opportunities, allowing people from all backgrounds to participate in wealth-building strategies.
</div>
</div>
  
</div>
<div className='row mt-4'>
<div className='col-lg-8 '>
  <div className='visiontitle' style={{textAlign:"justify"}}>
  Udbhab Marketing Pvt. Ltd. is a dynamic direct selling company that empowers individuals through a diverse range of innovative products, including health, wellness, and beauty items. Focused on personal and financial growth, Udbhab provides distributors with comprehensive training and support, enabling them to build their own businesses. We have 6 type of category in segment. The company emphasizes ethical practices and customer satisfaction, fostering a trustworthy community. By leveraging digital marketing strategies, Udbhab enhances the direct selling experience, helping members reach wider audiences and achieve their financial goals.
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
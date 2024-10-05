import React from 'react'
import manage from "../../../../assets/images/banners/management.png"
import "./management.css"
import kushal from "../../../../assets/images/kushal.jpg";
import Dipan from "../../../../assets/images/dipan.jpg";
import sourav from "../../../../assets/images/sourav.jpg";

const Management = () => {
  return (
    <>
      <img src={manage} style={{width:"100%"}}/>
      <div className='container'>
      <div className="row">
            <div className="col-md-12 mt-4">
              <div className="alert alert_info">
                <p className="text_style px-5">
                <blockquote className='blockquote'>
                Utbhab is spearheaded by a team of extremely committed promoters as well as a team of young, enthusiastic and experienced professionals who are ever-ready to serve our Preferred Customers and Independent Business Owners, with a smile.
                <footer className="blockquote-footer mt-2">From Utbhab team</footer>
                </blockquote>
                 
                </p>
              </div>
            </div>
          </div>
      
      <div>
        <h2 className='fw-bold text-center'>Company Directors</h2>
      </div>
      <div className='row cardteam mb-2'>
        <div className='col-lg-3'>
        <img src={kushal}  className='img-fluid' style={{padding:"4%"}}/>
        
        </div>
        <div className='col-lg-9'>
        <div className='team-title'>
          Kushal Saha
        </div>
        <div className='designation mt-2' >Managing Director (MD)</div><br/>
        <div className='team-text'>Kushal Saha is a highly self-motivated visionary young entrepreneur who decisively leads Udbhab from the front as a MD. His combined rich experience of over 5 years in the finance sector, wellness industry has enabled him to take astute business decisions which has made Udbhab a powerful value-based business idea and a well-known brand across India. His management prowess including the leadership skills, ability to take risks, make quick business decisions and efficiently implement them have made him a skilful entrepreneur and an adorable face of the company.
        </div>
      </div></div>
      <div className='row cardteam mb-2'>
        <div className='col-lg-9'>
        <div className='team-title'>
        Dipan Das
        </div>
        <div className='designation mt-2'>Co-founder & Director</div><br/>
        <div className='team-text'>Dipan Das is a co-founder of Udbhab marketing pvt. ltd., recognised for his entrepreneurial spirit and leadership in the industry. With a background in business strategy, trading and marketing for 6 years, Dipan has been pivotal in shaping the company’s vision and operational framework. Dipan is also keen on leveraging technology to enhance the direct selling experience, utilising digital tools to expand reach and streamline operations. His innovative approach and commitment to personal development make him a vital force in driving the company’s growth and success in the competitive direct selling landscape.  </div>
        
        </div>
        <div className='col-lg-3'>
        <img src={Dipan}  className='img-fluid' style={{padding:"4%"}}/>
         </div>
      </div>
      <div className='row cardteam mb-2'>
        <div className='col-lg-3'>
        <img src={sourav}  className='img-fluid' style={{padding:"4%"}}/>
        
        </div>
        <div className='col-lg-9'>
        <div className='team-title'>
        Sourav Basak
        </div>
        <div className='designation mt-2'>Chief Technology Officer (CTO)</div><br/>
        <div className='team-text'>Sourav Basak is the tech backbone of Udbhab marketing pvt. ltd., He plays a crucial role in modern technological innovation and digital transformation in previous. With a strong background in software development and IT strategy, Sourav is responsible for overseeing the company’s technology initiatives, ensuring that they align with business goals. He focuses on developing robust digital platforms that enhance the direct selling experience for distributors and customers alike. Sourav is dedicated to leveraging emerging technologies, such as data analytics and automation, to streamline operations and improve efficiency. </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Management
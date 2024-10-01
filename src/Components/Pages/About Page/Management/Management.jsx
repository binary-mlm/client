import React from 'react'
import manage from "../../../../assets/images/banners/management.jpg"
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
        <div className='designation'>Chairman & Managing Director (CMD)</div>
        <div className='team-text'>Kushal Saha is a highly self-motivated visionary young entrepreneur who decisively leads Utbhab from the front. His combined rich experience of over 20 years in the real estate, wellness industry and the direct selling industry has enabled him to take astute business decisions which has made Utbhab a powerful value-based business idea and a well-known brand across India.
         His management prowess including the leadership skills, ability to take risks, make quick business decisions and efficiently implement them have made him a skilful entrepreneur and an adorable face of the company. At Utbhab, he pays special attention to offering quality products, right from its conceptualization, research & development, manufacturing, international standard packaging and affordable pricing and looks-after the over-all operations of Utbhab including business development and training. His high-voltage passionate speeches profoundly inspire each and everyone. He supervises timely and efficient services to Utbhab customers and Independent Business Owners and creates a grand vision for them to lead towards massive success.</div>
        </div>
      </div>
      <div className='row cardteam mb-2'>
        <div className='col-lg-9'>
        <div className='team-title'>
        Dipan Das
        </div>
        <div className='designation'>Chairman & Managing Director (CMD)</div>
        <div className='team-text'>Dipan Das is a highly self-motivated visionary young entrepreneur who decisively leads Utbhab from the front. His combined rich experience of over 20 years in the real estate, wellness industry and the direct selling industry has enabled him to take astute business decisions which has made Utbhab a powerful value-based business idea and a well-known brand across India.
         His management prowess including the leadership skills, ability to take risks, make quick business decisions and efficiently implement them have made him a skilful entrepreneur and an adorable face of the company. At Utbhab, he pays special attention to offering quality products, right from its conceptualization, research & development, manufacturing, international standard packaging and affordable pricing and looks-after the over-all operations of Utbhab including business development and training. His high-voltage passionate speeches profoundly inspire each and everyone. He supervises timely and efficient services to Utbhab customers and Independent Business Owners and creates a grand vision for them to lead towards massive success.</div>
       
       
        
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
        <div className='designation'>Chairman & Managing Director (CMD)</div>
        <div className='team-text'>Sourav Basak, a Science graduate from the Kolkata University, brings-in his vast experience of over 14 years in a wide range of management roles to SHPL. Earlier, he was the Senior Sales Manager, responsible for the development and management of healthcare products along with overseeing the divisional offices across India. Today, being one of the directors of SHPL, he handles the key portfolio of HR and Admin, inventory, warehouse management and logistics with seamless distribution of SHPL products across India. His never-say die attitude is unquestionably inspiring. He is an able administrator, terrific team player and a witty orator. </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Management
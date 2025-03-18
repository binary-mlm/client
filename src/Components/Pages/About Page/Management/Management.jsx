import React from 'react'
import manage from "../../../../assets/images/banners/management.png"
import "./management.css"
import kushal from "../../../../assets/images/kushal.jpg";
import Dipan from "../../../../assets/images/dipan.jpg";
import sourav from "../../../../assets/images/sourav.jpg";
import kesto from "../../../../assets/images/kesto.png";

const Management = () => {
  return (
    <>
      <img src={manage} style={{width:"100%"}}/>
      <div className='container'>
      <div className="row">
            <div className="col-md-12 mt-4">
              <div className="alert alert_info">
                <p className="text_style px-5" >
                <blockquote className='blockquote' style={{lineHeight:"26px"}}>
                Udbhab is spearheaded by a team of extremely committed promoters as well as a team of young, enthusiastic and experienced professionals who are ever-ready to serve our Preferred Customers and Independent Business Owners, with a smile.
                <footer className="blockquote-footer mt-2">From Udbhab team</footer>
                </blockquote>
                 
                </p>
              </div>
            </div>
          </div>
      
      <div>
        <h2 className='fw-bold text-center'>Managements</h2>
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
        <div className='team-text' style={{textAlign:"justify"}}>Kushal Saha is a highly self-motivated visionary young entrepreneur who decisively leads Udbhab from the front as a MD. His combined rich experience of over 5 years in the finance sector, wellness industry has enabled him to take astute business decisions which has made Udbhab a powerful value-based business idea and a well-known brand across India. His management prowess including the leadership skills, ability to take risks, make quick business decisions and efficiently implement them have made him a skilful entrepreneur and an adorable face of the company.Under his leadership, the company has prioritized personal development and financial literacy, equipping distributors with the tools they need to succeed. Kushal believes that direct selling is not just about sales; it’s about building relationships and fostering a supportive network.
        His commitment to innovation is evident in the company’s use of technology to enhance the distributor experience, making it easier for individuals to connect, learn, and grow their businesses. Kushal also champions sustainability, ensuring that the company’s practices benefit both people and the planet.
        </div>
      </div></div>
      <div className='row cardteam mb-2'>
        <div className='col-lg-9 order-lg-1 order-2'>
        <div className='team-title'>
         Kesto Das
        </div>
        <div className='designation mt-2' >Chief Executive Officer (CEO)</div><br/>
        <div className='team-text' style={{textAlign:"justify"}}>Kesto Das, Chief executive officer of Udbhab Marketing Pvt. Ltd., with 16 years of expertise in business strategy, trading, and marketing. He has been instrumental in shaping the company's vision and leveraging technology to enhance direct selling through digital tools. Under his leadership, the company creates opportunities for individuals to achieve financial independence and personal growth as independent distributors.

Kesto Das advocates for entrepreneurship that empowers people to unlock their potential while emphasizing ethical practices and sustainability. His innovative approach and focus on community engagement have earned trust and respect from consumers and distributors. A passionate mentor, Kesto Das shares insights through workshops and seminars, inspiring others to pursue entrepreneurial success.

With a strong commitment to fostering innovation, Kesto Das has introduced groundbreaking initiatives to streamline operations and strengthen distributor networks. His dedication to continuous improvement ensures Udbhab Marketing remains at the forefront of the industry. Kesto Das’s belief in collaborative success makes him a driving force behind the company’s long-term growth and impact. </div>
      </div>
      <div className='col-lg-3 order-lg-2 order-1'>
        <img src={kesto}  className='img-fluid' style={{padding:"4%"}}/>
        </div></div>
      <div className='row cardteam mb-2'>
      <div className='col-lg-3'>
        <img src={Dipan}  className='img-fluid' style={{padding:"4%"}}/>
         </div>
        <div className='col-lg-9'>
        <div className='team-title'>
        Dipan Das
        </div>
        <div className='designation mt-2'>Co-founder & Director</div><br/>
        <div className='team-text' style={{textAlign:"justify"}}>Dipan Das is a co-founder of Udbhab marketing pvt. ltd., recognised for his entrepreneurial spirit and leadership in the industry. With a background in business strategy, trading and marketing for 6 years, Dipan has been pivotal in shaping the company’s vision and operational framework. Dipan is also keen on leveraging technology to enhance the direct selling experience, utilising digital tools to expand reach and streamline operations. His innovative approach and commitment to personal development make him a vital force in driving the company’s growth and success in the competitive direct selling landscape.Under his leadership, the company has focused on creating opportunities for individuals from diverse backgrounds, enabling them to become successful independent distributors. Dipan believes in the potential of every person, advocating for a model that not only drives sales but also fosters personal development and financial independence.
His commitment to ethical practices and sustainability has set his company apart, garnering respect and trust from both consumers and distributors. Dipan frequently shares his insights through workshops and seminars, motivating others to pursue their entrepreneurial dreams.
Overall, Dipan Das exemplifies how passion, integrity, and a focus on community can lead to remarkable success in the direct selling space.  </div>
        
        </div>
       
      </div>
      {/* <div className='row cardteam mb-2'>
       
        <div className='col-lg-9 order-lg-1 order-2'>
        <div className='team-title'>
        Sourav Basak
        </div>
        <div className='designation mt-2' >Co-founder & Director</div><br/>
        <div className='team-text' style={{textAlign:"justify"}}>Sourav Basak is the tech backbone of Udbhab marketing pvt. ltd., He plays a crucial role in modern technological innovation and digital transformation in previous. With a strong background in software development and IT strategy, Sourav is responsible for overseeing the company’s technology initiatives, ensuring that they align with business goals. He focuses on developing robust digital platforms that enhance the direct selling experience for distributors and customers alike. Sourav is dedicated to leveraging emerging technologies, such as data analytics and automation, to streamline operations and improve efficiency.Under his guidance, the company has flourished by focusing on comprehensive training and mentorship programs for its distributors. Sourav emphasizes the importance of personal growth alongside business success, helping individuals not only enhance their sales skills but also develop leadership qualities.
        His vision includes leveraging technology to create a more accessible and engaging platform for distributors, allowing them to connect with one another and access resources easily. Sourav is also passionate about promoting ethical practices, ensuring that the company operates transparently and sustainably. </div>
        </div>
        <div className='col-lg-3 order-lg-2 order-1'>
        <img src={sourav}  className='img-fluid' style={{padding:"4%"}}/>
        
        </div>
      </div> */}
      </div>
    </>
  )
}

export default Management

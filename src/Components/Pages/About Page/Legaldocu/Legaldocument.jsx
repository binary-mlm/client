import React,{useState,useEffect} from 'react'
import  legal from "../../../../assets/images/banners/legal.png"

const Legaldocument = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    // Simulating a data fetch
    const fetchedPhotos = [
      { id: 1, src: 'https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg', alt: 'Image 51' },
      { id: 2, src: 'https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg', alt: 'Image 2' },
      { id: 3, src: 'https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg', alt: 'Image 3' },
      { id: 4, src: 'https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg', alt: 'Image 4' },
      { id: 5, src: 'https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg', alt: 'Image 5' },
    ];
    setPhotos(fetchedPhotos);
  }, []);
  
  return (
   <>
   <img src={legal} style={{width:"100%"}}/>
     <div className="row m-5">
     
      {photos.map((photo) => (
        <div  key={photo.id} className="col-lg-3 mb-4">
          <img src={photo.src} alt={photo.alt} style={{width:"82%"}} />
        </div>
        
      ))}
      </div>
    
   </>
  )
}

export default Legaldocument
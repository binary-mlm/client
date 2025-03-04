import React, { useState, useEffect } from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import legal from "../../../../assets/images/banners/legal.png";
import pan from "../../../../assets/images/Legaldocu/pan.jpg";
import doc1 from "../../../../assets/images/Legaldocu/docu2.jpg";
import doc2 from "../../../../assets/images/Legaldocu/docu3.jpg";
import doc3 from "../../../../assets/images/Legaldocu/pic4.jpg";
import doc4 from "../../../../assets/images/Legaldocu/udbhab.jpg";
import doc5 from "../../../../assets/images/Legaldocu/udbhab_reg.jpg";

const Legaldocument = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Simulating a data fetch
    const fetchedPhotos = [
      { id: 1, src: pan, alt: 'Image 1' },
      { id: 2, src: doc1, alt: 'Image 2' },
      { id: 3, src: doc2, alt: 'Image 3' }, 
      { id: 4, src: doc3, alt: 'Image 4' },
      { id: 5, src: doc4, alt: 'Image 5' },
      { id: 6, src: doc5, alt: 'Image 6' },
    ];
    setPhotos(fetchedPhotos);
  }, []);
  const onInit = () => {
    console.log('lightGallery has been initialized');
};

  return (
    <>
      <img src={legal} style={{ width: "100%" }} alt="Legal Banner" />
      
      <LightGallery  plugins={[lgThumbnail, lgZoom]} onInit={onInit} >
        
        {photos.map((photo) => (
          

          <div key={photo.id} className="col-lg-3 mb-4">
          <a href={photo.src}>
              <img src={photo.src} alt={photo.alt} style={{ width: "100%" }} />
            </a>
          
          </div>
        ))}
        
      </LightGallery>
    </>
  );
};

export default Legaldocument;

import React, { useState } from 'react';
import './lightbox.css';  // Custom CSS for styling
import legal from "../../../../assets/images/banners/legal.png";
import pan from "../../../../assets/images/Legaldocu/pan.jpg";
import doc1 from "../../../../assets/images/Legaldocu/docu2.jpg";
import doc2 from "../../../../assets/images/Legaldocu/docu3.jpg";
import doc3 from "../../../../assets/images/Legaldocu/pic4.jpg";
import doc4 from "../../../../assets/images/Legaldocu/udbhab.jpg";
import doc5 from "../../../../assets/images/Legaldocu/udbhab_reg.jpg";
const Legaldocument = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const photos = [
     { id: 1, src: pan, alt: 'Image 1' },
          { id: 2, src: doc1, alt: 'Image 2' },
          { id: 3, src: doc2, alt: 'Image 3' }, 
          { id: 4, src: doc3, alt: 'Image 4' },
          { id: 5, src: doc4, alt: 'Image 5' },
          { id: 6, src: doc5, alt: 'Image 6' },
  ];

  const openLightbox = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img src={legal} style={{ width: "100%" }} alt="Legal Banner" />
      <div className="gallery">
      
        
        {photos.map((photo, index) => (
          <div className="gallery-item" key={index} onClick={() => openLightbox(photo.src)}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}

      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={currentImage} alt="Selected" />
            <span className="close" onClick={closeLightbox}>&times;</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Legaldocument;

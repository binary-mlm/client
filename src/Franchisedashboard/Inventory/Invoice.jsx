import React, { useEffect, useRef } from 'react';
import Modal from "react-modal";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// import { FaPrint } from 'react-icons/fa'; // Import the print icon

const Invoice = ({ isOpen, onClose, cart, userSponsorId, totalPrice }) => {
  const invoiceRef = useRef(null); // Reference to the invoice HTML

  const customStyles = {
    content: {
      top: '15%',
      left: '20%',
      width: "60%",
      marginRight: '-20%',
    },
  };

  const generatePdf = () => {
    html2canvas(invoiceRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190; // Adjust based on your design
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("invoice.pdf");
    });
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    if (isOpen) {
      generatePdf(); // Automatically generate PDF when the modal opens
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Invoice" style={customStyles}>
      <div ref={invoiceRef} style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Invoice</h2>
        <p>Sponsor ID: {userSponsorId}</p>
        <h3>Products:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={item.productId}>
              Product ID: {item.productId}, Quantity: {item.quantity}, Price: ${item.price}
            </li>
          ))}
        </ul>
        <h3>Total Price: ${totalPrice}</h3>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button className='addtocart' onClick={handlePrint}>
          <i className='fa fa-print'></i> Print Invoice
        </button>
        <button className='addtocart' onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default Invoice;

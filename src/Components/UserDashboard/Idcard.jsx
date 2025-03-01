import React, { useRef , useState , useEffect} from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import photo from "../../assets/images/idba.jpg"
// import pic from "../../assets/images/srijani.jpg";
import "./Css/idcard.css";
import bg1 from "../../assets/images/1.jpg";
const Idcard = () => {
  const invoiceRef = useRef();
  const [userphoto, setUserphoto] = useState(null);

  const downloadPDF = () => {
    // alert("Downloading")
    const input = invoiceRef.current;
   
    html2canvas(input, {
      useCORS: true,  // Allow cross-origin images
      allowTaint: true, // Allow tainted cross-origin images
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Myidcard.pdf");
    });
  }
  const ROOT_URL= import.meta.env.VITE_LOCALHOST_URL;
  const username = sessionStorage.getItem("username");
  const mySponsorId = sessionStorage.getItem("mySponsorId");
  const contactNumber = sessionStorage.getItem("usermobilenumber");

  useEffect(() => {
    if(mySponsorId){
      axios.post(ROOT_URL + `/api/user/profilephoto`,{ mySponsorId })
      .then((res) => {
         console.log(res);
        setUserphoto(res.data.profilephoto);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  })
  return (
    <div>
      </div>
       
     
    
  );
};

export default Idcard;

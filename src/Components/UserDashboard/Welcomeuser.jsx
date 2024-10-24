import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Css/welcome.css';
import pic2 from "../../assets/images/udbhab.png";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Welcomeuser() {
    const [name, setName] = useState('');
    const [sponsorId, setsponsorId] = useState('');
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const userId = sessionStorage.getItem("userid");

    useEffect(() => {
        if (userId) {
            UserData();
        } else {
            console.log('No user ID found in session storage');
        }
    }, [userId]);

    const UserData = async () => {
        try {
            const response = await axios.get(`${ROOT_URL}/api/auth/findUser/${userId}`);
            // console.log(response.data);
            setName(response.data.name);
            setsponsorId(response.data.mySponsorId);
        } catch (err) {
            console.error('Failed to fetch user data:', err);
        }
    };

    const invoiceRef = useRef();

    const downloadPDF = () => {
        const input = invoiceRef.current;

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('invoice.pdf'); // You can customize the name of the file
        });
    };

    return (
        <>
            <div className='invoice mt-5'>
            <div className='d-flex justify-content-end'>
               <button className='signupbutton m-3'><i className="fa fa-download" style={{ fontSize: "20px", color:"white" }} onClick={downloadPDF}></i> Download</button> 
               </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div ref={invoiceRef}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='double-border'>
                                            <div className='row'>
                                                <div className='col-lg-12'>
                                                    <div className='container mt-4'>
                                                        <div className='row'>
                                                            <div className='col-lg-6'>
                                                                <p>Hello {name}</p>
                                                            </div>
                                                            <div className='col-lg-6 text-end'>
                                                                <img src={pic2} width={130} style={{ marginTop: "-20px" }} alt="Udbhab Logo" />
                                                            </div>
                                                        </div>
                                                        <p>
Thank you for being a part of Udbhab Marketing Private Limited. By doing so, you have taken one of the most important decisions of your life that has the potential to transform your future. I take this occasion to heartily congratulate you and extend a warm welcome to this ever-growing Udbhab Marketing family.

Since 4th October, 2024, we have been committed to building a strong and vibrant network of consumers across India. We offer over 300 world-class products and services with excellent packaging, affordable pricing, and value-for-money benefits. No wonder, Udbhab Marketing products are on their way to becoming a household name, and we are excited to have you representing them. We wish you all the very best in this journey.

Udbhab Marketing provides a legitimate and ethical entrepreneurship opportunity where you can build a successful career through commitment, focus, and hard work. Our compensation plan is designed to reward you generously with lucrative sales commissions, and I invite you to give your 100% to achieve both time and financial freedom.

Before you start actively building your Udbhab Marketing business, I encourage you to use our products, experience their benefits, and equip yourself with sufficient knowledge of all the offerings. Once you're familiar with them, study the Udbhab Marketing business plan, explore our website, and understand the IBO Back Office well. Adequate preparation is the hallmark of a true champion. In case you need any assistance, feel free to contact our Support Team, who will be more than happy to assist you. Kindly mention your 
<span className='ms-1'>{sponsorId}</span>  in all future communication with us.

Once again, welcome to the Udbhab Marketing family! Congratulations on choosing to build an exciting career with us. We look forward to working closely with you.

I wish you all the very best. May all your dreams come true.


        </p>
        <p>Warm regards,  <br/>
        Udbhab Marketing Private Limited</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcomeuser;

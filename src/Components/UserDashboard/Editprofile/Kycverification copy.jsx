import React, { useState } from "react";
// import user from '../../../assets/images/trainer.png';
import './kyc.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Kycverification = () => {
  const mySponsorId = sessionStorage.getItem('mySponsorId');
  const name = sessionStorage.getItem('username');
  const mobileNumber = sessionStorage.getItem('usermobilenumber');
  const [bankName , setbankname] = useState('');
  const [accountNumber , setaccountNumber] = useState('');
  const [panCard , setpanCard] = useState('');
  const [branchName, setbranchName] = useState('');
  const [ifscCode , setifscCode] = useState('');
  const [aadharCard , setaadharCard] = useState('');
  // State to store preview images
  const [panCardFront, setpanCardFront] = useState(null);
  const [aadharCardFront, setaadharCardFront] = useState(null);
  const [aadharCardBack, setaadharCardBack] = useState(null);
  const [bankCard, setbankCard] = useState(null);
  const navigate = useNavigate()


  // Handle file input and set preview
  const handleImageChange = (event, setPreview) => {
    const file = event.target.files[0];
    if (file) {
     
      setPreview(file); // Set the preview URL for the specific image
    }
  };

  const handlekycsubmit = async (event)=>{
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    event.preventDefault();
    await axios.post(ROOT_URL+'/api/user/submitKycDetails/', { mySponsorId, name,  mobileNumber, 
      bankName, 
      branchName,
      accountNumber,
      ifscCode, 
      panCard,
      aadharCard,
      panCardFront,
      aadharCardFront,
      aadharCardBack,
      bankCard },{
        headers: {
          'Content-Type': 'multipart/form-data',
        },

     })
        .then(res => {
            console.log(res.data);
            
            swal("Thank You!", "KYC submitted successfully!", "success");
            navigate('/userdashboard')
            
        })
        .catch(err => {
            console.log(err);
            swal("Error!", err.response.data.message || 'Error submitting KYC. Please try again.', "error");
        })
  }

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div>
                    <div style={{ backgroundColor: "#2F4F4F" }}>
                      <p className="text-white ms-3 p-2 fw-bold">
                        IBO APPLICATION WITH UDBHAB CODE OF ETHICS & CODE OF CONDUCT ACCEPTANCE
                      </p>
                    </div>

                    <div className="mb-3 row">
                      <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                        Udbhab User ID
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          readOnly
                          className="form-control-plaintext bg-light p-2"
                          value={mySponsorId}
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control-plaintext bg-light p-2"
                          value={name}
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Registered Mobile Number
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control-plaintext bg-light p-2"
                          value={mobileNumber}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* next part */}
            <div>
              <div className="main-content-label mg-b-5 mt-3" style={{ backgroundColor: "#2F4F4F" }}>
                <p className="text-white ms-3 p-2 fw-bold">MANUAL KYC VERIFICATION (ONLY)</p>
              </div>
              <div className="card">
                <div className="row row-xs align-items-center mg-b-20 mb-3">
                  <div className="col-md-6">
                    <input className="form-control mt-2 ms-2" name="your_bankname_mk" placeholder="Enter Your Bank Name" type="text" required onChange={e =>setbankname(e.target.value)} />
                    <input className="form-control mt-2 ms-2" name="your_accountno_mk" placeholder="Enter Your Bank A/c Number" type="number" required onChange={e =>setaccountNumber(e.target.value)}/>
                    <input className="form-control mt-2 ms-2" name="your_pan_no_mk" placeholder="Enter Your PAN" type="text" required onChange={e =>setpanCard(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <input className="form-control mt-2" name="your_branchname_mk" placeholder="Enter Your Branch Name" type="text" required onChange={e =>setbranchName(e.target.value)} />
                    <input className="form-control mt-2 me-2" name="your_ifsccode_mk" placeholder="Enter Your IFSC" type="text" required onChange={e =>setifscCode(e.target.value)}/>
                    <input className="form-control mt-2 me-2" name="your_aadhar_no_mk" placeholder="Enter Your AADHAR" type="number" required onChange={e =>setaadharCard(e.target.value)} />
                  </div>
                </div>
              </div>
              <h5 id="note_details" className="mt-3 text-center">NOTE: After submit you have to upload all 4 images below. Otherwise your KYC will not be accepted by us.</h5>
              <div className="row" style={{ width: "123%" }}>
                {/* PAN Card Front Preview */}

                <div className="col-md-3 imgUp">
                <div><label className="upload w-100 p-2">Upload your PAN Card (Front Side) image</label></div>
                  <div className="imagePreview">
                    {panCardFront ? (
                      <img src={URL.createObjectURL(panCardFront)} alt="Pan Front" className="img-thumbnail" />
                    ) : (
                      
                     <>
                      <span>noimage</span>
                     </>
                    )}
                  </div>
                 
                    <div>
                    <input type="file" className="uploadFile img mt-2" onChange={(e) => handleImageChange(e, setpanCardFront)} />
                    </div>
                </div>
              

                {/* Aadhar Front Preview */}
                <div className="col-md-3 imgUp">
                <div><label className="upload w-100 p-2">Upload your Aadhar Card (Front Side) image</label></div>
                  <div className="imagePreview">
                    {aadharCardFront ? (
                      <img src={URL.createObjectURL(aadharCardFront)} alt="Aadhar Front" className="img-thumbnail" />
                    ) : (
                      
                     <>
                      <span>noimage</span>
                     </>
                    )}
                  </div>
                 
                    <div>
                    <input type="file" className="uploadFile img mt-2" onChange={(e) => handleImageChange(e, setaadharCardFront)} />
                    </div>
                </div>

                {/* Aadhar Back Preview */}
                <div className="col-md-3 imgUp">
                <div><label className="upload w-100 p-2">Upload your Aadhar Card (Back) image</label></div>
                  <div className="imagePreview">
                    {aadharCardBack ? (
                      <img  src={URL.createObjectURL(aadharCardBack)} alt="Aadhar Back" className="img-thumbnail" />
                    ) : (   
                     <>
                      <span>noimage</span>
                     </>
                    )}
                  </div>
                    <div>
                    <input type="file" className="uploadFile img mt-2" onChange={(e) => handleImageChange(e, setaadharCardBack)} />
                    </div>
                </div>

                {/* Bank Card Preview */}
                <div className="col-md-3 imgUp">
                <div><label className="upload w-100 p-2">Upload Bank Passbook (Passbook/Cancel Cheque)</label></div>
                  <div className="imagePreview">
                    {bankCard ? (
                      <img  src={URL.createObjectURL(bankCard)} alt="Bank passbook" className="img-thumbnail" />
                    ) : (
                      
                     <>
                      <span>noimage</span>
                     </>
                    )}
                  </div>
                 
                    <div>
                    <input type="file" className="uploadFile img mt-2" onChange={(e) => handleImageChange(e, setbankCard)} />
                    </div>
                </div>
              </div>
              <button className="signupbutton w-25 mt-4" onClick={handlekycsubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kycverification;

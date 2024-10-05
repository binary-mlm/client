import React from "react";
 import user from '../../../assets/images/trainer.png'
 import './kyc.css'
const Kycverification = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div>
                    <div className="bg-success ">
                      <p className=" text-white ms-3 p-2 fw-bold ">
                      IBO APPLICATION WITH SHPL CODE OF ETHICS & CODE OF CONDUCT ACCEPTANCE
                      </p>
                    </div>

                    <div className="mb-3 row">
                      <label for="staticEmail" class="col-sm-3 col-form-label">
                        SHPL User ID
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          readonly
                          className="form-control-plaintext  bg-light"
                          id="staticEmail"
                          value="SH2814552"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        className="col-sm-3 col-form-label"
                      >
                        Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control-plaintext bg-light"
                          value="AVIJIT CHAKRABORTY"
                          id="inputPassword"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        className="col-sm-3 col-form-label"
                      >
                        Registered Mobile Number
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control-plaintext  bg-light"
                          value="9836314437"
                          id="inputPassword"
                        />
                      </div>
                      <div className="d-flex">
                      <input class="form-check-input" type="checkbox" id="disclaimer_show" name="disclaimer"/>
                      
By ticking this box, I acknowledge that I have completely read and fully understood the Agreement: Code of Ethics and Code of Conduct

                      </div>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            {/* next part */}
            <div>
            <div class="main-content-label mg-b-5 mt-3 bg-success">
            <p className=" text-white ms-3 p-2 fw-bold ">
MANUAL KYC VERIFICATION (ONLY)</p>
</div>
<div className="card">
    <form className="p-3">
    <div className="row row-xs align-items-center mg-b-20 mb-3">
<div className="col-md-6 mg-t-5 mg-md-t-0">

<input className="form-control mt-2" name="your_bankname_mk" placeholder="Enter Your Bank Name" type="text" required="required" id="your_bankname_mk"/>


<input className="form-control mt-2" name="your_accountno_mk" placeholder="Enter Your Bank A/c Number" type="text" required="required" id="your_accountno_mk"/>


<input className="form-control mt-2" name="your_pan_no_mk" placeholder="Enter Your PAN" type="text" required="required" maxlength="10" id="your_pan_no_mk"/>
</div>


<div className="col-md-6 mg-t-5 mg-md-t-0">

<input className="form-control mt-2" name="your_branchname_mk" placeholder="Enter Your Branch Name" type="text" required="required" id="your_branchname_mk"/>


<input className="form-control mt-2" name="your_ifsccode_mk" placeholder="Enter Your IFSC" type="text" required="required" id="your_ifsccode_mk"/>


<input className="form-control mt-2" name="your_aadhar_no_mk" placeholder="Enter Your AADHAR" type="text" required="required" maxlength="12" id="your_aadhar_no_mk"/>

</div>
    
</div>
{/* <button classNameName="btn btn-primary">Submit</button> */}
</form>
</div>
            </div>
            <h6 id="note_details" className="mt-3">NOTE:After submit you have to upload all 5 image below.
Otherwise you kyc will not be accept by us</h6>
<div className="row" style={{width:"123%"}}>
<div className="col-md-2 imgUp">
<div className="imagePreview" id="pan_front_image_show">
    
</div>
<label className=" btn bg-primary upload w-100">Upload your PAN Card (Front Side)
<input type="file" className="uploadFile img" src={user}  style={{width: "0px",height:"0px",overflow: "hidden"}} id="pan_front_image"/>
</label>

</div>
<div className="col-md-2 imgUp">
<div className="imagePreview" id="pan_front_image_show">
    
</div>
<label className=" btn bg-primary upload w-100">Upload your Addhar Card (Front Side)
<input type="file" className="uploadFile img" src={user}  style={{width: "0px",height:"0px",overflow: "hidden"}} id="pan_front_image"/>
</label>

</div>
<div className="col-md-2 imgUp">
<div className="imagePreview" id="pan_front_image_show">
    
</div>
<label className=" btn bg-primary upload w-100">Upload your Addhar Card (Back Side)
<input type="file" className="uploadFile img" src={user}  style={{width: "0px",height:"0px",overflow: "hidden"}} id="pan_front_image"/>
</label>

</div>
<div className="col-md-2 imgUp">
<div className="imagePreview" id="pan_front_image_show">
    
</div>
<label className=" btn bg-primary upload w-100">Upload Bank Card (Passbook/Cancel Cheque)
<input type="file" className="uploadFile img" src={user}  style={{width: "0px",height:"0px",overflow: "hidden"}} id="pan_front_image"/>
</label>

</div>
{/* <div className="col-md-2 imgUp">
<div className="imagePreview" id="pan_front_image_show">
    
</div>
<label className=" btn bg-primary upload w-100">Upload PAN Card (Front Side)
<input type="file" className="uploadFile img" src={user}  style={{width: "0px",height:"0px",overflow: "hidden"}} id="pan_front_image"/>
</label>

</div> */}

</div>

            </div>
          </div>
        </div>
      
    </>
  );
};

export default Kycverification;

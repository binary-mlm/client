import React ,{useState, useEffect} from 'react'
import "../Pages/Signup_page/usersignup.css"
import { useParams , useNavigate } from "react-router-dom";
import axios from 'axios'
import swal from 'sweetalert';
import statesCities from "../../Data/statecity.json"

const Signupright = () => {
  
  const [registrationType, setregistrationType] = useState('')

  const [gender, setgender] = useState('')
  const [name, setname] = useState('')
  const [dob, setdob] = useState('')
  const [mobileNumber, setmobileNumber] = useState('')
  const [whatsappNumber, setwhatsappNumber] = useState('')
  const [email, setemail] = useState('')
    // const [state_names, setDropdownValue_state] = useState([])
    // const [city, setDropdownValue] = useState([])
    const [district, setSelectedcities] = useState([])
    const [pincode, setpincode] = useState('');
    const [address, setaddress] = useState('');
    const [gstNumber, setgstNumber] = useState('');
    const [password, setpassword] = useState('');

    const [token, setToken] = useState(null);
    const [state, setSelectedState] = useState('');
    const { parentSponsorId } = useParams();
    const API_TOKEN = 'C2dy7lLSGxWm63T6Oem2N9jeUlaE5Y9M59MInjwjc-FksoqRsWk0pa-iKk1LzSfEFy0';
     const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  
     const handleStateChange = (event) => {
      const selectedState = event.target.value;
      setSelectedState(selectedState);
    };
  
    const handleCityChange = (event) => {
      setSelectedcities(event.target.value);
    };

    const handleChange_radiobutton = (event) => {
      setregistrationType(event.target.value);
    };
    const handleChange_genderbutton = (event) => {
      setgender(event.target.value);
    };
   
    const navigate = useNavigate();
    
    

const sponsorId = parentSponsorId;
console.log(sponsorId);
const handleSubmit = async (event) => {
  // alert("sumit")
  event.preventDefault();
  if (registrationType === "" || gender === "" || pincode === "" || name === "" || address === "" || district === "" || state === ""|| dob === "" || mobileNumber === ""  || email === "") {
    swal("Opps!", "Please fill out all required fields!", "error");

}
 
else{
      await axios.post(ROOT_URL+'/api/auth/registerRight', { sponsorId, registrationType,  gender, 
        name, 
        dob,
        mobileNumber,
        whatsappNumber, 
        email,
        state,
        district,
        pincode,
        address,
        gstNumber,
        password })
          .then(res => {
              console.log(res);
              swal("Thank You!", "Registration sucessfully completed!", "success");
              navigate('/userdasboard/genealogy');

          })
          .catch(err => {
              console.log(err);
              swal("Error!", err.response.data.message || 'Error registering user', "error");
             

          })
        }
  

}
  return (
    <>
        <div className="container my-3">
      <div className="row">
        <div className="col-lg-8">
        <div className="row">
            <div className="card formsignup">
              <div className="card-body">
              <form>
              <div className="bg-primary">
                    <h5 className=" text-white ms-3 p-2 text-center">
                    FURNISH YOUR PERSONAL DETAILS
                    </h5>
                  </div>
              <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Sponsor ID
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext  bg-light textinput ps-2"
                        id="staticEmail"
                        value={parentSponsorId}
                        
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Resgistration Type<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                  <div className="col-sm-9 mt-2">
                      <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor ="inlineRadio5">
                          Individual
                        <input
                          className="form-check-input"
                          type="radio"
                          
                          id="inlineRadio5"
                          value="Individual"
                          checked={registrationType === 'Individual'}
          onChange={handleChange_radiobutton}
                        />
                        
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="inlineRadio4">
                      Business Entity
                        <input
                          className="form-check-input"
                          type="radio"
                        
                          id="inlineRadio4"
                          value="Business Entity"
                          checked={registrationType === 'Business Entity'}
                          onChange={handleChange_radiobutton}
                        />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label
                      
                      className="col-sm-3 col-form-label"
                    >
                      Gender<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                  <div className="col-sm-9 mt-2">
                      <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="inlineRadio1">
                          Male
                        <input
                          className="form-check-input"
                          type="radio"
                          
                          id="inlineRadio1"
                          value="Male"
                          checked={gender === 'Male'}
                          onChange={handleChange_genderbutton}
                        />
                        
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="inlineRadio2">
                          Female
                        <input
                          className="form-check-input"
                          type="radio"
                         
                          id="inlineRadio2"
                          value="Female"
                          checked={gender === 'Female'}
                          onChange={handleChange_genderbutton}
                        />
                        
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="inlineRadio1">
                          Others
                        <input
                          className ="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="Others"
                          checked={gender === 'Others'}
                          onChange={handleChange_genderbutton}
                        />
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Name<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput ps-2"
                        id="staticEmail"
                        onChange={e => setname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3 d-flex">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Date of Birth<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="txtdob"
                      name="txtdob"
                      required=""
                      max="2024-09-26"
                      value={dob}
                      onChange={e => setdob(e.target.value)}
                    ></input>
                  </div>
                  
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Mobile no<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        className="form-control-plaintext  bg-light textinput ps-2"
                        onChange={e => setmobileNumber(e.target.value)}
                        
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Whatsapp no
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        className="form-control-plaintext bg-light textinput ps-2"
                        onChange={e => setwhatsappNumber(e.target.value)}
                        
                        
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Email<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control-plaintext  bg-light textinput ps-2"
                        onChange={e => setemail(e.target.value)}
                        
                      />
                    </div>
                  </div>
                 
                  
                  
                  <div className="mb-3 d-flex">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Select State<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <select aria-label=" example" className='form-select' onChange={handleStateChange}>
                                <option value="" label='Enter your State'></option>
                                {statesCities.map((item) => (
                      <option key={item.state} value={item.state}>
                        {item.state}
                      </option>
                    ))}
                            </select>
                    {/* <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput"  
                      />
                    </div> */}
                  </div>
                  <div className="mb-3 d-flex">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label ">
                      Select City<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <select className="form-select mb-3 inputform" aria-label=".form-select-lg example" onChange={handleCityChange}>
                                <option value="Choose city" label=' Enter your city'></option>
                                {(statesCities.find((s) => s.state === state)?.cities || []).map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                                ))}
                            </select>
                    {/* <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput"  
                      />
                    </div> */}
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Pincode<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput ps-2"
                        onChange={e => setpincode(e.target.value)}  
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Address<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                    <textarea name="address" placeholder="Your Address" rows="10" cols="50" required=""
                      onChange={e => setaddress(e.target.value)}> </textarea>
                    </div>
                  </div>
                  {registrationType === 'Business Entity' && (
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      GST Number<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput ps-2"
                        onChange={e => setgstNumber(e.target.value)}
                        
                      />
                    </div>
                  </div>
                  )}
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Password<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput ps-2"
                        onChange={e => setpassword(e.target.value)}
                        
                      />
                    </div>
                  </div>
                  </form>

              </div>
              <div className='text-center'>
              <button className='w-25 mb-4 verifybutton' onClick={handleSubmit}>Submit</button>
              </div>
              
              </div>
              </div>

        </div>
        </div>
        </div>
    </>
  )
}

export default Signupright

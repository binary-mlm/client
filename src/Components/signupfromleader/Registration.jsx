import React ,{useState, useEffect} from 'react'
import "../Pages/Signup_page/usersignup.css"
import { useParams } from "react-router-dom";
import axios from 'axios'
import swal from 'sweetalert';
const Registration = () => {
    
  const [registrationType, setregistrationType] = useState('')
    const [binaryposition, setbinaryposition] = useState('')
  const [gender, setgender] = useState('')
  const [name, setname] = useState('')
  const [dob, setdob] = useState('')
  const [mobileNumber, setmobileNumber] = useState('')
  const [whatsappNumber, setwhatsappNumber] = useState('')
  const [email, setemail] = useState('')
    const [state_names, setDropdownValue_state] = useState([])
    const [city, setDropdownValue] = useState([])
    const [district, setSelectedcities] = useState([])
    const [pincode, setpincode] = useState('');
    const [address, setaddress] = useState('');
    const [gstNumber, setgstNumber] = useState('');
    const [password, setpassword] = useState('');

    const [token, setToken] = useState(null);
    const [state, setSelectedState] = useState('');
    
    const [mobilenoerror, setmobileerror] = useState(false)
    const [wpmobileerror, setwpmobileerror] = useState(false)
    const [emailerror, setemailerror] = useState(false)
    const API_TOKEN = 'C2dy7lLSGxWm63T6Oem2N9jeUlaE5Y9M59MInjwjc-FksoqRsWk0pa-iKk1LzSfEFy0';
     const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const handleDropdownChange_city = (event) => {
        setSelectedcities(event.target.value);
    };
    const handleDropdownChange_state = (event) => {

        setSelectedState(event.target.value);
    };
    const handleChange_radiobutton = (event) => {
      setregistrationType(event.target.value);
    };
    const handleChange_genderbutton = (event) => {
      setgender(event.target.value);
    };
    const handleChange_binarypositionbutton = (event) => {
        setbinaryposition(event.target.value);
      };
   
    useEffect(() => {
        const getAuthToken = async () => {
            try {
                const response = await axios.get("https://www.universal-tutorial.com/api/getaccesstoken", {
                    headers: {
                        'api-token': API_TOKEN,
                        'user-email': 'srijani.banerjee2000@gmail.com',
                    }
                });
                setToken(response.data.auth_token);
            } catch (error) {
                console.log(error);
                // setError(error);
            }
        };

        getAuthToken();
    }, []);

    useEffect(() => {
        if (token) {
            const getStates = async () => {
                try {

                    const response = await axios.get('https://www.universal-tutorial.com/api/states/India', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json'
                        }
                    });
                    console.log(response.data);
                    setDropdownValue_state(response.data);

                } catch (error) {
                    // setError(error);
                    console.log(error);

                }
            };

            getStates();
        }
    }, [token]);
 //city
 useEffect(() => {
    if (state) {
        const getCities = async () => {

            try {
                const response = await axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                    }
                });
                console.log('Cities response:', response.data);
                setDropdownValue(response.data);

            } catch (error) {
                console.error('Error fetching cities:', error);


            }
        };

        getCities();
    }
}, [state, token]);
function mobileHandler(e) {
  let item = e.target.value;
  if (item.length != 10) {
      setmobileerror(true)
  } else {
      setmobileerror(false)
  }
}
function wp_mobileHandler(e) {
  let item = e.target.value;
  if (item.length != 10) {
    setwpmobileerror(true)
  } else {
    setwpmobileerror(false)
  }
}
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function emailHandler(e) {
  let item = e.target.value;
  if (!isValidEmail(item)) {
      setemailerror(true);
  } else {
      setemailerror(false);
  }
}


const sponsorId = sessionStorage.getItem("mySponsorId")
console.log(sponsorId);
const handleSubmit = async (event) => {
   alert("sumit")
  event.preventDefault();
  

}
  return (
   <>
    <div className="container my-3 ">
      <div className="row">
        <div className="col-lg-8">
        <div className="row">
            <div className="card formsignup" style={{left:"25%"}}>
              <div className="card-body">
              <form>
              <div className="bg-primary">
                    <h5 className=" text-white ms-3 p-2 text-center">
                    FURNISH YOUR PERSONAL DETAILS
                    </h5>
                  </div>
              <div className="mb-3 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Sponsor ID
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        readonly
                        className="form-control-plaintext  bg-light textinput ps-2"
                        id="staticEmail"
                        value={sponsorId}
                        
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
                      <label className="form-check-label" for="inlineRadio5">
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
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Binary position<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                  <div className="col-sm-9 mt-2">
                      <div className="form-check form-check-inline">
                      <label className="form-check-label" for="inlineRadio5">
                          Left
                        <input
                          className="form-check-input"
                          type="radio"
                          checked={binaryposition === 'left'}
                          
                          id="inlineRadio5"
                          value="left"
                         
          onChange={handleChange_binarypositionbutton}
                        />
                        
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="inlineRadio4">
                      Right
                        <input
                          className="form-check-input"
                          type="radio"
                        
                          id="inlineRadio6"
                          value="right"
                          checked={binaryposition === 'right'}
                          onChange={handleChange_binarypositionbutton}
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
                      <label className="form-check-label" for="inlineRadio1">
                          Others
                        <input
                          className="form-check-input"
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
                    <label for="staticEmail" className="col-sm-3 col-form-label">
                      Name<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        placeholder='Enter your name'
                        className="form-control-plaintext  bg-light textinput ps-2"
                        id="staticEmail"
                        onChange={e => setname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3 d-flex">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Date of Birth<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <input
                      className="form-control ps-2"
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
                    <label for="staticEmail" className="col-sm-3 col-form-label">
                      Mobile no<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        className="form-control-plaintext  bg-light textinput ps-2"
                        placeholder='Enter your mobile number'
                        onKeyUp={mobileHandler}
                        onChange={e => setmobileNumber(e.target.value)}
                        
                      />
                      {mobilenoerror ? <span className='link-danger'>phone no invalid</span> : ""}
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-3 col-form-label">
                      Whatsapp no<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        placeholder='Enter your whatsapp number'
                        className="form-control-plaintext bg-light textinput ps-2"
                        onKeyUp={wp_mobileHandler}
                        onChange={e => setwhatsappNumber(e.target.value)} 
                      />
                       {wpmobileerror ? <span className='link-danger'>phone no invalid</span> : ""}
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
                        placeholder='Enter your email'
                        onKeyUp={emailHandler}
                        onChange={e => setemail(e.target.value)}
                      />
                      {emailerror ? <span className='link-danger'>Email invalid</span> : ""}
                    </div>
                  </div>
                 
                  
                  
                  <div className="mb-3 d-flex">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Select State<sup><i className="fa fa-asterisk text-danger asterisk"></i> </sup>
                    </label>
                    <select aria-label=" example" className='form-select' onChange={handleDropdownChange_state}>
                                <option value="" label='Enter your State'></option>
                                {Array.isArray(state_names) && state_names.map(state => (
                                    <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
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
                    <select className="form-select mb-3 inputform" aria-label=".form-select-lg example" onChange={handleDropdownChange_city}>
                                <option value="Choose city" label=' Enter your city'></option>
                                {Array.isArray(city) && city.map(city => (
                                    <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
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
                        placeholder='Enter your pincode'
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
                        placeholder='Enter your password'
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

export default Registration
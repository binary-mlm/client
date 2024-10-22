import React ,{useState, useEffect} from 'react'
import "./usersignup.css"
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
const Usersignup = () => {
  // const [sponsorId, setsponsorId] = useState('')
  const [registrationType, setregistrationType] = useState('')
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
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const navigate = useNavigate();
    const sponsorId = sessionStorage.getItem('sponosorid');
   
    const API_TOKEN = 'C2dy7lLSGxWm63T6Oem2N9jeUlaE5Y9M59MInjwjc-FksoqRsWk0pa-iKk1LzSfEFy0';
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


const handleSubmit = async (event) => {
  // alert("sumit")
  event.preventDefault();
      await axios.post(ROOT_URL+'/api/auth/register', { sponsorId, registrationType,  gender, 
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
              console.log(res.data.user.mySponsorId);
              sessionStorage.setItem('mysponosorid', res.data.user.mySponsorId);
              swal("Thank You!", "Registration sucessfully completed!", "success");
              navigate('/login');

          })
          .catch(err => {
              console.log(err);
              swal("Error!", err.response.data.message || 'Error registering user', "error");
          })
  

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
              <div  className="m-1" style={{backgroundColor:"#157ed2"}}>
                    <h5 className=" text-white ms-3 p-2 text-center">
                    FURNISH YOUR PERSONAL DETAILS
                    </h5>
                  </div>
              <div className="mb-3 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Udbhab User ID
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        readonly
                        className="form-control-plaintext  bg-light textinput"
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
                      Resgistration Type
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
                  <div class="mb-3 row">
                    <label
                      
                      className="col-sm-3 col-form-label"
                    >
                      Gender
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
                      <div class="form-check form-check-inline">
                      <label class="form-check-label" htmlFor="inlineRadio2">
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
                      <div class="form-check form-check-inline">
                      <label class="form-check-label" for="inlineRadio1">
                          Others
                        <input
                          class="form-check-input"
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
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput"
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
                      Date of Birth
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
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Mobile no
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        className="form-control-plaintext  bg-light textinput"
                        onChange={e => setmobileNumber(e.target.value)}
                        
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Whatsapp no
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        className="form-control-plaintext bg-light textinput"
                        onChange={e => setwhatsappNumber(e.target.value)}
                        
                        
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" class="col-sm-3 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control-plaintext  bg-light textinput"
                        onChange={e => setemail(e.target.value)}
                        
                      />
                    </div>
                  </div>
                 
                  
                  
                  <div className="mb-3 d-flex">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Select State
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
                      Select City
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
                      Pincode
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput"
                        onChange={e => setpincode(e.target.value)}
                        
                        
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Address
                    </label>
                    <div className="col-sm-9">
                    <textarea name="address" placeholder="Your Address" rows="10" cols="50" required=""
                      onChange={e => setaddress(e.target.value)}> </textarea>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" class="col-sm-3 col-form-label">
                      GST Number
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput"
                        onChange={e => setgstNumber(e.target.value)}
                        
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" class="col-sm-3 col-form-label">
                      Password
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput"
                        onChange={e => setpassword(e.target.value)}
                        
                      />
                    </div>
                  </div>
                  </form>

              </div>
              <div className='text-center'>
              <button className='signupbutton w-25 mb-4' onClick={handleSubmit}>Submit</button>
              </div>
              
              </div>
              </div>

        </div>
        </div>
        </div>
    </>
  )
}

export default Usersignup
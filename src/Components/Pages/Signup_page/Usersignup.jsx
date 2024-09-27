import React ,{useState, useEffect} from 'react'
import "./usersignup.css"
import axios from 'axios'
const Usersignup = () => {
    const [state, setDropdownValue_state] = useState([])
    const [city, setDropdownValue] = useState([])
    const [cities, setSelectedcities] = useState([])
    const [token, setToken] = useState(null);
    const [States, setSelectedState] = useState('');

    const API_TOKEN = 'C2dy7lLSGxWm63T6Oem2N9jeUlaE5Y9M59MInjwjc-FksoqRsWk0pa-iKk1LzSfEFy0';
    const handleDropdownChange_city = (event) => {
        setSelectedcities(event.target.value);
    };
    const handleDropdownChange_state = (event) => {

        setSelectedState(event.target.value);
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
    if (States) {
        const getCities = async () => {

            try {
                const response = await axios.get(`https://www.universal-tutorial.com/api/cities/${States}`, {
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
}, [States, token]);
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
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      SHPL User ID
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        readonly
                        className="form-control-plaintext  bg-light textinput"
                        id="staticEmail"
                        value="SH2814552"
                      />
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
                      />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Gender
                    </label>
                  <div className="col-sm-9 mt-2">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Male
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          Femaile
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Others
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Mobile no
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        className="form-control-plaintext  bg-light textinput"
                        
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
                      class="form-control"
                      type="date"
                      id="txtdob"
                      name="txtdob"
                      required=""
                      max="2024-09-26"
                    ></input>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Pincode
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext  bg-light textinput"
                        
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Address
                    </label>
                    <div className="col-sm-9">
                    <textarea name="address" placeholder="Your Address" rows="10" cols="50" required=""> </textarea>
                    </div>
                  </div>
                  <div className="mb-3 d-flex">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                      Select State
                    </label>
                    <select aria-label=" example" className='form-select' onChange={handleDropdownChange_state}>
                                <option value="" label='Enter your State'></option>
                                {Array.isArray(state) && state.map(state => (
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
                    <label htmlFor="staticEmail" class="col-sm-3 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control-plaintext  bg-light textinput"
                        
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
                        
                      />
                    </div>
                  </div>
                  </form>

              </div>
              <div className='text-center'>
              <button className='btn btn-primary w-25 mb-4 '>Submit</button>
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
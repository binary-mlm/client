import React,{useState} from 'react'
import pic from '../../../assets/images/signup.png'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import "./signup.css"


const Signup = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const navigate = useNavigate();
  const [name, setSponsorname] = useState('')
  const [sponsorId, setSponsorid] = useState('')
  // const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  const handleverify = async (event) => {
    event.preventDefault();
    await axios.post(ROOT_URL+'/api/auth/verifySponsor', {sponsorId })
            .then(res => {
                console.log(res);

                setSponsorname(res.data.sponsor.name);
                setCity(res.data.sponsor.district)
                
            })
            .catch(err => {
                console.log(err);
                swal("Error!", err.response.data.message || 'Error registering user', "error");
               

            })
  }
  const handleSubmit = async (event) => {
    sessionStorage.setItem('sponosorid', sponsorId);
    navigate('/usersignup');
    // alert("sumit")
    // event.preventDefault();
    // if (name === "" || sponsorId === ""  || city === "") {
    //     swal("Opps!", "Please fill out all required fields!", "error");

    // }
    // else {

    //     await axios.post(ROOT_URL+'/api/auth/register', { name, city, sponsorId })
    //         .then(res => {
    //             console.log(res);
    //             swal("Thank You!", "Registration sucessfully completed!", "success");
    //              navigate('/login');
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             swal("Error!", err.response.data.message || 'Error registering user', "error");
               

    //         })
    // }

}

  return (
   <>
    <section >
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col col-xl-10">
              <div className="card" >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-md-block  image">
                    <img src={pic}
                      alt="loginform" className="img-fluid ms-2" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>

                        <div className="d-flex mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Signup Page</span>
                        </div>
                        <div className="form-group mb-4">

                          <label className="mb-1 mt-3" htmlFor="exampleInputEmail1" style={{fontSize:"15px"}}>SponsorID</label>
                          <div className='d-flex'>
                          <input type="text" className="form-control w-75" id="id" name='id'  placeholder="Entersponsorid" onChange={e => setSponsorid(e.target.value)} />
                          <button className='verifybutton ms-4 w-25' onClick={handleverify}>Verify</button>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Sponsor Name</label>
                          <input type="text" className="form-control " id="name" name='name' readOnly
                            placeholder="Enter Your Name" value={name} />
                        </div>
                        
                        <div className="form-group  mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Sponsor state</label>
                          <input type="text" className="form-control" name='city' readOnly placeholder="Enter state" value={city}  />
                          </div>
                        
                        

                        <div className="pt-1 mb-4 text-center">
                          <button className="signupbutton w-50" type="submit"  onClick={handleSubmit}>Signup</button>
                        </div>
                        <div className="row">
                        <div className='col-md-6'>
                          </div>
                          <div className='col-md-6 text-end'>
                          <span className="mb-5 pb-lg-2 pb-sm-2"> have an account? <a className="text-success text-decoration-none" href="/login"
                          >Login</a></span>
                          </div>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Signup
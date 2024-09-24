import React,{useState} from 'react'
import pic from '../../../assets/images/signup.png'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const navigate = useNavigate();
  const [name, setSponsorname] = useState('')
  const [sponsorId, setSponsorid] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (event) => {
    // alert("sumit")
    event.preventDefault();
    if (name === "" || sponsorId === "" || email === "" || password === "") {
        swal("Opps!", "Please fill out all required fields!", "error");

    }
    else {

        await axios.post(ROOT_URL+'/api/auth/register', { name, email, password, sponsorId })
            .then(res => {
                console.log(res);
                swal("Thank You!", "Registration sucessfully completed!", "success");
                 navigate('/login');
            })
            .catch(err => {
                console.log(err);
                swal("Error!", err.response.data.message || 'Error registering user', "error");
               

            })
    }

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
                      alt="loginform" className="img-fluid ms-5" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>

                        <div className="d-flex mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Signup Page</span>
                        </div>
                        <div className="form-group mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Sponsor Name</label>
                          <input type="text" className="form-control " id="name" name='name'  placeholder="Enter Your Name"  onChange={e => setSponsorname(e.target.value)} />
                        </div>
                        <div className="form-group  mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Sponsor email</label>
                          <input type="text" className="form-control" name='email' placeholder="Enter Your email" onChange={e => setEmail(e.target.value)} />
                          </div>
                        <div className="form-group  mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Sponsor password</label>
                          <input type="text" className="form-control" name='password' placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                          </div>
                        
                        <div className="form-group mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Sponsor sponsorId</label>
                          <input type="text" className="form-control" id="city" name='id'  placeholder="Enter Your sponsorid" onChange={e => setSponsorid(e.target.value)} />
                        </div>

                        <div className="pt-1 mb-4 text-center">
                          <button className="btn-primary  w-50" type="submit"  onClick={handleSubmit}>Signup</button>
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
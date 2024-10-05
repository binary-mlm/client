import React,{useState, useEffect} from 'react'
import axios from 'axios';

const Inventory = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [productdata, setproduct] = useState([]);
  useEffect(() => {
    const userid = sessionStorage.getItem('userid')
    if (!productdata.length) {
    axios
      .get(ROOT_URL + `/api/franchise/${userid}/inventory`)
      .then((productdata) => setproduct(productdata.data))
      .catch((err) => console.log(err));
    }
  }, [productdata]);
  const redercoursecard = (productdata) => {
    return (
      <div className="col" key={productdata._id}>
        <div className="card h-100 d-flex flex-column">
          
          <div className="card-body flex-grow-1">
            <div className="row">
              
              <div className="col-12">
              <span className="">Productid: {productdata.productId}</span>
              </div>
            </div>
            <div className="row mt-2">
              
              <div className="col-12">
              <span className="">  <span className="">Quantity:</span>{productdata.quantity}</span>
              </div>
            </div>
            <div className="row mt-2" >
              
              <div className="col-12">
              <span className=""><span className="">Price: </span>{productdata.price} </span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
               
              </div>
              <div className="col-12">
              <span className=""> <span className="">Bv points:</span>{productdata.bvPoints} </span>
              </div>
            </div>
            
          
          </div>
          <div className="">
            <div className="col-12 text-center">
              <a
                
              >
                {/* <button className="btn btn-primary w-50 mb-3 ">Buy Now</button> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
   <>
    <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                  <i className="fa fa-home"></i>
                </span> Inventory
              </h3>
              </div>
              <div className='container'>
              <div className='row'>
              <div className='col-lg-2'>
             <div></div>

              </div>
              <div className='col-lg-7'>
              <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
              {productdata.map(redercoursecard)}
              </div>
              </div>
              <div className='col-lg-3'>

              </div>

              </div>
              
              {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
             
              </div> */}


              </div>
              </div>
   </>
  )
}

export default Inventory
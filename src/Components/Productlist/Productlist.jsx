import React ,{useState,useEffect}from 'react'
import Category from '../Category'
import axios from 'axios';
import productbanner from "../../assets/images/banners/productlist.jpg";

const Productlist = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [productdata, setproduct] = useState([]);
  useEffect(() => {
    if(!productdata.length){
    const fetchProducts = async () => {
      try {
        const response = await  axios.get(ROOT_URL+'/api/user/viewProducts') // Replace with your actual API endpoint
        setproduct(response.data.products);
        console.log(response.data.products); // For debugging purposes, you can log the received data to see its structure 
       
      } catch (error) {
       console.log(error);
      }
    
    };

    fetchProducts();
  }
  }, []);
  const redercoursecard = (productdata) => {
    return (
      <div className="col" key={productdata._id}>
      <div className="product p-3">
                        <div className="product-image">
                          <div className="image"> 
                          
                             <img src={productdata.imageURL} className='img-fluid' style={{width:"100%", height:"100%"}}  alt=""/> 
                              {/* <img src={product.hoverimage} alt="" class="hover-image"/> */}
                          
                          </div>   
                          <div className="tag new"><span>new</span></div>
                        </div>
                       <div className="product-info mt-3">
                          <h3 className="name text-center" ><a href="/" className='text-decoration-none '>{productdata.name}</a></h3>
                          <div className="rating rateit-small"></div>
                        
                          <div className="product-price text-center"><span className='fw-bold'>Price: </span><span className="price">{productdata.price}</span>  </div>
                          <div className="description text-center">
                            <span className='fw-bold'>BV points: </span><span>{productdata.bvPoints}</span>
                          </div>
                          <div className="description text-center">
                            <span className='fw-bold'>In stock: </span><span>{productdata.stock}</span>
                          </div>
                        </div>
                       
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className=" btn-group">
                                <button className="btn btn-primary" data-toggle="dropdown" type="button">Add to cart </button>
                               
                              </li>
                              {/* <li className="lnk wishlist"> <a className="add-to-cart" href="/" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li> */}
                            </ul>
                          </div>   
                        </div>  
                      </div>
        </div>
    );
  };
  return (
    <>
  <div className='container'>
  <div className='row'>
  <div className="col-xs-12 col-sm-12 col-md-3 sidebar mt-2">
    <Category/>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder"> 
  <img src={productbanner} style={{width:"115%"}}/>
  <div className='order_now'>
  <div className='row'>
    <div className='col-md-6'>

    </div>
    <div className='col-md-6 mt-2'>
    <form>
    <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="search any product" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
</div>
    </form>
    </div>
  </div>

  </div>
  <div>
  <div className="container py-5 cardcontainer">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
  {productdata.map(redercoursecard)}
  </div>
  </div>
  </div>

  </div>

  </div>

  </div>

    </>
  )
}

export default Productlist
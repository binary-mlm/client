import React,{ useState, useEffect} from 'react';
// import pic1 from "../../assets/images/products/alovera.jpg";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Productview = () => {
  const { id } = useParams();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [productdetails, setproductdetail] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!productdetails) {
    axios
      .get(ROOT_URL + `/api/user/getProductById/${id}`)
      .then((productdetail) => {
        console.log(productdetail.data.product);
        setproductdetail(productdetail.data.product);
        console.log(productdetails); 
      })
      .catch((err) => console.log(err));
    }
  }, [id]);
  const buyhandler=()=>{
    // alert('Product added to cart')
    navigate("/ordernow")
  }
  // const ProductteamInfo = [
  //   {
  //     Product_pic: [pic1],
  //     product_name: "Neem Aloevera Shampoo",
  //     product_mrp: 990,
  //     Product_Category: "Personalcare",
  //     Sub_Category:"Haircare",
  //     Pack_Size: "200ml",
  //     Product_description: "The aloevera and neem condition the hair, strengthen the roots and make the hair silky. It also helps the hair grow faster. Aloe & Neem Keep Dandruff Away. It helps your hair to be smooth, shiny and less frizzy.",
  //     Ingredients:"Neem & aloevera extract.",
  //     Product_Benefits:"Nourishes hair root and scalp andimproves blood circulation to hair follicles & stimulates growth of hair.",
  //     How_to_Use:"Apply to wet hair, work up a rich lather, rinse throughly, repeat if necessary.",
  //     Disclaimer:"Make sure to read the label before using. This product is not intended to diagnose, treat or cure any disease. Don't exceed the recommended amount. Keep it out of children's reach. Store in a cool, dry spot away from sunlight. Keep away from heat, light, and moisture. To be used above the age of 12 years."
  //   }

  // ]
  const renderproduct=(productdetails)=>{
    return(
        <>
        <div className='row'>
          <div className='col-4'>
            <img className='img-fluid' src= {productdetails.imageURL} alt='noimage'/>
          </div>
          <div className='col-8'>
          <div className='container'>
          <div>
            <span className='h1 fw-bold'>{productdetails.name}</span>
          </div>
          <div className='mt-4'>
            <span className='h4'>MRP: <i className='fa fa-inr'></i> <span className='h4'>{productdetails.price}</span></span>
          </div>
         <table className='table mt-4 h5'>
         <tbody>
         <tr>
          <th className='h6 fw-bold' width='30%'>Product Stock</th>
          <td width='5%'>:</td>
          <td>{productdetails.stock}</td>
         </tr>
         <tr>
          <th className='h6 fw-bold' width='30%'>BV points</th>
          <td width='5%'>:</td>
          <td>{productdetails.bvPoints}</td>
         </tr>
         
         <tr>
          <th className='h6 fw-bold' width='30%'>Category</th>
          <td width='5%'>:</td>
          <td className=''>{productdetails.category[0]}</td>
         </tr>
         <tr>
          <th className='h6 fw-bold' width='30%'>Product Availability</th>
          <td width='5%'>:</td>
          <td className='text-success fw-bold'>Available</td>
         </tr>
         </tbody>
         </table>
         <div>
          <button type="submit" className='btn btn-primary w-25' onClick={buyhandler}><i class="fa fa-shopping-cart me-2" ></i>BUY NOW</button>
         </div>
          </div>

          </div>
        </div>
        <div className='row mt-4'>
        <div className='col-md-12'>   
  <ul className="nav nav-tabs tablist" role="tablist">
    <li className="nav-item">
      <a className="nav-link active h6" data-bs-toggle="tab" href="#home">PRODUCT DESCRIPTION</a>
    </li>
    <li className="nav-item">
      <a className="nav-link h6" data-bs-toggle="tab" href="#menu1">INGREDIENTS</a>
    </li>
    <li className="nav-item">
      <a className="nav-link h6" data-bs-toggle="tab" href="#menu2">PRODUCT BENEFITS</a>
    </li>
    <li className="nav-item">
      <a className="nav-link h6" data-bs-toggle="tab" href="#menu3">HOW TO USE</a>
    </li>
    <li className="nav-item">
      <a className="nav-link h6" data-bs-toggle="tab" href="#menu4">DISCLAIMER</a>
    </li>
  </ul>

 
  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
      <h4>PRODUCT DESCRIPTION</h4>
      <p className='text'>{productdetails.description}</p>
    </div>
    <div id="menu1" className="container tab-pane fade"><br/>
      <h4>INGREDIENTS</h4>
      <p className='text'>hiii</p>
    </div>
    <div id="menu2" className="container tab-pane fade"><br/>
      <h4 className='mt-2'>PRODUCT BENEFITS</h4>
      <p className='text'></p>
    </div>
    <div id="menu3" className="container tab-pane fade"><br/>
      <h4 className='mt-2'>PRODUCT BENEFITS</h4>
      <p className='text'></p>
    </div>
    <div id="menu4" className="container tab-pane fade"><br/>
      <h4 className='mt-2'>PRODUCT BENEFITS</h4>
      <p className='text'></p>
    </div>
  </div>


        {/* <div>
          <div className='section_title h5 fw-bold mt-5'>PRODUCT DESCRIPTION</div>
          <p className='productdescrip'>{product.Product_description}</p>
        </div>
        <div>
          <div className='section_title h5 fw-bold mt-2'>INGREDIENTS</div>
          <p className='productdescrip'>{product.Ingredients}</p>
        </div>
        <div>
          <div className='section_title h5 fw-bold mt-2'>PRODUCT BENEFITS</div>
          <p className='productdescrip'>{product.Product_Benefits}</p>
        </div>
        <div>
          <div className='section_title h5 fw-bold mt-2'>HOW TO USE</div>
          <p className='productdescrip'>{product.How_to_Use}</p>
        </div>
        <div>
          <div className='section_title h5 fw-bold mt-2'>DISCLAIMER</div>
          <p className='productdescrip'>{product.Disclaimer}</p>
        </div> */}
        </div>
        </div>
        </>
    )}
  
  return (
  <>
    <div className='my-4'>
        <div className='container my-4'>
        {
          productdetails? (
            renderproduct(productdetails)
          ) : (
            <div className='text-center'>Loading...</div>
          )
        }
        {/* {productdetails.map(renderproduct)} */}
        </div>
        
    </div>
  </>
    
  )
}

export default Productview
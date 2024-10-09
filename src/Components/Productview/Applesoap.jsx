import React from 'react'
import pic1 from "../../assets/images/products/aloverasoap.jpg";
const Applesoap = () => {
    const ProductteamInfo = [
        {
          Product_pic: [pic1],
          product_name: "Udbhab Aloe Green Apple Soap",
          product_mrp: 60,
          Product_Category: "Personal care",
          Pack_Size: "100gm",
         
          Product_description:"Introducing Aloe Green Apple Soap, a luxurious blend of natural ingredients designed to refresh and rejuvenate your skin. Infused with the goodness of aloe vera, known for its soothing and hydrating properties, and the crisp fragrance of green apple, this soap offers a perfect balance of nourishment and a revitalizing scent. Aloe Green Apple Soap is gentle on the skin, making it suitable for daily use. Its creamy lather cleanses deeply, while aloe vera helps maintain your skin’s moisture, leaving it soft, smooth, and glowing. The refreshing green apple aroma uplifts your senses, providing an invigorating bathing experience." ,
           Ingredients:"Aloe Vera Extract, Green Apple Extract, Coconut Oil,Olive Oil,Glycerin, Essential Oils, Natural Colorants, Sodium Hydroxide",
          Product_Benefits:"Hydrating, Refreshing, Antioxidant-rich, Gentle Exfoliation, Soothing, Antimicrobial Properties",
          How_to_Use: "Wet the Skin, Lather the Soap, Apply, Rinse, Pat Dry, Moisturize",
          Disclaimer: "Make sure to read the label before using. This product is not intended to diagnose, treat or cure any disease. Don't exceed the recommended amount. Keep it out of children's reach. Store in a cool, dry spot away from sunlight. Keep away from heat, light, and moisture. To be used above the age of 12 years."
        },
      ]
      const renderproduct=(productdetails)=>{
        return(
            <>
            <div className='row'>
              <div className='col-4'>
                <img className='img-fluid' src= {productdetails.Product_pic} alt='noimage'/>
              </div>
              <div className='col-8'>
              <div className='container'>
              <div>
                <span className='h1 fw-bold'>{productdetails.product_name}</span>
              </div>
              <div className='mt-4'>
                <span className='h4'>MRP: <i className='fa fa-inr'></i> <span className='h4'>{productdetails.product_mrp}</span></span>
              </div>
             <table className='table mt-4 h5'>
             <tbody>
             <tr>
              <th className='h6 fw-bold' width='30%'>Category</th>
              <td width='5%'>:</td>
              <td>{productdetails.Product_Category}</td>
              {/* <td className=''>{productdetails.category[0]}</td> */}
             </tr>
            
             <tr>
              <th className='h6 fw-bold' width='30%'>Pack size</th>
              <td width='5%'>:</td>
              <td>100 ml</td>
              {/* <td>{productdetails.bvPoints}</td> */}
             </tr>
             
             
             <tr>
              <th className='h6 fw-bold' width='30%'>SKU code</th>
              <td width='5%'>:</td>
              {/* <td>{productdetails.stock}</td> */}
              <td>PC001</td>
             </tr>
             <tr>
              <th className='h6 fw-bold' width='30%'>Stock Availability</th>
              <td width='5%'>:</td>
              <td className='text-success fw-bold'>Available</td>
             </tr>
             </tbody>
             </table>
             {/* <div>
              <button type="submit" className='btn btn-primary w-25' onClick={buyhandler}><i class="fa fa-shopping-cart me-2" ></i>BUY NOW</button>
             </div> */}
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
          <p className='text'>{productdetails.Product_description}</p>
        </div>
        <div id="menu1" className="container tab-pane fade"><br/>
          <h4>INGREDIENTS</h4>
          <p className='text'>{productdetails.Ingredients}</p>
        </div>
        <div id="menu2" className="container tab-pane fade"><br/>
          <h4 className='mt-2'>PRODUCT BENEFITS</h4>
          <p className='text'>{productdetails.Product_Benefits}</p>
        </div>
        <div id="menu3" className="container tab-pane fade"><br/>
          <h4 className='mt-2'>HOW TO USE</h4>
          <p className='text'>{productdetails.How_to_Use}</p>
        </div>
        <div id="menu4" className="container tab-pane fade"><br/>
          <h4 className='mt-2'>PRODUCT Disclaimer</h4>
          <p className='text'>{productdetails.Disclaimer}</p>
        </div>
      </div>
            </div>
            </div>
            </>
        )}
  return (
    <div className='my-4'>
        <div className='container my-4'>
        
        {ProductteamInfo.map(renderproduct)}
        </div>
        
    </div>
  )
}

export default Applesoap
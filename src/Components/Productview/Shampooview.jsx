import React from 'react'
import pic1 from "../../assets/images/products/shampoo.jpg";
const Shampooview = () => {
    const ProductteamInfo = [
        {
          Product_pic: [pic1],
          product_name: "Udbhab Premium Shampoo",
          product_mrp: 250,
          Product_Category: "Personal care",
          Pack_Size: "30ml",
         
          Product_description: "Introducing Premium Shampoo, a luxurious hair care solution by Udbhab Marketing Pvt Ltd. Crafted with a blend of natural ingredients and cutting-edge formulas, this shampoo is designed to nourish, strengthen, and revitalize all hair types. Its gentle yet effective cleansing action removes impurities while preserving your hair's natural oils, leaving it soft, shiny, and manageable. Enriched with vitamins and essential nutrients, Premium Shampoo helps reduce breakage, promotes hair growth, and protects against environmental damage.",
           Ingredients:"Water, Sodium Lauryl Sulfate, Cocamidopropyl Betaine, Glycerin,Cocamide MEA, Jojoba Oil, Aloe Vera Extract, Argan Oil, Panthenol, Essential Oils, Preservatives, Citric Acid",
          Product_Benefits:"Cleanses Effectively, Moisturizes and Conditions, Promotes Scalp Health, Enhances Shine, Strengthens Hair, Suitable for All Hair Types",
          How_to_Use:"1.Thoroughly wet your hair with warm water to open up the cuticles, Apply Shampoo. 2.Take an adequate amount of Premium Shampoo in your palms and apply it to your scalp and hair. 3. Gently massage the shampoo into your scalp using your fingertips. Work it through the lengths of your hair, creating a rich lather.4. Rinse thoroughly with lukewarm water until all the shampoo is removed. 5. (Optional): For optimal results, follow with a second application, especially if you use styling products regularly. Condition: After rinsing, consider following with a conditioner for added moisture and protection.",
          Disclaimer:"Make sure to read the label before using. This product is not intended to diagnose, treat or cure any disease. Don't exceed the recommended amount. Keep it out of children's reach. Store in a cool, dry spot away from sunlight. Keep away from heat, light, and moisture. To be used above the age of 12 years."
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
              <td>150 ml</td>
              {/* <td>{productdetails.bvPoints}</td> */}
             </tr>
             
             
             <tr>
              <th className='h6 fw-bold' width='30%'>SKU code</th>
              <td width='5%'>:</td>
              {/* <td>{productdetails.stock}</td> */}
              <td>PC002</td>
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

export default Shampooview
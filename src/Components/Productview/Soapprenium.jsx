import React from 'react'
import pic1 from "../../assets/images/products/preniumshop.jpg";
const Soapprenium = () => {
    const ProductteamInfo = [
        {
          Product_pic: [pic1],
          product_name: "Udbhab Premium Soap",
          product_mrp: 99,
          Product_Category: "Personal care",
          Pack_Size: "100gm",
         
          Product_description: "Indulge in the luxurious care of Premium Soap, crafted to elevate your bathing experience with a rich, creamy lather that gently cleanses and moisturizes the skin. Infused with natural ingredients, this soap is designed to leave your skin feeling soft, smooth, and refreshed. The mild formula is perfect for all skin types, providing a long-lasting fragrance that invigorates your senses while nourishing your skin.",
            Ingredients:"Coconut Oil, Olive Oil, Shea Butter, Glycerin, Essential Oils (e.g., Lavender, Tea Tree), Natural Colorants (e.g., Turmeric, Beetroot Powder), Lye (Sodium Hydroxide)",
          Product_Benefits:"Gentle Cleansing, Moisturizing, Anti-Aging, Soothes Irritation, Aromatherapy",
          How_to_Use: "1.Wet the Skin: Start by wetting your body or face with warm water to open up the pores. 2.Lather the Soap: Rub the Premium Soap between your hands or on a loofah to create a rich lather.3.Apply to Skin: Gently massage the lather onto your skin in circular motions, focusing on areas that need extra cleansing. 4.Rinse Off: Thoroughly rinse off the soap with warm water until all lather is removed. 5. Pat Dry: Gently pat your skin dry with a clean towel. For best results, follow up with a moisturizer.",
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
              <td>100 gm</td>
              {/* <td>{productdetails.bvPoints}</td> */}
             </tr>
             
             
             <tr>
              <th className='h6 fw-bold' width='30%'>SKU code</th>
              <td width='5%'>:</td>
              {/* <td>{productdetails.stock}</td> */}
              <td>PC004</td>
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

export default Soapprenium
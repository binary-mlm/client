import React from 'react'
// import Info from './Info'
import  Banner  from './Banner/Banner'
import Category from './Category'
// import Specialoffer from './Specialoffer/Specialoffer'
import Newproduct from "./NewProduct/Newproduct"
import Wideproduct from './Wideproduct/Wideproduct'
 import Productfeature from "./Featureproduct/Productfeature"
 import Wide2 from "./Wideproduct/Wide2"
// import Specialdeal from "./Specialdeal/Specialdeal"

// import Itemtestimonial from "./Testimonial/Itemtestimonial"


const Home = () => {
  return (
    <>
    <div className="body-content outer-top-vs" id="top-banner-and-menu">
  <div className="container">
    <div className="row"> 
     <div className="col-xs-12 col-sm-12 col-md-3 sidebar" style={{backgroundColor:"transparent"}}> 
     <Category/>
    
   
     </div>
     <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder"> 
     <Banner/>
     <Newproduct/>
     {/* <Wideproduct/> */}
     <Productfeature/>
     {/* <Newproduct/> */}
     <Wide2/>
     {/* <Itemtestimonial/> */}
     </div>
     </div>
     </div>
     </div>
   
    {/* <Info/> */}
    
      
    </>
  )
}

export default Home
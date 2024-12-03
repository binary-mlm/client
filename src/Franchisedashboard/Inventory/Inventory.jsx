import React, { useState, useEffect } from "react";
import axios from "axios";
import "./inventory.css";
import "./app.min.css";
import swal from 'sweetalert'
// import Invoice from "./Invoice";

const Inventory = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [productdata, setproduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [userSponsorId , setuserSponsorId] = useState("");
//  const [totalprice , settotalprice] = useState("");

  // Increment the quantity
  const incrementQuantity = (productId) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId && item.quantity < item.stock // Ensure not exceeding stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  // Decrement the quantity
  const decrementQuantity = (productId) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId && item.quantity > 1 // Ensure at least 1 item
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle manual input
  const handleQuantityChange = (e, productId) => {
    const value = parseInt(e.target.value, 10);
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: isNaN(value) || value < 1 ? 1 : value }
          : item
      )
    );
  };

  useEffect(() => {
    const franchiseid = sessionStorage.getItem("franchiseid");
    if (!productdata.length) {
      axios
        .get(ROOT_URL + `/api/franchise/${franchiseid}/inventory`)
        .then((productdata) =>{ setproduct(productdata.data);
          console.log(productdata);
    })
        .catch((err) => console.log(err));
    }
  }, [productdata]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const isProductInCart = prevCart.find((item) => item.productId === product.productId);
  
      // If product is already in the cart, don't add it again
      if (isProductInCart) {
        return prevCart;
      }
  
      // Add the product to the cart with an initial quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  
  const renderCartItems = () => {
    return cart.map((item) => (
      <div key={item.productId} className="ms-4 mb-3">
        <div className="card ">
        <div className="row">
        <div className="col-md-4 col-sm-12">
          <img className="img-fluid" src={item.productImage}
            style={{ width: '150px', height: '100px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8 col-sm-12  mb-1 mt-4 ">
        <div className="h5">{item.productName}</div>
        <span className=" h6 ms-1 fw-bold mt-2">Price: {item.price}</span></div>
        
        </div>
         
          <div className="mb-1">
            <div className="text-center ">Select Quantity</div>
            <div className="input-group w-auto justify-content-center align-items-center mt-1 mb-1">
              <button
                type="button"
                className="button-minus border rounded-circle icon-shape icon-sm mx-1"
                onClick={() => decrementQuantity(item.productId)}
              >
                -
              </button>
              <input
                type="number"
                step="1"
                readOnly
                max={item.stock} // Ensure it doesn't go beyond stock
              value={item.quantity || 1 }
                name="quantity"
                className="quantity-field border-0 text-center w-25"
                onChange={(e) => handleQuantityChange(e, item.productId)}
              />
              <button
                type="button"
                className="button-plus border rounded-circle icon-shape icon-sm"
                onClick={() => incrementQuantity(item.productId)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };
//product
  const renderproductcard = (productdata) => {
    return (
      <div className="col" key={productdata.productId}>
        <div className="card h-100 d-flex flex-column">
        <img
            className="card-img-top cardimage "
            src={productdata.productImage}
            alt="Sample photo"
          />
          <div className="card-body flex-grow-1">
            <div className="row">
              <div className="col-12 text-start">
              {/* <span className="fw-bold">Name: </span>  */}
               <span className="fw-bold" style={{fontSize:"18px"}}>{productdata.productName}</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
               
                  {" "}
                  <span className="fw-bold">Quantity :</span> 
                  
                  <span className="ms-1">{productdata.stock}
                </span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <span className="">
                  <span className="fw-bold">Price: </span>
                  {productdata.price}{" "}
                </span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6"></div>
              <div className="col-12">
                <span className="">
                  {" "}
                  <span className="fw-bold">Bv points: </span>
                  {productdata.bvPoints}{" "}
                </span>
              </div>
            </div>
          </div>
          
            <div className="col-12 text-center">
              <a>
                <button
                  className="addtocart mb-3"
                  onClick={() => addToCart(productdata)}>
                  Add to cart
                </button>
              </a>
            </div>
          </div>
        
      </div>
    );
  };

  //handle submitorder
 

  const handleSubmitOrder =async () => {
    try {
      // alert("Submit");
     
      const franchiseId = sessionStorage.getItem("franchiseid");

      if (!userSponsorId || !franchiseId) {
        swal("opps","User Sponsor ID or Franchise ID is missing","error");
        return;
      }

      const products = cart.map(({ productId, quantity }) => ({
        productId: productId,
        quantity,
      }));
      console.log({
        userSponsorId,
        franchiseId,
        products
      });
      const response =  await axios.post(ROOT_URL + "/api/franchise/calculateTotalBill", {
        userSponsorId,
        franchiseId,
        products,
      });
        console.log(response);
      if (response.status === 200) {
        //  alert(`Order submitted successfully! Total Bill: ${response.data.totalPrice}`);
        //  alert(response.data.message);
         swal(`Order submitted successfully! Total Bill: ${response.data.totalPrice}`, response.data.message,"success").then(() => {
          window.location.reload(); // Reload the page after success alert
        });
    ;
       
        
        // You can also clear the cart after successful order submission
        setCart([]);
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit the order.");
    }
  };
  return (
    <>
      <div className="mt-5 content-wrapper">
        <div
          id="app"
          className="app app-content-full-height app-without-sidebar app-without-header"
        >
          <div id="content" className="app-content p-0 ">
            <div className="pos pos-with-menu pos-with-sidebar" id="pos">
              <div>
                <div className="pos-menu">
                  <div className="logo">
                    <a href="index.html">
                      <div className="logo-img">
                        <i className="fa fa-bowl-rice" />
                      </div>
                    </a>
                  </div>
                  <div className="nav-container">
                    <div
                      className="h-100"
                      data-scrollbar="true"
                      data-skip-mobile="true"
                    >
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#"
                            data-filter="all"
                          >
                            <i className="fa fa-fw fa-utensils" /> All Products
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" data-filter="meat">
                            <i className="fa fa-fw fa-drumstick-bite" />{" "}
                            Personal Care
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" data-filter="burger">
                            <i className="fa fa-fw fa-hamburger" /> Beauty Care
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" data-filter="pizza">
                            <i className="fa fa-fw fa-pizza-slice" /> Health
                            Care
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" data-filter="drinks">
                            <i className="fa fa-fw fa-cocktail" /> Home Care
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-filter="desserts"
                          >
                            <i className="fa fa-fw fa-ice-cream" /> Grosary
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pos-content">
                  <div className="pos-content-container h-100">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                      {productdata.map(renderproductcard)}
                    </div>
                  </div>
                </div>
                <div
                  className="pos-sidebar"
                  id="pos-sidebar"
                  style={{ top: "10%" }}
                >
                  <div className="h-100 d-flex flex-column w-100 ">
                    
                    <input type="text"  className="form-control p-4 mb-2 w-100"
                          placeholder="Enter user Sponsor ID..." onChange={e => setuserSponsorId(e.target.value)} />
                     
                    
                    <div
                      className="pos-sidebar-body tab-content"
                      data-scrollbar="true"
                    >
                    <div style={{ maxHeight: '300px',  overflowY: 'auto',   paddingRight: '15px' 
  }}>
                   {renderCartItems()}
                      </div>
                                          <div className="pos-sidebar-footer">
                        {/* <div className="d-flex align-items-center mb-2">
                          <div>Subtotal</div>
                          <div className="flex-1 text-end h6 mb-0">$30.98</div>
                        </div> */}
                        {/* <div className="d-flex align-items-center">
                          <div>Taxes (6%)</div>
                          <div className="flex-1 text-end h6 mb-0">$2.12</div>
                        </div> */}
                        {/* <hr className="opacity-1 my-10px" /> */}
                        {/* <div className="d-flex align-items-center mb-2">
                          <div>Total:</div>
                          <div className="flex-1 text-end h4 mb-0">{totalprice}</div>
                        </div> */}
                        <div className="mt-3 d-flex justify-content-center">
                          
                             <button
                    type="submit"
                    className="handlesubmitbutton"
                    onClick={handleSubmitOrder}
                >
                    Submit Order
                </button> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    </>
  );
};

export default Inventory;

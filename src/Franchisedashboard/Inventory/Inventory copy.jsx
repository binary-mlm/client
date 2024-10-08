import React, { useState, useEffect } from "react";
import axios from "axios";
{
  /* <link href="assets/css/vendor.min.css" rel="stylesheet" />
  <link href="assets/css/app.min.css" rel="stylesheet" /> */
}
import "./inventory.css";
import "./app.min.css";

const Inventory = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [productdata, setproduct] = useState([]);
  const [cart, setCart] = useState([]);
  // const [quantity, setQuantity] = useState(1);

  // Increment the quantity
  const incrementQuantity = (productId) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  // Decrement the quantity
  const decrementQuantity = (productId) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId && item.quantity > 1
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
        .then((productdata) => setproduct(productdata.data))
        .catch((err) => console.log(err));
    }
  }, [productdata]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const renderCartItems = () => {
    return cart.map((item) => (
      <div key={item.productId} className="ms-4 mb-3">
        <div className="card">
          <div className="h6 mb-1 mt-4 ms-4">{item.productId}</div>
          <div className="small mb-2">
            <h6 className="ms-4 fw-bold">Price: {item.price}</h6>
            <div className="input-group w-auto justify-content-center align-items-center">
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
                max="10"
                value={item.quantity}
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
                <span className="">
                  {" "}
                  <span className="">Quantity:</span>
                  {productdata.quantity}
                </span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <span className="">
                  <span className="">Price: </span>
                  {productdata.price}{" "}
                </span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6"></div>
              <div className="col-12">
                <span className="">
                  {" "}
                  <span className="">Bv points:</span>
                  {productdata.bvPoints}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="col-12 text-center">
              <a>
                <button
                  className="addtocart mb-3"
                  onClick={() => addToCart(productdata)}
                >
                  Add to cart
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="mt-5 content-wrapper">
        <div
          id="app"
          className="app app-content-full-height app-without-sidebar app-without-header"
        >
          <div id="content" className="app-content p-0">
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
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                      {productdata.map(redercoursecard)}
                    </div>
                  </div>
                </div>
                <div
                  className="pos-sidebar"
                  id="pos-sidebar"
                  style={{ top: "10%" }}
                >
                  <div className="h-100 d-flex flex-column ">
                    <form>
                      <div
                        className="input-group mb-3"
                        style={{ maxWidth: "500px" }}
                      >
                        <input
                          type="text"
                          className="form-control p-3"
                          placeholder="Search with user Sponsor ID..."
                          aria-label="Search"
                          aria-describedby="search-button"
                        />
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{ backgroundColor: "rgb(151, 30, 151)" }}
                          id="search-button"
                          // onChange={(e) => setsponsorid(e.target.value)}
                        >
                          <i className="fa fa-search text-white"></i>
                        </button>
                      </div>
                    </form>
                    <div
                      className="pos-sidebar-body tab-content"
                      data-scrollbar="true"
                    >
                    <div style={{ maxHeight: '300px',  overflowY: 'auto',   paddingRight: '15px' 
  }}>

                   
                      {renderCartItems()}
                      </div>
                      {/* <div className='ms-4 mb-3' >
                        <div className="h6 mb-1 mt-4">Mushroom Soup</div>
                       
                        <div className="small mb-2">
                          - size: large
                          <br />- more cheese
                        </div>
                        <div className="d-flex">
                          <a href="#" className="btn btn-secondary btn-sm">
                            <i className="fa fa-minus" />
                          </a>
                          <input
                            type="text"
                            className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 bg-white bg-opacity-25 text-center"
                           
                          />
                          <a href="#" className="btn btn-secondary btn-sm">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                      </div> */}
                      <div></div>
                      <div className="pos-sidebar-footer">
                        <div className="d-flex align-items-center mb-2">
                          <div>Subtotal</div>
                          <div className="flex-1 text-end h6 mb-0">$30.98</div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>Taxes (6%)</div>
                          <div className="flex-1 text-end h6 mb-0">$2.12</div>
                        </div>
                        <hr className="opacity-1 my-10px" />
                        <div className="d-flex align-items-center mb-2">
                          <div>Total</div>
                          <div className="flex-1 text-end h4 mb-0"></div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex">
                            <a
                              href="#"
                              className="btn btn-theme flex-fill d-flex align-items-center justify-content-center"
                            >
                              <span>
                                <i className="fa fa-cash-register fa-lg  d-block" />
                                <button className="small fw-semibold btn btn-primary">
                                  Submit Order
                                </button>
                              </span>
                            </a>
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
      </div>
    </>
  );
};

export default Inventory;

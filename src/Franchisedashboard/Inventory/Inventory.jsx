import React from 'react'
{/* <link href="assets/css/vendor.min.css" rel="stylesheet" />
  <link href="assets/css/app.min.css" rel="stylesheet" /> */}
  import "./inventory.css"
  import "./app.min.css"

const Inventory = () => {
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
                    <a className="nav-link active" href="#" data-filter="all">
                      <i className="fa fa-fw fa-utensils" /> All Dishes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-filter="meat">
                      <i className="fa fa-fw fa-drumstick-bite" /> Meat
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-filter="burger">
                      <i className="fa fa-fw fa-hamburger" /> Burger
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-filter="pizza">
                      <i className="fa fa-fw fa-pizza-slice" /> Pizza
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-filter="drinks">
                      <i className="fa fa-fw fa-cocktail" /> Drinks
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-filter="desserts">
                      <i className="fa fa-fw fa-ice-cream" /> Desserts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-filter="snacks">
                      <i className="fa fa-fw fa-cookie-bite" /> Snacks
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pos-content">
            <div className="pos-content-container h-100">
              <div className="row gx-4">
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"
                  data-type="meat"
                >
                  <a
                    href="#"
                    className="pos-product"
                    data-bs-toggle="modal"
                    data-bs-target="#modalPosItem"
                  >
                    <div
                      className="img"
                      style={{
                        backgroundImage: "url(assets/img/pos/product-1.jpg)"
                      }}
                    />
                    <div className="info">
                      <div className="title">Grill Chicken Chop®</div>
                      <div className="desc">chicken, egg, mushroom, salad</div>
                      <div className="price">$10.99</div>
                    </div>
                  </a>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"
                  data-type="meat"
                >
                  <a
                    href="#"
                    className="pos-product"
                    data-bs-toggle="modal"
                    data-bs-target="#modalPosItem"
                  >
                    <div
                      className="img"
                      style={{
                        backgroundImage: "url(assets/img/pos/product-2.jpg)"
                      }}
                    />
                    <div className="info">
                      <div className="title">Grill Pork Chop®</div>
                      <div className="desc">pork, egg, mushroom, salad</div>
                      <div className="price">$12.99</div>
                    </div>
                  </a>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"
                  data-type="meat"
                >
                  <a
                    href="#"
                    className="pos-product"
                    data-bs-toggle="modal"
                    data-bs-target="#modalPosItem"
                  >
                    <div
                      className="img"
                      style={{
                        backgroundImage: "url(assets/img/pos/product-3.jpg)"
                      }}
                    />
                    <div className="info">
                      <div className="title">Capellini Tomato Sauce®</div>
                      <div className="desc">spaghetti, tomato, mushroom </div>
                      <div className="price">$11.99</div>
                    </div>
                  </a>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"
                  data-type="meat"
                >
                  <a
                    href="#"
                    className="pos-product"
                    data-bs-toggle="modal"
                    data-bs-target="#modalPosItem"
                  >
                    <div
                      className="img"
                      style={{
                        backgroundImage: "url(assets/img/pos/product-4.jpg)"
                      }}
                    />
                    <div className="info">
                      <div className="title">Vegan Salad Bowl®</div>
                      <div className="desc">apple, carrot, tomato </div>
                      <div className="price">$6.99</div>
                    </div>
                  </a>
                </div>
              
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"
                  data-type="desserts"
                >
                  <a
                    href="#"
                    className="pos-product"
                    data-bs-toggle="modal"
                    data-bs-target="#modalPosItem"
                  >
                    <div
                      className="img"
                      style={{
                        backgroundImage: "url(assets/img/pos/product-15.jpg)"
                      }}
                    />
                    <div className="info">
                      <div className="title">Perfect Yeast Doughnuts</div>
                      <div className="desc">
                        Chocolate hazelnut spread, bread flour, doughnuts, quick
                        rise yeast, butter
                      </div>
                      <div className="price">$2.99</div>
                    </div>
                  </a>
                </div>
                
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"
                  data-type="desserts"
                >
                  <a
                    href="#"
                    className="pos-product"
                    data-bs-toggle="modal"
                    data-bs-target="#modalPosItem"
                  >
                    <div
                      className="img"
                      style={{
                        backgroundImage: "url(assets/img/pos/product-16.jpg)"
                      }}
                    />
                    <div className="info">
                      <div className="title">Perfect Vanilla Cupcake</div>
                      <div className="desc">
                        Baking powder, all purpose flour, plain kefir, vanilla
                        extract
                      </div>
                      <div className="price">$2.99</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pos-sidebar" id="pos-sidebar" style={{top:"10%"}}>
            <div className="h-100 d-flex flex-column ">
              {/* <div className="pos-sidebar-header">
                <div className="back-btn">
                  <button
                    type="button"
                    data-toggle-class="pos-mobile-sidebar-toggled"
                    data-toggle-target="#pos"
                    className="btn"
                  >
                    <i className="fa fa-chevron-left" />
                  </button>
                </div>
                <div className="icon">
                  <i className="fa fa-plate-wheat" />
                </div>
                <div className="title">Table 01</div>
                <div className="order small">
                  Order: <span className="fw-semibold">#0056</span>
                </div>
              </div> */}
              {/* <div className="pos-sidebar-nav small mt-5">
                <ul className="nav nav-tabs nav-fill">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      data-bs-toggle="tab"
                      data-bs-target="#newOrderTab"
                    >
                      New Order
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-bs-toggle="tab"
                      data-bs-target="#orderHistoryTab"
                    >
                      Order History (0)
                    </a>
                  </li>
                </ul>
              </div> */}
              <div
                className="pos-sidebar-body tab-content"
                data-scrollbar="true"
                data-height="100%"
              >
                <div
                  className="tab-pane fade h-100 show active"
                  id="newOrderTab"
                >
                 
                  
                  <div className="pos-order">
                    <div className="pos-order-product">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(assets/img/pos/product-10.jpg)"
                        }}
                      />
                      <div className="flex-1">
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
                      </div>
                    </div>
                    <div className="pos-order-price d-flex flex-column mt-4">
                      <div className="flex-1">$3.99</div>
                      <div className="text-end">
                        <a href="#" className="btn btn-default btn-sm">
                          <i className="fa fa-trash" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade h-100" id="orderHistoryTab">
                  <div className="h-100 d-flex align-items-center justify-content-center text-center p-20">
                    <div>
                      <div className="mb-3 mt-n5">
                        <svg
                          width="6em"
                          height="6em"
                          viewBox="0 0 16 16"
                          className="text-gray-300"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
                          />
                          <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                        </svg>
                      </div>
                      <h5>No order history found</h5>
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="flex-1 text-end h4 mb-0">$33.10</div>
                </div>
                <div className="mt-3">
                  <div className="d-flex">
                   
                    
                    <a
                      href="#"
                      className="btn btn-theme flex-fill d-flex align-items-center justify-content-center"
                    >
                      <span>
                        <i className="fa fa-cash-register fa-lg my-10px d-block" />
                        <button className="small fw-semibold btn btn-primary">Submit Order</button>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="pos-mobile-sidebar-toggler"
        data-toggle-class="pos-mobile-sidebar-toggled"
        data-toggle-target="#pos"
      >
        <i className="fa fa-shopping-bag" />
        <span className="badge">5</span>
      </a>
    </div>
    <div className="theme-panel">
      <a
        href="javascript:;"
        data-click="theme-panel-expand"
        className="theme-collapse-btn"
      >
        <i className="fa fa-cog" />
      </a>
      <div className="theme-panel-content">
        <ul className="theme-list clearfix">
          <li>
            <a
              href="javascript:;"
              className="bg-red"
              data-theme="theme-red"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Red"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-pink"
              data-theme="theme-pink"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Pink"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-orange"
              data-theme="theme-orange"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Orange"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-yellow"
              data-theme="theme-yellow"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Yellow"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-lime"
              data-theme="theme-lime"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Lime"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-green"
              data-theme="theme-green"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Green"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-teal"
              data-theme="theme-teal"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Teal"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-cyan"
              data-theme="theme-cyan"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Aqua"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li className="active">
            <a
              href="javascript:;"
              className="bg-blue"
              data-theme=""
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Default"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-purple"
              data-theme="theme-purple"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Purple"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-indigo"
              data-theme="theme-indigo"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Indigo"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-gray-600"
              data-theme="theme-gray-600"
              data-click="theme-selector"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-container="body"
              data-bs-title="Gray"
              data-original-title=""
              title=""
            >
              &nbsp;
            </a>
          </li>
        </ul>
        <hr className="mb-0" />
        <div className="row mt-10px pt-3px">
          <div className="col-9 control-label text-body-emphasis fw-bold">
            <div>
              Dark Mode{" "}
              <span
                className="badge bg-theme text-theme-color ms-1 position-relative py-4px px-6px"
                style={{ top: "-1px" }}
              >
                NEW
              </span>
            </div>
            <div className="lh-sm fs-13px fw-semibold">
              <small className="text-body-emphasis opacity-50">
                Adjust the appearance to reduce glare and give your eyes a
                break.
              </small>
            </div>
          </div>
          <div className="col-3 d-flex">
            <div className="form-check form-switch ms-auto mb-0 mt-2px">
              <input
                type="checkbox"
                className="form-check-input"
                name="app-theme-dark-mode"
                id="appThemeDarkMode"
                defaultValue={1}
              />
              <label className="form-check-label" htmlFor="appThemeDarkMode">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#" data-click="scroll-top" className="btn-scroll-top fade">
      <i className="fa fa-arrow-up" />
    </a>
  </div>
  <div className="modal modal-pos fade" id="modalPosItem">
    <div className="modal-dialog modal-lg">
      <div className="modal-content border-0">
        <a
          href="#"
          data-bs-dismiss="modal"
          className="btn-close position-absolute top-0 end-0 m-4"
        />
        <div className="modal-pos-product">
          <div className="modal-pos-product-img">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/img/pos/product-1.jpg)" }}
            />
          </div>
          <div className="modal-pos-product-info">
            <div className="fs-4 fw-semibold">Grill Chicken Chop</div>
            <div className="text-body text-opacity-50 mb-2">
              chicken, egg, mushroom, salad
            </div>
            <div className="fs-3 fw-bold mb-3">$10.99</div>
            <div className="d-flex mb-3">
              <a href="#" className="btn btn-secondary">
                <i className="fa fa-minus" />
              </a>
              <input
                type="text"
                className="form-control w-50px fw-bold mx-2 text-center"
                name="qty"
                defaultValue={1}
              />
              <a href="#" className="btn btn-secondary">
                <i className="fa fa-plus" />
              </a>
            </div>
            <hr className="opacity-1" />
            <div className="mb-2">
              <div className="fw-bold">Size:</div>
              <div className="option-list">
                <div className="option">
                  <input
                    type="radio"
                    id="size3"
                    name="size"
                    className="option-input"
                    defaultChecked=""
                  />
                  <label className="option-label" htmlFor="size3">
                    <span className="option-text">Small</span>
                    <span className="option-price">+0.00</span>
                  </label>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    id="size1"
                    name="size"
                    className="option-input"
                  />
                  <label className="option-label" htmlFor="size1">
                    <span className="option-text">Large</span>
                    <span className="option-price">+3.00</span>
                  </label>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    id="size2"
                    name="size"
                    className="option-input"
                  />
                  <label className="option-label" htmlFor="size2">
                    <span className="option-text">Medium</span>
                    <span className="option-price">+1.50</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="fw-bold">Add On:</div>
              <div className="option-list">
                <div className="option">
                  <input
                    type="checkbox"
                    name="addon[sos]"
                    defaultValue="true"
                    className="option-input"
                    id="addon1"
                  />
                  <label className="option-label" htmlFor="addon1">
                    <span className="option-text">More BBQ sos</span>
                    <span className="option-price">+0.00</span>
                  </label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    name="addon[ff]"
                    defaultValue="true"
                    className="option-input"
                    id="addon2"
                  />
                  <label className="option-label" htmlFor="addon2">
                    <span className="option-text">Extra french fries</span>
                    <span className="option-price">+1.00</span>
                  </label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    name="addon[ms]"
                    defaultValue="true"
                    className="option-input"
                    id="addon3"
                  />
                  <label className="option-label" htmlFor="addon3">
                    <span className="option-text">Mushroom soup</span>
                    <span className="option-price">+3.50</span>
                  </label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    name="addon[ms]"
                    defaultValue="true"
                    className="option-input"
                    id="addon4"
                  />
                  <label className="option-label" htmlFor="addon4">
                    <span className="option-text">Lemon Juice (set)</span>
                    <span className="option-price">+2.50</span>
                  </label>
                </div>
              </div>
            </div>
            <hr className="opacity-1" />
            <div className="row">
              <div className="col-4">
                <a
                  href="#"
                  className="btn btn-default fw-semibold mb-0 d-block py-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
              </div>
              <div className="col-8">
                <a
                  href="#"
                  className="btn btn-theme fw-semibold d-flex justify-content-center align-items-center py-3 m-0"
                >
                  Add to cart <i className="fa fa-plus ms-2 my-n3" />
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  
  )
}

export default Inventory
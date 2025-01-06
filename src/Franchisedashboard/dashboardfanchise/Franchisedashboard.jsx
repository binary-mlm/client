import React,{useState , useEffect} from 'react'
import axios from 'axios';

const Franchisedashboard = () => {
  const [pupdashboarddata , setdashboarddata] = useState('')
  const franchiseId = sessionStorage.getItem('franchiseid');
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    if(franchiseId){
        axios.get(ROOT_URL +`/api/franchise/${franchiseId}/dashboardData`)
       .then(res => {
         setdashboarddata(res.data);
         console.log(res.data);
       })
       .catch(err => console.log(err))
    }
  }, [franchiseId]);

  return (
   <>
      <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2 ">
                  <i className="fa fa-home"></i>
                </span> Dashboard
              </h3>
             
            </div>
            <div className="row">
              <div className="col-md-3 stretch-card grid-margin">
                <div className="card bg-gradient-danger card-img-holder text-white">
                  <div className="card-body">
                    {/* <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" /> */}
                    <h4 className="font-weight-normal mb-3">Monthly Sales <i className="mdi mdi-chart-line mdi-24px float-end"></i>
                    </h4>
                    <h2 className="mb-5">₹{pupdashboarddata.totalMonthlySales}</h2>
                  
                  </div>
                </div>
              </div>
              <div className="col-md-3 stretch-card grid-margin">
                <div className="card bg-gradient-info card-img-holder text-white">
                  <div className="card-body">
                    
                    <h4 className="font-weight-normal mb-3">Total sales<i className="mdi mdi-bookmark-outline mdi-24px float-end"></i>
                    </h4>
                    <h2 className="mb-5">₹{pupdashboarddata.totalSalesAmount}</h2>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-3 stretch-card grid-margin">
                <div className="card bg-gradient-success card-img-holder text-white">
                  <div className="card-body">
                    {/* <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" /> */}
                    <h4 className="font-weight-normal mb-3">Monthly order<i className="mdi mdi-diamond mdi-24px float-end"></i>
                    </h4>
                    <h2 className="mb-5">{pupdashboarddata.totalOrdersInMonth}</h2>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-3 stretch-card grid-margin">
                <div className="card bg-gradient-success card-img-holder text-white">
                  <div className="card-body">
                    {/* <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" /> */}
                    <h4 className="font-weight-normal mb-3">Available stock<i className="mdi mdi-diamond mdi-24px float-end"></i>
                    </h4>
                    <h2 className="mb-5">₹{pupdashboarddata.availableStocksValue}</h2>
                    
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-7 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="clearfix">
                      <h4 className="card-title float-start">Visit And Sales Statistics</h4>
                      <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-end"></div>
                    </div>
                    <canvas id="visit-sale-chart" className="mt-4"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-5 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Traffic Sources</h4>
                    <div className="doughnutjs-wrapper d-flex justify-content-center">
                      <canvas id="traffic-chart"></canvas>
                    </div>
                    <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                  </div>
                </div>
              </div>
            </div> */}
            
          </div>
   </>
  )
}

export default Franchisedashboard

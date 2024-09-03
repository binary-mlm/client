import React from "react";
import banner from "../../../assets/images/aboutbanner.jpg";
import "./about.css";
import pic from "../../../assets/images/about.jpg";
import Chooseus from "./Chooseus";
// import Teammember from "./Teammember";

const About = () => {
  return (
    <>
      <div className="about_banner">
        <img className="img-fluid" src={banner} />
      </div>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <div className="alert alert_info">
                <p className="text_style px-5">
                  Established in Oct 2024, with a powerful vision of providing
                  genuine health and wealth solutions to common people,
                  Saarvasri Herbs Pvt Ltd (SHPL) today has emerged as one of the
                  most successful and fastest-growing direct selling companies
                  of India.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="about_company ">
                <p>
                  With a professional and well-experienced promoters who truly
                  understand the soul of the now-regulated direct selling
                  business, strong network of corporate and regional offices at
                  strategic locations across India, excellent products and
                  services with world-class packaging, affordable pricing and
                  amazing health benefits for its loyal customers and a
                  generously rewarding business plan clubbed with a world-class
                  training and support system, SHPL is all set to become a major
                  force to reckon with in the Indian direct Selling landscape.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={pic} />
            </div>
          </div>
        </div>
        <Chooseus />
        {/* <Teammember /> */}
      </div>
    </>
  );
};

export default About;

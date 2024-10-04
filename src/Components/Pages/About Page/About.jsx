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
                  Established in 2024, with a powerful vision of providing
                  genuine health and wealth solutions to common people,
                  Utbhab Marketing Pvt Ltd today has emerged as one of the
                  most successful and fastest-growing direct selling companies
                  of India.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="about_company ">
                <p className="mt-4 text_style ">
                Udbhab Marketing Private Limited is a dynamic direct selling company committed to empowering individuals through
                 innovative products and opportunities. With a focus on quality and customer satisfaction, we provide a diverse range of items that enhance daily living. Our unique business model allows entrepreneurs to thrive, offering flexible earning potential and personal growth. Join us in transforming lives and building a successful future together, one sale at a time. Experience the Udbhab difference today!
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

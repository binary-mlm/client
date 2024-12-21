import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import logo from "../../assets/images/udbhab.png";
import '@lottiefiles/lottie-player';

const Login = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [franchiseId, setFranchiseId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (franchiseId === "" || password === "") {
      Swal.fire({
        title: "Opps!",
        text: "Please fill out all required fields!!!",
        icon: "error",
      });
    } else {
      axios
        .post(ROOT_URL + "/api/franchise/login", { franchiseId, password })
        .then((res) => {
          console.log(res);
          const { userId: userId } = res.data;
          const { name: name } = res.data;
          const { franchiseId: franchiseId } = res.data;
          const { email: email } = res.data;
          const { contactno: contactno } = res.data;

          Swal.fire({
            html: `
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_myejiggj.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px; margin: 0 auto;"
              autoplay>
            </lottie-player>
            <p style="font-size: 1.2rem; margin-top: 20px;">You have successfully logged in!</p>
          `,
            
            
            
            confirmButtonText: "Go to Dashboard",
            confirmButtonColor: "#6c63ff",
            iconColor: "#4caf50",
            background: "#f9f9f9",
          });
          sessionStorage.setItem("userid", userId);
          sessionStorage.setItem("username", name);
          sessionStorage.setItem("franchiseid", franchiseId);
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("contactno", contactno);
          navigate("/franchise/dashboard");
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Opps!",
            text: "Try again",
            icon: "error",
          });
        });
    }
  };

  return (
    <>
      <div className="login-container">
        <MDBContainer fluid className="p-5 bg-white ">
          <MDBRow>
            <MDBCol
              md="12"
              className="text-center d-flex  justify-content-center"
            >
              <img
                className="text-center"
                src={logo}
                style={{ width: "20%", height: "100%" }}
              />
            </MDBCol>

            <MDBCol
              md="12"
              className="text-center d-flex flex-column justify-content-center"
            >
              <h1 className=" fw-bold ls-tight px-3">
                The best offer <br />
                <span style={{ color: "hsl(218, 90%, 75%)" }}>
                  for your business
                </span>
              </h1>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="6" md="8" sm="10" xs="12" className="position-relative">
              {/* <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div> */}
              <MDBCard
                className="bg-glass"
                style={{ backgroundColor: "#095444" }}
              >
                <h3 className="text-center mt-5 text-white">
                  PUP Login Portal
                </h3>
                <MDBCardBody className="p-4">
                  <label className="text-white fw-bold">PUP ID</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    id="form3"
                    className="text-white"
                    type="email"
                    onChange={(e) => setFranchiseId(e.target.value)}
                  />
                  <label className="text-white fw-bold">Password</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    id="form4"
                    type="password"
                    className="text-white"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="w-50 signinbutton text-center fw-bold"
                    onClick={handleSubmit}
                    size="md"
                  >
                    Sign In
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      {/* <div className='mt-5 p-2 text-white text-center' style={{backgroundColor:"hsl(218, 41%, 19%)"}}>
    Copyright © 2024 Udbhab Marketing Pvt Ltd. All rights reserved.
    </div> */}
    </>
  );
};

export default Login;

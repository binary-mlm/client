import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const Editprofile = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="bg-primary">
                    <h5 className=" text-white ms-3 p-2 ">
                      My personal Details(You Cannot Edit This)
                    </h5>
                  </div>

                  <div className="mb-3 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      SHPL User ID
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        readonly
                        className="form-control-plaintext  bg-light"
                        id="staticEmail"
                        value="SH2814552"
                      />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control-plaintext bg-light"
                        value="AVIJIT CHAKRABORTY"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                  {/* <div class="mb-3 row">
    <label for="inputPassword" className="col-sm-3 col-form-label">Registered Mobile Number</label>
    <div className="col-sm-9">
      <input type="text" className="form-control-plaintext  bg-light"  value="9836314437" id="inputPassword"/>
    </div>
  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="bg-primary">
                    <h5 className=" text-white ms-3 p-2 ">
                      My personal Details(You Can Edit This)
                    </h5>
                  </div>

                  <div className="mb-3 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        readonly
                        className="form-control-plaintext bg-light"
                        id="staticEmail"
                        value="AVIJIT CHAKRABORTY"
                      />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      IBO Registration Type
                    </label>
                    <div className="col-sm-9 mt-2">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Individual
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          Business Entity
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Gender
                    </label>
                    <div className="col-sm-9 mt-2">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Male
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          Femaile
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Others
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 d-flex">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Date of Birth
                    </label>
                    <input
                      class="form-control"
                      type="date"
                      id="txtdob"
                      name="txtdob"
                      required=""
                      max="2006-09-26"
                    ></input>
                  </div>
                  <div className="mb-3 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Choose Your blood Group
                    </label>
                    <div className="col-sm-9">
                      <select
                        class="form-control"
                        name="blood_group"
                        id="blood_group_show"
                        required=""
                      >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>
                  <div class="mb-4 d-flex">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Whatsapp Number
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter whatsapp number"
                    />
                  </div>

                  <div class="mb-4 d-flex">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Email Id
                    </label>
                    <input
                      class="form-control"
                      type="email"
                      placeholder="Enter email id"
                    />
                  </div>
                  <div class="mb-4 d-flex">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      State
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter State"
                    />
                  </div>
                  <div class="mb-4 d-flex">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      District
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter district"
                    />
                  </div>
                  <div class="mb-4 d-flex">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Address
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter address"
                    />
                  </div>
                  <div class="mb-4 d-flex">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Nominee name
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter Nominee name"
                    />
                  </div>

                  <div className="mb-3 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Choose Your blood Group
                    </label>
                    <div className="col-sm-9">
                      <select
                        class="form-control select2-no-search"
                        id="relationship"
                        name="relationship"
                        required=""
                      >
                        <option
                          label="Select Relationship"
                          selected="selected"
                        ></option>

                        <option value="1" selected="selected">
                          Father
                        </option>

                        <option value="2" selected="selected">
                          Mother
                        </option>

                        <option value="3" selected="selected">
                          Husband
                        </option>

                        <option value="4" selected="selected">
                          Wife
                        </option>

                        <option value="5" selected="selected">
                          Son
                        </option>

                        <option value="6" selected="selected">
                          Daughter
                        </option>

                        <option value="7" selected="selected">
                          Brother
                        </option>

                        <option value="8" selected="selected">
                          Sister
                        </option>

                        <option value="9" selected="selected">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="mb-4 d-flex">
                    <label
                      for="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Your GST No. (Optional)
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your GST no"
                    />
                  </div>
                  <div class="mb-4 text-center"><button className="btn btn-primary">Submit</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
     
    </div>
  );
};

export default Editprofile;

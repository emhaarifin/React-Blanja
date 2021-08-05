import React, { useEffect } from "react";
import "./ProfileCust.css";
import Input from "../../components/input/input";
import Avatar from "../../asset/profile.png";
import Button from "../../components/Button/Button";
import CustomRadio from "../../components/CustomRadio/CustomRadio";
import Navbar from "../../components/Navbar/Navbar";
import SidebarCustommer from "../../components/AsideProfile/SidebarCustommer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ProfileCust() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    document.title = "Profile Custommer";
  });
  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    alert("Logout Success");
    history.push("/");
  };
  return (
    <div>
      <Navbar />
      <div className="d-flex wrapper  flex-nowrap">
        <SidebarCustommer />
        <div className="main-panel">
          <div className="container mb-5">
            <div className="card-as rounded-3">
              <div className="card-header-as bg-transparent">
                <div className="text-black-20px fw-bold">My profile</div>
                <div className="text-black-14px text-black-50">
                  Manage your profile information
                </div>
                <hr className="limit-line"></hr>
              </div>
              <div className="card-body-as">
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
                    <div className="row mb-3">
                      <label
                        for="name"
                        className="col-sm-3 col-form-label text-black-50"
                      >
                        Name
                      </label>
                      <div className="col-sm-9">
                        <Input id="name" type="text" element="input" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="email"
                        className="col-sm-3 col-form-label text-black-50"
                      >
                        Email
                      </label>
                      <div className="col-sm-9">
                        <Input id="email" type="text" element="input" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="phone_number"
                        className="col-sm-3 col-form-label text-black-50"
                      >
                        Phone number
                      </label>
                      <div className="col-sm-9">
                        <Input
                          type="number"
                          id="phone_number"
                          element="input"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="store_description"
                        className="col-sm-3 col-form-label text-black-50"
                      >
                        Gender
                      </label>
                      <div className="col-sm-9 d-flex">
                        <CustomRadio
                          type="radio"
                          class="pick-gender"
                          id="laki-laki"
                          name="gender"
                          value="laki-laki"
                          nameLabel="Laki-Laki"
                        />
                        <CustomRadio
                          type="radio"
                          class="pick-gender"
                          id="perempuan"
                          name="gender"
                          value="perempuan"
                          styling="add-margin-CR"
                          nameLabel="Perempuan"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="store_description"
                        className="col-sm-3 col-form-label text-black-50"
                      >
                        Date of birth
                      </label>
                      <div className="col-sm-9">
                        <div class="date-of-birth">
                          <div class="custom-select">
                            <select>
                              <option value="0">Tanggal</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                            </select>
                          </div>
                          <div class="custom-select">
                            <select>
                              <option value="0">Bulan</option>
                              <option value="1">January</option>
                              <option value="2">Februari</option>
                              <option value="3">April</option>
                              <option value="4">Mei</option>
                              <option value="5">Juni</option>
                              <option value="6">Juli</option>
                              <option value="7">Agustus</option>
                            </select>
                          </div>
                          <div class="custom-select">
                            <select>
                              <option value="0">Tahun</option>
                              <option value="1">2001</option>
                              <option value="2">2002</option>
                              <option value="3">2003</option>
                              <option value="4">2004</option>
                              <option value="5">2005</option>
                              <option value="6">2006</option>
                              <option value="7">2007</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3 mt-5">
                      <div className="offset-3 col-9">
                        <Button type="submit" styling="btn-profile-save">
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-12 order-lg-0 order-0 d-flex flex-wrap justify-content-evenly">
                    <hr className="d-lg-block d-none" width="1" size="150"></hr>
                    <div className="d-flex flex-wrap flex-column align-items-center pb-3">
                      <img
                        className=" rounded-circle"
                        src={Avatar}
                        width="110px"
                        height="110px"
                        alt="current-profile"
                      ></img>
                      <Button styling="btn-select-image">Select image</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button styling="btn-select-image" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCust;

import React, { useEffect, useState } from "react";
import "./ProfileSeller.css";
import Input from "../../components/input/input";
import Avatar from "../../asset/profile.png";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
// import { useDispatch } from "react-redux";
import SidebarSeller from "../../components/AsideProfile/SidebarSeller";
// import { getUserById, updateProfile } from "../../redux/action/user";
// import { useSelector } from "react-redux";
function ProfileSeller() {
  // const dispatch = useDispatch();
  // const { id, name, phone_number, email } = useSelector(
  //   (state) => state.user.userData
  // );
  // console.log(id, "tes id");
  // const { store_description } = useSelector(
  //   (state) => state.user.userData.StoreData[0]
  // );
  // console.log(store_description);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    store_description: "",
    date_of_birth: "",
  });

  const changeText = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = () => {
  //   dispatch(updateProfile(id, form));
  // };
  useEffect(() => {
    document.title = "Profile Seller";
    // dispatch(getUserById(id));
  });
  return (
    <div>
      <Navbar className="midlle-nav-login" />
      <div className="d-flex wrapper  flex-nowrap">
        <SidebarSeller />
        <div className="main-panel">
          <div className="container mb-5">
            <div className="card-as rounded-3">
              <div className="card-header-as bg-transparent">
                <div className="text-black-20px fw-bold">My profile store</div>
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
                        Store Name
                      </label>
                      <div className="col-sm-9">
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          type="text"
                          onChange={changeText}
                          element="input"
                        />
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
                        <Input
                          id="email"
                          type="text"
                          name="email"
                          value={form.email}
                          onChange={changeText}
                          element="input"
                        />
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
                          value={form.phone_number}
                          name="phone_number"
                          onChange={changeText}
                          element="input"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="store_description"
                        className="col-sm-3 col-form-label text-black-50"
                      >
                        Store description
                      </label>
                      <div className="col-sm-9">
                        <Input
                          type="text"
                          value={form.store_description}
                          element="textarea"
                          name="store_description"
                          onChange={changeText}
                          id="store_description"
                        />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSeller;

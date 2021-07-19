import React from "react";
// import AsideProfile from "../../components/AsideProfile/AsideProfile";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import "./ProfileSeller.css";
import Input from "../../components/input/input";
import AvatarMini from "../../asset/profile-mini.png";
import Avatar from "../../asset/profile.png";
import Button from "../../components/Button/Button";
import IconPackage from "../../asset/profile/product.png";
import StoreIcon from "../../asset/profile/store.png";
import IconCart from "../../asset/profile/order.png";
import { Link } from "react-router-dom";
function ProfileSeller() {
  return (
    <div>
      <NavbarLogin />
      <div className="d-flex wrapper  flex-nowrap">
        <div className="sidebar  flex-column">
          <div className="user-profile d-flex flex-wrap mb-5">
            <img
              src={AvatarMini}
              className="user-profile-img"
              alt="user-profile-img"
            ></img>
            <div className="d-flex flex-column ps-3 pt-1">
              <div className="text-black-16px font-semi-bold">
                Johanes Mikael
              </div>
              <div className="text-black-14px text-black-50">
                <img src="../asset/img/icon/pensil.svg" alt=""></img> Ubah
                profile
              </div>
            </div>
          </div>
          <div>
            <ul className="sidebar-menu">
              <li>
                <input
                  type="checkbox"
                  className="sidebar-collapse"
                  id="sidebar-collapse1"
                ></input>
                <label
                  for="sidebar-collapse1"
                  className="d-flex align-items-center"
                >
                  <div className="sidebar-menu-icon-background store-icon">
                    <img
                      className="sidebar-menu-icon"
                      src={StoreIcon}
                      alt=""
                    ></img>
                  </div>
                  Store
                  <span className="arrow-menu ms-auto"></span>
                </label>
                <ul className="sidebar-submenu" id="submenu1">
                  <li>
                    <a href="./profileSeller.html">Store profile</a>
                  </li>
                </ul>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="sidebar-collapse"
                  id="sidebar-collapse2"
                ></input>
                <label
                  for="sidebar-collapse2"
                  className="d-flex align-items-center text-black-50"
                >
                  <div className="sidebar-menu-icon-background package-icon">
                    <img
                      className="sidebar-menu-icon"
                      src={IconPackage}
                      alt=""
                    ></img>
                  </div>
                  Product
                  <span className=" arrow-menu ms-auto"></span>
                </label>
                <ul className="sidebar-submenu" id="submenu2">
                  <li>
                    <Link
                      to="/profile/seller/product"
                      className="text-black-50"
                    >
                      My Products
                    </Link>
                  </li>
                  <li>
                    <a href="./sellingProducts.html" className="text-black-50">
                      Selling products
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="sidebar-collapse"
                  id="sidebar-collapse3"
                ></input>
                <label
                  for="sidebar-collapse3"
                  className="d-flex align-items-center text-black-50"
                >
                  <div className="sidebar-menu-icon-background cart-icon">
                    <img
                      className="sidebar-menu-icon"
                      src={IconCart}
                      alt=""
                    ></img>
                  </div>
                  Order
                  <span className=" arrow-menu ms-auto"></span>
                </label>
                <ul className="sidebar-submenu" id="submenu2">
                  <li>
                    <a href="./myOrderSeller.html" className="text-black-50">
                      My order
                    </a>
                  </li>
                  <li>
                    <a href="./orderCancel.html" className="text-black-50">
                      Order cancel
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
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
                        Store description
                      </label>
                      <div className="col-sm-9">
                        <Input
                          type="text"
                          element="textarea"
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

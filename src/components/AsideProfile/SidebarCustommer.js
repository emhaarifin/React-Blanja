import React from "react";
import { Link } from "react-router-dom";
import AvatarMini from "../../asset/profile-mini.png";
import IconPackage from "../../asset/profile/product.png";
import StoreIcon from "../../asset/profile/store.png";
import IconCart from "../../asset/profile/order.png";

function AsideProfile() {
  return (
    <>
      <div className="sidebar  flex-column">
        <div className="user-profile d-flex flex-wrap mb-5">
          <img
            src={AvatarMini}
            className="user-profile-img"
            alt="user-profile-img"
          ></img>
          <div className="d-flex flex-column ps-3 pt-1">
            <div className="text-black-16px font-semi-bold">Johanes Mikael</div>
            <div className="text-black-14px text-black-50">
              <img src="../asset/img/icon/pensil.svg" alt=""></img> Ubah profile
            </div>
          </div>
        </div>
        <div>
          <ul className="sidebar-menu">
            <li>
              <Link to="/profile/custommer">
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
                </label>
              </Link>
            </li>
            <li>
              <Link to="/profile/custommer/shipping_address">
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
                  Shipping Address
                </label>
              </Link>
            </li>
            <li>
              <Link to="/profile/custommer/my_order">
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
                  My Order
                </label>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AsideProfile;

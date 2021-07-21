import React, { Component } from "react";
// import AsideProfile from "../../components/AsideProfile/AsideProfile";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import Input from "../../components/input/input";
import AvatarMini from "../../asset/profile-mini.png";
import IconPackage from "../../asset/profile/product.png";
import StoreIcon from "../../asset/profile/store.png";
import IconCart from "../../asset/profile/order.png";
import { Link } from "react-router-dom";
import TabButton from "../../components/TabButton/TabButton";
import "./CustOrder.css";
class CustOrder extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      toggleState: 1,
    };
  }
  toggleTab(index) {
    this.setState({ toggleState: index });
  }
  render() {
    const { toggleState } = this.state;
    return (
      <>
        <div>
          <NavbarLogin />
          <div className="d-flex wrapper flex-nowrap">
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
                    <Link to="/profile/custommer">
                      <input
                        type="checkbox"
                        className="sidebar-collapse"
                        id="sidebar-collapse1"
                      ></input>
                      <label
                        for="sidebar-collapse1"
                        className="d-flex align-items-center text-black-50"
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
                        className="d-flex align-items-center"
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
            <div className="main-panel">
              <div className="container mb-5">
                <div className="card-as rounded-3">
                  <div className="card-header-as bg-transparent">
                    <div className="text-black-20px fw-bold">My Order</div>
                  </div>
                  <div className="card-body-as" style={{ height: "70vh" }}>
                    <div>
                      <div className="ms-4 cardCustOrder toggle-profile">
                        <TabButton
                          toggleTab={() => this.toggleTab(1)}
                          typeTab={
                            toggleState === 1
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          All Item
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(2)}
                          typeTab={
                            toggleState === 2
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Not yet paid
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(3)}
                          typeTab={
                            toggleState === 3
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Packed
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(4)}
                          typeTab={
                            toggleState === 4
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Sent
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(5)}
                          typeTab={
                            toggleState === 5
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Completed
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(6)}
                          typeTab={
                            toggleState === 6
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Order cancel
                        </TabButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CustOrder;

import React, { Component } from "react";

// import AsideProfile from "../../components/AsideProfile/AsideProfile";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import "./SellerProduct.css";
// import Input from "../../components/input/input";
import AvatarMini from "../../asset/profile-mini.png";
// import Avatar from "../../asset/profile.png";
import Button from "../../components/Button/Button";
import IconPackage from "../../asset/profile/product.png";
import StoreIcon from "../../asset/profile/store.png";
import TabButton from "../../components/TabButton/TabButton";
import IconCart from "../../asset/profile/order.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "rc-pagination";
import Search from "../../asset/search.png";

class ProductSeller extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      products: [],
      isLoading: true,
      pageNumber: 1,
      toggleState: 1,
      search: "",
    };
  }

  componentDidMount() {
    this.getAllProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.products === prevProps.products) {
      this.getAllProduct();
    }
    // console.log(prevProps);
  }

  async getAllProduct() {
    const response = await axios.get(
      `http://localhost:4000/products?page=${this.state.pageNumber}`
    );
    try {
      this.setState({
        products: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
    return console.log(response.data);
  }

  // async prevHandlerButton() {
  //   // if (this.state.pageNumber < 1) {
  //   const pageNumberState = this.state.pageNumber + 1;
  //   console.log(pageNumberState);
  //   console.log(this.state.pageNumber);
  //   await this.setState({
  //     pageNumber: pageNumberState,
  //   });
  //   await axios.get(`http://localhost:4000/products?page=${pageNumberState}`);
  //   // }
  // }

  nextHandlerButton = async (props) => {
    // if (
    //   this.state.pageNumber < 120
    //   // Math.ceil(
    //   //   this.respone.data.pageDetail.total /
    //   //     this.respone.data.pageDetail.per_page
    //   // )
    // ) {
    console.log(this.getAllProduct);
    //   const pageNumberState = this.state.pageNumber + 1;
    //   await this.setState({
    //     pageNumber: pageNumberState,
    //   });
    //   axios.get(`http://localhost:4000/products?page=${pageNumberState}`);
    //   // .then((response) => {
    //   //   // return response;
    //   // });
    // }
  };

  async deleteProduct(id) {
    const response = await axios.delete(`http://localhost:4000/products/${id}`);
    try {
      this.setState({
        products: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  toggleTab(index) {
    this.setState({ toggleState: index });
  }

  render() {
    const { toggleState, products } = this.state;
    // console.log(this.props);
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
                      <Link to="">Store profile</Link>
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
                        to="profile/seller/product"
                        className="text-black-50"
                      >
                        My Products
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-black-50">
                        Selling products
                      </Link>
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
                      <Link to="./myOrderSeller.html" className="text-black-50">
                        My order
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-black-50">
                        Order cancel
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-panel">
            <div className="container mb-5">
              <div className="card-as-seller rounded-3">
                <div className="card-header-as bg-transparent">
                  <div className="text-black-20px fw-bold">My profile</div>
                </div>
                <div className="card-body-as">
                  <div className="toggle-profile">
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
                      Sold Out
                    </TabButton>
                    <TabButton
                      toggleTab={() => this.toggleTab(3)}
                      typeTab={
                        toggleState === 3
                          ? "active-tab-profile"
                          : "non-active-tab-profile"
                      }
                    >
                      Archived
                    </TabButton>
                  </div>
                  <form class="mt-3 search-profile">
                    <img className="icon-search-profile" src={Search} alt="" />
                    <input
                      type="search"
                      name="search-product"
                      id="search-product"
                      placeholder="Search"
                    />
                  </form>
                  <div class="data mt-3">
                    <table class="table table-sm table-bordered">
                      <tr>
                        <td colspan="3" class="text-center">
                          <table className="table table-sm table-bordered">
                            <thead>
                              <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {products &&
                                products.map((item, index) => (
                                  <tr key={index}>
                                    <td className="bb">
                                      <img
                                        className="aa"
                                        style={{
                                          width: "100px",
                                          height: "100px",
                                        }}
                                        src={item.image}
                                        alt="product"
                                      />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td
                                      className="d-flex flex-column mt-4"
                                      style={{ height: "100%" }}
                                    >
                                      <Link to={`/seller/update/${item.id}`}>
                                        Edit
                                      </Link>
                                      <Button
                                        styling="button-delete"
                                        onClick={() => {
                                          if (
                                            window.confirm("Delete the item?")
                                          ) {
                                            this.deleteProduct(item.id);
                                          }
                                        }}
                                      >
                                        Delete
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colSpan="4">
                                  <button onClick={this.nextHandlerButton}>
                                    asda
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSeller;

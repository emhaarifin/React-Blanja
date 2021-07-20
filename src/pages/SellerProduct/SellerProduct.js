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
import Search from "../../asset/search.png";

class ProductSeller extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      products: [],
      isLoading: true,
      pageNumber: 1,
      pageDetail: [],
      toggleState: 1,
      totalPage: 0,
      search: "",
      message: "",
      result: {},
      sortBy: "",
      sort: "ASC",
    };
  }

  componentDidMount() {
    this.getAllProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.products === prevProps.products) {
      this.getAllProduct();
    }
    if (this.state.sort !== prevState.sort) {
      this.getAllProduct();
    }
    console.log(this.state.sort, this.state.sortBy);
  }

  async getAllProduct(props) {
    const response = await axios.get(
      `http://localhost:4000/products?page=${this.state.pageNumber}&search=${this.state.search}&sortBy=${this.state.sortBy}&sort=${this.state.sort}`
    );
    try {
      this.setState({
        products: response.data.data,
        isLoading: false,
        pageDetail: response.data.pageDetail,
        message: response.data.message,
        totalPage: response.data.pageDetail.totalPage,
      });
      console.log("try", response);
    } catch (error) {
      this.setState({
        error,
        message: response.data.message,
        isLoading: false,
      });
      console.log("re", response);
    }
    console.log("full", response);
  }

  prevHandlerButton = async () => {
    if (this.state.pageNumber > 1) {
      const pageNumberState = this.state.pageNumber - 1;
      await this.setState({
        pageNumber: pageNumberState,
      });
      this.getAllProduct(pageNumberState);
    }
  };

  getSortByName = async () => {
    if (this.state.sort === "ASC") {
      this.setState({
        sort: "DESC",
        sortBy: "name",
      });
      await this.getAllProduct(this.state.sortBy, this.state.sort);
    } else {
      this.setState({
        sort: "ASC",
      });
      await this.getAllProduct(this.state.sortBy, this.state.sort);
    }
  };

  getSortByPrice = async () => {
    if (this.state.sort === "ASC") {
      this.setState({
        sort: "DESC",
        sortBy: "price",
      });
      await this.getAllProduct(this.state.sortBy, this.state.sort);
    } else {
      this.setState({
        sort: "ASC",
      });
      await this.getAllProduct(this.state.sortBy, this.state.sort);
    }
  };

  handlePagination = () => {
    if (this.state.pageNumber > 1) {
      this.prevHandlerButton();
    } else {
      this.nextHandlerButton();
    }
  };

  nextHandlerButton = async () => {
    if (
      this.state.pageNumber <
      Math.ceil(this.state.pageDetail.total / this.state.pageDetail.per_page)
    ) {
      const pageNumberState = this.state.pageNumber + 1;
      await this.setState({
        pageNumber: pageNumberState,
      });
      this.getAllProduct(pageNumberState);
    }
  };

  async deleteProduct(id) {
    const response = await axios.delete(`http://localhost:4000/products/${id}`);
    try {
      this.setState({
        products: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getSearchResult = async () => {
    await this.getAllProduct(this.state.search);
  };

  handleInputChange = (event) => {
    const search = event.target.value;
    this.setState({ search, loading: true, message: "" }, () => {
      this.getSearchResult(search);
    });
  };

  toggleTab(index) {
    this.setState({ toggleState: index });
  }

  render() {
    const { toggleState, products, totalPage, message, pageNumber } =
      this.state;
    const TotalPage = Array(totalPage).fill();

    const getProducts = () => {
      if (message !== "OK") {
        return (
          <tr>
            <td></td>
            <td></td>
            <td className="data-not-found">Data Not Found</td>
            <td></td>
          </tr>
        );
      } else {
        return (
          <tbody>
            {products &&
              products.map((item, index) => (
                <tr key={index}>
                  <td className="image-seller-product">
                    <img src={item.image} alt="product" />
                  </td>
                  <td className="text-center text-name-product align-middle">
                    {item.name}
                  </td>
                  <td className="text-center align-middle">{item.price}</td>
                  <td className="d-flex text-center flex-column mt-4">
                    <Link to={`/profile/seller/update_product/${item.id}`}>
                      Edit
                    </Link>
                    <Button
                      styling="button-delete"
                      onClick={() => {
                        if (window.confirm("Delete the item?")) {
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
        );
      }
    };
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
                      <Link to="/profile/seller">Store profile</Link>
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
                      <Link
                        to="/profile/seller/add_product"
                        className="text-black-50"
                      >
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
                      <Link
                        to="/profile/seller/myorderseller"
                        className="text-black-50"
                      >
                        My order
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile/seller/myorderseller"
                        className="text-black-50"
                      >
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
                      onChange={this.handleInputChange}
                      name="search-product"
                      id="search-product"
                      placeholder="Search"
                    />
                  </form>
                  <div class="data mt-3">
                    <table className="table  table-sm table-bordered">
                      <thead className="text-center">
                        <tr>
                          <th>Image</th>
                          <th onClick={this.getSortByName}>
                            Name <i class="fa fa-sort"></i>
                          </th>
                          <th onClick={this.getSortByPrice}>
                            Price <i class="fa fa-sort"></i>
                          </th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {getProducts()}
                    </table>
                    <div className="custom-page-pagination">
                      <div>
                        <button
                          className="custom-btn-pagination"
                          onClick={this.prevHandlerButton}
                        >
                          {pageNumber} <span>Back</span>
                        </button>
                      </div>
                      <div>
                        {TotalPage.map((element, index) => (
                          <button
                            className="custom-btn-pagination-middle"
                            onClick={this.handlePagination}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                      <div>
                        <button
                          className="custom-btn-pagination"
                          onClick={this.nextHandlerButton}
                        >
                          {pageNumber} <span>Next</span>
                        </button>
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
}

export default ProductSeller;

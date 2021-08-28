import React, { Component } from "react";
import "./SellerProduct.css";
// import Input from "../../components/input/input";
// import Avatar from "../../asset/profile.png";
import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../../asset/search.png";
import Navbar from "../../components/Navbar/Navbar";
import SidebarSeller from "../../components/AsideProfile/SidebarSeller";

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
      status: "",
      result: {},
      sortBy: "",
      sort: "ASC",
    };
  }

  componentDidMount() {
    document.title = "Produk Yang Kamu Jual";
    this.getAllProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.products === prevProps.products) {
      this.getAllProduct();
    }
    if (this.state.sort !== prevState.sort) {
      this.getAllProduct();
    }
  }
  getAllProduct() {
    axios
      .get(
        `http://localhost:4000/v1/products?page=${this.state.pageNumber}&search=${this.state.search}&sortBy=${this.state.sortBy}&sort=${this.state.sort}`
      )
      .then((response) => {
        console.log(response, "Respone");
        this.setState({
          products: response.data.data,
          isLoading: false,
          pageDetail: response.data.pageDetail,
          message: response.data.message,
          status: response.data.status,
          totalPage: response.data.pageDetail.totalPage,
        });
      })
      .catch((error) => {
        console.log(this.state, error, "Respo errne");
        this.setState({
          status: 404,
        });
      });
  }

  prevHandlerButton = async () => {
    if (this.state.pageNumber > 1) {
      const pageNumberState = this.state.pageNumber - 1;
      await this.setState({
        pageNumber: pageNumberState,
      });
      this.getAllProduct();
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
      this.getAllProduct();
    }
  };

  handlePagination = async (index) => {
    let number = index + 1;
    const response = await axios.get(
      `http://localhost:4000/v1/products?page=${number}&search=${this.state.search}&sortBy=${this.state.sortBy}&sort=${this.state.sort}`
    );
    try {
      this.setState({
        products: response.data.data,
        isLoading: false,
        pageDetail: response.data.pageDetail,
        message: response.data.message,
        status: response.data.status,
        totalPage: response.data.pageDetail.totalPage,
      });
    } catch (error) {
      this.setState({
        error,
        message: response.data.message,
        isLoading: false,
      });
    }
  };

  async deleteProduct(id) {
    const response = await axios.delete(
      `http://localhost:4000/v1/products/${id}`
    );
    try {
      this.setState({
        products: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getSortByName = async () => {
    if (this.state.sort === "ASC") {
      this.setState({
        sort: "DESC",
        sortBy: "name",
      });
      await this.getAllProduct();
    } else {
      this.setState({
        sort: "ASC",
      });
      await this.getAllProduct();
    }
  };

  getSortByPrice = async () => {
    if (this.state.sort === "ASC") {
      this.setState({
        sort: "DESC",
        sortBy: "price",
      });
      await this.getAllProduct();
    } else {
      this.setState({
        sort: "ASC",
      });
      await this.getAllProduct();
    }
  };

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
    const { toggleState, products, totalPage, status, pageNumber } = this.state;
    const TotalPage = Array(totalPage).fill();
    console.log(products, status, "dat products");
    const getProducts = () => {
      if (status !== 200) {
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
        <Navbar className="midlle-nav-login" />
        <div className="d-flex wrapper  flex-nowrap">
          <SidebarSeller />
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
                            onClick={() => this.handlePagination(index)}
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

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import "./Product.css";
import CountBuyProduct from "../../components/CountBuyProduct/CountBuyProduct";
import Button from "../../components/Button/Button";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import CardProduct from "../../components/CardProduct/CardProduct";
import rating from "../../asset/home/new/star.svg";
import InputIncrement from "../../components/InputIncrement/InputIncrement";
export class Product extends Component {
  state = {
    products: [],
    productsbyId: [],
    isLoading: true,
    errors: null,
  };

  componentDidMount() {
    this.getPoductsById();
    this.getAllProduct();
  }

  componentDidUpdate(prevState) {
    if (this.props.match.params.id !== prevState.match.params.id) {
      this.getPoductsById();
      window.scrollTo(0, 0);
    }
  }

  async getPoductsById() {
    const response = await axios.get(
      `http://localhost:4000/products/${this.props.match.params.id}`
    );
    try {
      this.setState({
        productsbyId: response.data.result,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  async getAllProduct() {
    const response = await axios.get(`http://localhost:4000/products`);
    try {
      this.setState({
        products: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { productsbyId } = this.state;
    return productsbyId.map((product, index) => {
      const { id, name, brand, price, description, image } = product;
      return (
        <>
          <Navbar />
          <div className="container mt-5">
            <div className="row" key={index}>
              <div className="col-lg-4 col-md-8 images-product">
                <div className="row image-product-main">
                  <img src={image} alt="aa"></img>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row title">
                  <p className="title-name">{name}</p>
                  <p className="seller subtitle mt-2 mb-3">{brand}</p>
                  <div className="rating-list">
                    <img src={rating} alt="rating"></img>
                    <img src={rating} alt="rating"></img>
                    <img src={rating} alt="rating"></img>
                    <img src={rating} alt="rating"></img>
                    <img src={rating} alt="rating"></img>
                    <p className="sold">(10)</p>
                  </div>
                </div>
                <div class="row price-total">
                  <p class="subtitle-price-product mt-4">Price</p>
                  <p className="price-item-product mt-2">Rp {price}</p>
                </div>
                <div className="color-choice">
                  <p className="filter-title">Color</p>
                  <div className="pick-color">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="color1"
                      autocomplete="off"
                    ></input>
                    <label
                      for="color1"
                      className="btn-black choice-color-product"
                    ></label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="color2"
                      autocomplete="off"
                    ></input>
                    <label
                      for="color2"
                      className="btn-red choice-color-product"
                    ></label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="color3"
                      autocomplete="off"
                    ></input>
                    <label
                      for="color3"
                      className="btn-blue choice-color-product"
                    ></label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="color4"
                      autocomplete="off"
                    ></input>
                    <label
                      for="color4"
                      className="btn-green choice-color-product"
                    ></label>
                  </div>
                </div>
                <div className="set-size-total">
                  <div className="size">
                    <p className="filter-title mb-2">Size</p>
                    <section className="sum-item">
                      <InputIncrement />
                    </section>
                  </div>
                  <div className="total">
                    <p className="filter-title mb-2">Jumlah</p>
                    <section className="sum-item">
                      <InputIncrement />
                    </section>
                  </div>
                </div>
                <div className="btn-choice">
                  <button
                    type="button"
                    className="btn-bold btn-secondary-bold"
                    data-bs-dismiss="modal"
                  >
                    Chat
                  </button>
                  <button
                    type="button"
                    className="btn-bold btn-secondary-bold"
                    data-bs-dismiss="modal"
                  >
                    Add Bag
                  </button>
                  <a href="./mybag.html">
                    <button type="button" className="btn-bold btn-primary-bold">
                      Buy Now
                    </button>
                  </a>
                </div>
              </div>
              <div className="information-product-wrapper">
                <h3>
                  <b>Informasi Produk</b>
                </h3>
                <br></br>
                <h4>
                  <b>Condition</b>
                </h4>
                <p className="the-condition">
                  <b>New</b>
                </p>
                <br></br>
                <h4>
                  <b>Description</b>
                </h4>
                <p className="the-description">{description}</p>
              </div>
            </div>
            <hr class="limit-line mt-5"></hr>
            <div className="product-heading">
              <p className="heading-product">Popular</p>
              <p className="subheading-product">
                Find clothes that are trending recently
              </p>
            </div>
            <div className="card-product">
              <CardProduct products={this.state.products} />
            </div>
          </div>
        </>
      );
    });
  }
}

export default Product;

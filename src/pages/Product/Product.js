/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import './Product.css';
import CountBuyProduct from '../../components/CountBuyProduct/CountBuyProduct';
import Button from '../../components/Button/Button';
import axios from '../../configs/axiosConfig';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import rating from '../../asset/home/new/star.svg';
import { getPoductsById, addToCart, adjustItemQty } from '../../redux/action/products';
import InputIncrement from '../../components/InputIncrement/InputIncrement';
import { connect } from 'react-redux';
export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsbyId: [],
      isLoading: true,
      errors: null,
      qty: 1,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        products: [],
        productsbyId: [],
        isLoading: true,
        errors: null,
        qty: 1,
      });
      this.getPoductsId();
      this.getAllProduct();
      window.scrollTo(0, 0);
    }
  }

  getPoductsId = () => {
    this.props.getPoductsId(this.props.match.params.id);
  };
  componentDidMount() {
    this.getPoductsId();
    document.title = 'Produk pilihanmu';
    this.getAllProduct();
  }

  async getAllProduct() {
    const response = await axios.get(`/products`);
    try {
      this.setState({
        products: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }
  inputToCart = (id, qtyFinal) => {
    const user_id = localStorage.getItem('id');
    console.log(user_id);
    this.props.addCart(id, user_id, qtyFinal);
  };
  render() {
    const productsbyId = this.props.productByID;
    return productsbyId.map((product) => {
      console.log(product);
      const { id, name, brand, price, category, description, image, stock } = product;
      return (
        <>
          <Navbar />
          <div className="container mt-5">
            <nav className="breadcrumb" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link style={{ color: '#9B9B9B' }} to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link style={{ color: '#9B9B9B' }} to="/">
                    Category
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {category}
                </li>
              </ol>
            </nav>
            <div className="row" key={id}>
              <div className="col-lg-4 col-md-8 images-product">
                <div className="row image-product-main">
                  <img
                    style={{
                      maxWidth: '378px',
                      maxHeight: '378px',
                      width: 'auto',
                      height: 'auto',
                    }}
                    src={image}
                    alt="aa"
                  ></img>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row title">
                  <p className="title-name">{name}</p>
                  <p className="seller subtitle-seller mt-2 mb-3">{brand}</p>
                  <div className="rating-list">
                    <img src={rating} alt="rating"></img>
                    <img src={rating} alt="rating"></img>
                    <img src={rating} alt="rating"></img>
                    <img src={rating} alt="rating"></img>
                    <img src={rating} alt="rating"></img>
                    <p className="sold">(10)</p>
                  </div>
                </div>
                <div className="row price-total">
                  <p className="subtitle-price-product mt-4">Price</p>
                  <p className="price-item-product mt-2">Rp {price}</p>
                </div>

                <div className="color-choice">
                  {/* <p className="filter-title">Color</p>
                  <div className="pick-color">
                    <input type="checkbox" className="btn-check" id="color1" autoComplete="off"></input>
                    <label htmlFor="color1" className="btn-black choice-color-product"></label>
                    <input type="checkbox" className="btn-check" id="color2" autoComplete="off"></input>
                    <label htmlFor="color2" className="btn-red choice-color-product"></label>
                    <input type="checkbox" className="btn-check" id="color3" autoComplete="off"></input>
                    <label htmlFor="color3" className="btn-blue choice-color-product"></label>
                    <input type="checkbox" className="btn-check" id="color4" autoComplete="off"></input>
                    <label htmlFor="color4" className="btn-green choice-color-product"></label>
                  </div> */}
                </div>

                <div className="set-size-total">
                  <div className="size">
                    {/* <p className="filter-title mb-2">Size</p>
                    <section className="sum-item">
                      <InputIncrement />
                    </section> */}
                  </div>

                  <div className="total">
                    <p className="filter-title mb-2">Jumlah</p>
                    <section className="sum-item">
                      <InputIncrement
                        min="1"
                        max="5"
                        value={this.state.qty}
                        Decrement={async (e) => {
                          if (this.state.qty !== 1) {
                            await this.setState({ ...this.state, qty: this.state.qty - 1 });
                            this.props.adjustQty(id, this.state.qty);
                          }
                        }}
                        Increment={async (e) => {
                          if (this.state.qty < stock) {
                            await this.setState({ ...this.state, qty: this.state.qty + 1 });
                            this.props.adjustQty(id, this.state.qty);
                          }
                        }}
                      />
                    </section>
                  </div>
                </div>
                <div className="btn-choice">
                  <button disabled type="button" className="btn-bold btn-secondary-bold" data-bs-dismiss="modal">
                    Chat
                  </button>
                  <button
                    type="button"
                    className="btn-bold btn-secondary-bold"
                    data-bs-dismiss="modal"
                    onClick={() => this.inputToCart(id, this.state.qty)}
                  >
                    Add Bag
                  </button>
                  <Link to="/mybag">
                    <button
                      type="button"
                      onClick={() => this.inputToCart(id, this.state.qty) && this.props.history.push('/mybag')}
                      className="btn-bold btn-primary-bold"
                    >
                      Buy Now
                    </button>
                  </Link>
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
            <hr className="limit-line mt-5"></hr>
            <div className="product-heading">
              <p className="heading-product">Popular</p>
              <p className="subheading-product">Find clothes that are trending recently</p>
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

const mapStateToProps = (state) => {
  return {
    current: state.products.currentItem,
    productByID: state.products.productId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    getPoductsId: (id) => dispatch(getPoductsById(id)),
    addCart: (id, user_id) => dispatch(addToCart(id, user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

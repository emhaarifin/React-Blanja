import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./CheckOut.css";
import Gopay from "../../asset/checkout/gopay.png";
import Mastercard from "../../asset/checkout/mastercard.png";
import PosIndonesia from "../../asset/checkout/posindonesia.png";
import Jas from "../../asset/mybag/jas.png";
import Jacket from "../../asset/mybag/jacket.png";
function CheckOut() {
  useEffect(() => {
    document.title = "Yuk Bayar!";
  });
  return (
    <div>
      <Navbar />
      <div className="my-bag">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="checkout">
                <p className="title">Checkout</p>
                <div className="shipping-adress">
                  <p className="title-adress">Shipping Adress</p>
                  <div className="adress">
                    <p className="name-buyer">Andreas Jane</p>
                    <p className="the-adress">
                      Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                      Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note:
                      blok c 16] Sokaraja, Kab. Banyumas, 53181
                    </p>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#change-another-adress"
                      className="another-adress"
                    >
                      Choose another address
                    </button>
                  </div>
                </div>
                <div className="the-item">
                  <div className="item">
                    <div className="img-item-select">
                      <img src={Jas} alt=""></img>
                    </div>
                    <div className="what-item">
                      <p className="name-item">Men's formal suit - Black </p>
                      <p className="seller-item">Zalora cloth</p>
                    </div>
                    <p className="price-item">$ 20.00</p>
                  </div>
                  <div className="item">
                    <div className="img-item-select">
                      <img src={Jacket} alt=""></img>
                    </div>
                    <div className="what-item">
                      <p className="name-item">Men's formal suit - Black </p>
                      <p className="seller-item">Zalora cloth</p>
                    </div>
                    <p className="price-item">$ 20.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="shopping-summary">
                <p className="title-summary">Shopping summary</p>
                <div className="sum-price">
                  <div className="price order">
                    <p id="title-price">Order</p>
                    <p id="price-checkout">$ 40.0</p>
                  </div>
                  <div className="price delivery">
                    <p id="title-price">Delivery</p>
                    <p id="price-checkout">$ 5.0</p>
                  </div>
                </div>
                <hr className="line-sum"></hr>
                <div className="price total">
                  <p className="title-summary">Shopping summary</p>
                  <p id="result-price">$ 45.0</p>
                </div>
                <button
                  type="button"
                  className="btn__payment"
                  data-bs-toggle="modal"
                  data-bs-target="#select-payment"
                >
                  Select payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="change-another-adress"
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="container">
            <div className="modal-content">
              <div className="modal-header modal-header-address">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="modal-address">
                      <p className="modal__title">Choose another address</p>
                      <div className="add-new-adress">
                        <button
                          type="button"
                          className="btn__add-address"
                          data-bs-toggle="modal"
                          data-bs-target="#add-address"
                          data-bs-dismiss="modal"
                        >
                          Add new address
                        </button>
                      </div>
                      <div className="modal__shipping-adress">
                        <div className="modal__adress">
                          <p className="name-buyer">Andreas Jane</p>
                          <p className="the-adress">
                            Perumahan Sapphire Mediterania, Wiradadi, Kec.
                            Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                            [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas,
                            53181
                          </p>
                          <Link className="modal__change-adress">
                            Change address
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="select-payment"
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-header-payment">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="payment-have"
              >
                <img
                  src="./../asset/img/home/filter/close-icon.png"
                  alt=""
                ></img>
              </button>
              <h5 className="modal-title" id="staticBackdropLabel">
                Payment
              </h5>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
                  <div className="payment-method">
                    <p className="name-item">Payment method</p>
                    <div className="payment-list">
                      <div className="payment-item">
                        <img src={Gopay} alt=""></img>
                        <p className="name-item">Gopay</p>
                        <label className="checker">
                          <input type="checkbox"></input>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="payment-item">
                        <img src={PosIndonesia} alt=""></img>
                        <p className="name-item">Pos Indonesia</p>
                        <label className="checker">
                          <input type="checkbox"></input>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="payment-item">
                        <img src={Mastercard} alt=""></img>
                        <p className="name-item">Mastercard</p>
                        <label className="checker">
                          <input type="checkbox"></input>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <hr className="divider-filter"></hr>
                    <div className="shopping-summary-list">
                      <p className="title-summary">Shopping summary</p>
                      <div className="sum-price">
                        <div className="price order">
                          <p id="title-price">Order</p>
                          <p id="price-checkout">$ 40.0</p>
                        </div>
                        <div className="price delivery">
                          <p id="title-price">Delivery</p>
                          <p id="price-checkout">$ 5.0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer modal-shopping">
              <div className="modal__total-shopping">
                <p className="name-item">Shopping summary</p>
                <p className="price-total">$ 45.0</p>
              </div>
              <div>
                <Link to="/mybag">
                  <button type="button" className="btn-primary">
                    Buy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="add-address"
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="container">
            <div className="modal-content">
              <div className="modal-header modal-header-address">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="modal-add-address">
                      <p className="modal__title">Add new address</p>
                      <div className="form-input">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-input-address">
                              <p className="add-address-title">
                                Save address as (ex : home address, office
                                address)
                              </p>
                              <input type="text" className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-input-address">
                              <p className="add-address-title">
                                Recipient's name
                              </p>
                              <input type="text" className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">Address</p>
                              <input type="text" className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">
                                City of Subdistrict
                              </p>
                              <input type="text" className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-input-address">
                              <p className="add-address-title">
                                Recipient's telephone number
                              </p>
                              <input type="text" className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">Postal Code</p>
                              <input type="text" className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-12 primary-address">
                            <input
                              type="checkbox"
                              className="set-primary-address"
                            ></input>
                            <p className="correct">Make it primary address</p>
                          </div>
                        </div>
                      </div>
                      <div className="footer-address">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Discard
                        </button>
                        <button type="button" className="btn btn-primary">
                          Apply
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
    </div>
  );
}

export default CheckOut;

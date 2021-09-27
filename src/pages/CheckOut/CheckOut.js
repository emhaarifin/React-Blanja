import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './CheckOut.css';
import Gopay from '../../asset/checkout/gopay.png';
import Mastercard from '../../asset/checkout/mastercard.png';
import PosIndonesia from '../../asset/checkout/posindonesia.png';
import axios from '../../configs/axiosConfig';

import { useSelector, useDispatch } from 'react-redux';
function CheckOut() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);
  const [payment, setPayment] = useState({
    payment_method: 'Gopay',
  });
  const changePayment = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };
  const [total, setTotal] = React.useState(0);
  useEffect(() => {
    if (cart) {
      cart.map((item) => {
        return setTotal((oldvalue) => item.price * item.qty + oldvalue);
      });
    }
    document.title = 'Yuk Bayar!';
  }, [cart]);
  // const sendData = {
  //   id_user: '',
  //   name_address: '',
  //   name_recipient: '',
  //   phone_recipient: '',
  //   address: '',
  //   postal_code: '',
  //   city: '',
  //   primary_address: '',
  // };

  const handleCheckOut = async (e) => {
    e.preventDefault();

    // await cart.map(async (dataOrder) => {
    // console.log({ ...dataOrder, ...payment }, 'tes data');
    await axios
      .post(
        `/order`,
        { dataOrder: cart, ...payment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
          },
        }
      )
      .then(() => {
        dispatch({ type: 'SUKSES_ORDER' });
        alert('Sukses');
      })
      .catch((error) => {
        alert(error?.response?.data?.message || 'Err');
      });
    // });
  };

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
                      Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                      [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
                    </p>
                    <button data-bs-toggle="modal" data-bs-target="#change-another-adress" className="another-adress">
                      Choose another address
                    </button>
                  </div>
                </div>
                <div className="the-item">
                  {cart &&
                    cart.map((item) => {
                      return (
                        <div key={item.id} className="item">
                          <div className="img-item-select">
                            <img
                              src={item.image}
                              alt=""
                              style={{ width: '70px', height: '69px', borderRadius: '8px', objectFit: 'cover' }}
                            ></img>
                          </div>
                          <div className="what-item">
                            <p className="name-item">{item.name}</p>
                            <p className="seller-item">{item.brand}</p>
                          </div>
                          <p className="price-item">Rp. {item.price * item.qty}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="shopping-summary">
                <p className="title-summary">Shopping summary</p>
                <div className="sum-price">
                  <div className="price order">
                    <p id="title-price">Order</p>
                    <p id="price-checkout">Rp. {total}</p>
                  </div>
                </div>
                <hr className="line-sum"></hr>
                <div className="price total">
                  <p className="title-summary">Shopping summary</p>
                  <p id="result-price">Rp. {total}</p>
                </div>
                <button type="button" className="btn__payment" data-bs-toggle="modal" data-bs-target="#select-payment">
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
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="container">
            <div className="modal-content">
              <div className="modal-header modal-header-address">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah,
                            53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
                          </p>
                          <button
                            type="button"
                            className="btn__add-address modal__change-adress"
                            data-bs-toggle="modal"
                            data-bs-target="#add-address"
                            data-bs-dismiss="modal"
                            style={{ background: 'transparent', border: 'none', outline: 'none' }}
                          >
                            Change address
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

      <div
        className="modal fade"
        id="select-payment"
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-header-payment">
              <button type="button" data-bs-dismiss="modal" className="payment-have">
                <img src="./../asset/img/home/filter/close-icon.png" alt=""></img>
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
                        <div>
                          <label htmlFor="Gopay" className="checker">
                            <input
                              id="Gopay"
                              name="payment_method"
                              value="Gopay"
                              onChange={changePayment}
                              type="radio"
                            ></input>
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="payment-item">
                        <img src={PosIndonesia} alt=""></img>
                        <p className="name-item">Pos Indonesia</p>
                        <div>
                          <label htmlFor="Pos Indonesia" className="checker">
                            <input
                              id="Pos Indonesia"
                              name="payment_method"
                              value="Pos Indonesia"
                              onChange={changePayment}
                              type="radio"
                            ></input>
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="payment-item">
                        <img src={Mastercard} alt=""></img>
                        <p className="name-item">Mastercard</p>
                        <div>
                          <div>
                            <label htmlFor="Mastercard" className="checker">
                              <input
                                name="payment_method"
                                id="Mastercard"
                                value="Mastercard"
                                onChange={changePayment}
                                type="radio"
                              ></input>
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="divider-filter"></hr>
                    <div className="shopping-summary-list">
                      <p className="title-summary">Shopping summary</p>
                      <div className="sum-price">
                        <div className="price order">
                          <p id="title-price">Order</p>
                          <p id="price-checkout">Rp. {total}</p>
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
                <p className="price-total">Rp. {total}</p>
              </div>
              <div>
                {/* <Link to="/mybag"> */}
                <button type="button" onClick={handleCheckOut} className="btn-primary">
                  Buy
                </button>
                {/* </Link> */}
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
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="container">
            <div className="modal-content">
              <div className="modal-header modal-header-address">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                              <p className="add-address-title">Save address as (ex : home address, office address)</p>
                              <input type="text" className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-input-address">
                              <p className="add-address-title">Recipient's name</p>
                              <input type="text" className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">Address</p>
                              <input type="text" className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">City of Subdistrict</p>
                              <input type="text" className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-input-address">
                              <p className="add-address-title">Recipient's telephone number</p>
                              <input type="text" className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">Postal Code</p>
                              <input type="text" className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-12 primary-address">
                            <input type="checkbox" className="set-primary-address"></input>
                            <p className="correct">Make it primary address</p>
                          </div>
                        </div>
                      </div>
                      <div className="footer-address">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                          Discard
                        </button>
                        <button
                          onClick={() => console.log('cong')}
                          // data-bs-dismiss="modal"
                          type="button"
                          className="btn btn-primary"
                        >
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

import React, { useState, useEffect } from "react";
import CustomCheckBox from "../../components/CustomCheckBox/CustomCheckBox";
import Navbar from "../../components/Navbar/Navbar";
import "./MyBag.css";
import { Link } from "react-router-dom";
import InputIncrement from "../../components/InputIncrement/InputIncrement";
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../../redux/action/products";
const MyBag = ({ cart, productId, adjustQty, removeFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [input, setInput] = useState(productId.qty);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(productId.id, e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="my-bag">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="my-bag-select">
                <p className="title">My Bag</p>
                <div className="checklist-all-item">
                  <CustomCheckBox />
                  <p className="subtitle">
                    Select all items <span>({cart.length} items selected)</span>
                  </p>
                  <p className="delete">Delete</p>
                </div>
                <div className="the-item">
                  {cart.map((item) => (
                    <div key={item.id} className="item-cart">
                      <div className="d-flex align-items-center">
                        <CustomCheckBox />
                        <div className="d-flex ms-2 md-2 align-items-center">
                          <img
                            style={{
                              width: "70px",
                              height: "69px",
                              borderRadius: "8px",
                            }}
                            src={item.image}
                            alt=""
                          ></img>
                          <div className="desc__cart-product">
                            <p className="name-item">{item.name}</p>
                            <p className="seller-item">{item.brand}</p>
                          </div>
                        </div>
                      </div>
                      <div className="quantity-price">
                        <div className="sum-item">
                          <InputIncrement
                            onChange={onChangeHandler}
                            value={item.qty}
                          />
                        </div>
                        <p className="price-item">Rp {item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="shopping-summary">
                <p>Shopping summary</p>
                <div className="price">
                  <p id="title-price">Total Price</p>
                  <p id="price">Rp {totalPrice}</p>
                </div>
                <Link to="/checkout" type="button" className="btn btn-primary">
                  Buy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.products.cart,
    productId: state.products.productId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyBag);

import React, { Component } from "react";
import CustomCheckBox from "../../components/CustomCheckBox/CustomCheckBox";
import Navbar from "../../components/Navbar/Navbar";
import Image from "../../asset/mybag/jas.png";
import "./MyBag.css";
import { Link } from "react-router-dom";
import InputIncrement from "../../components/InputIncrement/InputIncrement";
export class MyBag extends Component {
  componentDidMount() {
    document.title = "Keranjang belanja";
  }
  render() {
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
                      Select all items <span>(2 items selected)</span>
                    </p>
                    <p className="delete">Delete</p>
                  </div>
                  <div className="the-item">
                    <div className="item">
                      <div className="d-flex align-items-center">
                        <CustomCheckBox />
                        <div className="d-flex ms-2 md-2 align-items-center">
                          <img src={Image} alt=""></img>
                          <div>
                            <p className="name-item">
                              Men's formal suit - Black{" "}
                            </p>
                            <p className="seller-item">Zalora cloth</p>
                          </div>
                        </div>
                      </div>
                      <div className="quantity-price">
                        <div className="sum-item">
                          <InputIncrement />
                        </div>
                        <p className="price-item">$ 20.00</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="d-flex align-items-center">
                        <CustomCheckBox />
                        <div className="d-flex ms-2 md-2 align-items-center">
                          <img src={Image} alt=""></img>
                          <div>
                            <p className="name-item">
                              Men's formal suit - Black{" "}
                            </p>
                            <p className="seller-item">Zalora cloth</p>
                          </div>
                        </div>
                      </div>
                      <div className="quantity-price">
                        <div className="sum-item">
                          <InputIncrement />
                        </div>
                        <p className="price-item">$ 20.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="shopping-summary">
                  <p>Shopping summary</p>
                  <div className="price">
                    <p id="title-price">Total Price</p>
                    <p id="price">$ 40.00</p>
                  </div>
                  <Link
                    to="/checkout"
                    type="button"
                    className="btn btn-primary"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBag;

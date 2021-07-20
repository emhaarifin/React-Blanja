import React, { Component } from "react";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";

export class CardBag extends Component {
  render() {
    return (
      <div className="item">
        <div className="d-flex align-items-center">
          <CustomCheckBox />
          <div className="d-flex ms-2 md-2 align-items-center">
            <img src="./../asset/img/mybag/jas.png" alt=""></img>
            <div>
              <p className="name-item">Men's formal suit - Black </p>
              <p className="seller-item">Zalora cloth</p>
            </div>
          </div>
        </div>
        <div className="quantity-price">
          <div className="sum-item">
            <img
              src="./../asset/img/mybag/min.png"
              alt=""
              className="min"
            ></img>
            <p>1</p>
            <img
              src="./../asset/img/mybag/add.png"
              alt=""
              className="add"
            ></img>
          </div>
          <p className="price-item">$ 20.00</p>
        </div>
      </div>
    );
  }
}

export default CardBag;

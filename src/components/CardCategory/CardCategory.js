/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import "./CardProduct.css";

function CardProduct(props) {
  const { categoryData } = props;
  return categoryData.map((item, index) => (
    <div className="card" key={index}>
      <Link to={{ pathname: `/category/${item.id}` }}>
        <img src={item.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className>{item.category}</p>
        </div>
      </Link>
    </div>
  ));
}

export default CardProduct;

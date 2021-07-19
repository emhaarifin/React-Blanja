import React from "react";
import min from "../../asset/mybag/min.png";
import add from "../../asset/mybag/add.png";
import "./CountBuyProduct.css";

function CountBuyProduct(props) {
  return (
    <div className={props.SetTotal || props.SetSize}>
      <p className="filter-title">{props.SetTitle}</p>
      <section className="sum-item">
        <img src={min} alt="" className="min"></img>
        <p>1</p>
        <img src={add} alt="" className="add"></img>
      </section>
    </div>
  );
}

export default CountBuyProduct;

import React, { Component } from "react";
import Slider from "react-slick";
import img from "./../../asset/home/category/jacket.svg";
import "./CategoryProduct.css";
import { Link } from "react-router-dom";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      // className: "center",
      infinite: true,
      slidesToShow: 5,
      arrows: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    };
    const { category } = this.props;
    console.log(category);
    const displayCategory = category.map((item, index) => {
      return (
        <div className="card-category" key={index}>
          <Link to={{ pathname: `/category/${item.id}` }}>
            <div className="category-item">
              <div style={{ background: item.color }}>
                <img src={item.image} alt=""></img>
                <p>{item.category}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return <Slider {...settings}>{displayCategory}</Slider>;
  }
}

// export default MultipleItems

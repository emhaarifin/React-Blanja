import React, { Component } from "react";
import Slider from "react-slick";
import img from "./../../asset/home/carousel/benjamin-voros-TnNo84AJJ5A-unsplash.png";
import "./BannerCarousel.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "155px",
      arrows: true,
      dots: true,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="container mt-5">
        <Slider {...settings}>
          <div>
            <img src={img} alt="img"></img>
          </div>
          <div>
            <img src={img} alt="img"></img>
          </div>
          <div>
            <img src={img} alt="img"></img>
          </div>
          <div>
            <img src={img} alt="img"></img>
          </div>
          <div>
            <img src={img} alt="img"></img>
          </div>
          <div>
            <img src={img} alt="img"></img>
          </div>
        </Slider>
      </div>
    );
  }
}

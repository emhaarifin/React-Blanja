import React, { Component } from "react";
import Slider from "react-slick";
import img from "./../../asset/home/carousel/benjamin-voros-TnNo84AJJ5A-unsplash.png";
import img2 from "./../../asset/home/carousel/ian-dooley-10ca-K3e6Ko-unsplash.png";
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
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 50,
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
      <div className="container banner-carousel mt-5">
        <Slider {...settings}>
          <div className="banner">
            <img src={img} alt="img"></img>
            <p>Trend In 2020</p>
          </div>
          <div className="banner">
            <img src={img2} alt="img"></img>
            <p>Black Edition</p>
          </div>
          <div className="banner">
            <img src={img} alt="img"></img>
            <p>Trend In 2020</p>
          </div>
          <div className="banner">
            <img src={img2} alt="img"></img>
            <p>Black Edition</p>
          </div>
          <div className="banner">
            <img src={img} alt="img"></img>
            <p>Trend In 2020</p>
          </div>
        </Slider>
      </div>
    );
  }
}

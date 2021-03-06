import React, { Component } from 'react';
import Slider from 'react-slick';
import './CategoryProduct.css';
import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      slidesToShow: 5,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          },
        },
      ],
    };
    const { category } = this.props;
    const displayCategory = category.map((item, index) => {
      return (
        <div className="card-category" key={index}>
          <Link to={{ pathname: `/category/${item.id}` }}>
            <div className="category-item">
              <div style={{ background: item.color }}>
                <img src={item.image || <Skeleton />} alt=""></img>
                <p>{item.category || <Skeleton />}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return <Slider {...settings}>{displayCategory}</Slider>;
  }
}

// export default MultipleItems;

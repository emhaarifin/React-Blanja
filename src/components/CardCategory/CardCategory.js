/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function CardProduct(props) {
  const { categoryData } = props;
  return categoryData.map((item, index) => (
    <div className="card" key={index}>
      <Link to={{ pathname: `/category/${item.id}` }}>
        <img src={item.image || <Skeleton />} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className>{item.category || <Skeleton />}</p>
        </div>
      </Link>
    </div>
  ));
}

<Skeleton wrapper={CardProduct} height={100} />;

export default CardProduct;

/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import rating from '../../asset/home/new/star.svg';
import './CardProduct.css';
import Skeleton from 'react-loading-skeleton';
function CardProduct(props) {
  const { products } = props;
  return products?.map((item, index) => (
    <>
      <div className="card__product-item" key={index}>
        <Link to={{ pathname: `/products/${item.id}` }}>
          <img src={item.image || <Skeleton />} className="card__img__top" alt="..."></img>
          <div className="card__body">
            <p className="card__text">{item.name || <Skeleton />}</p>
            <p className="card__price">{`Rp. ${item.price}` || <Skeleton />}</p>
            <p className="card__seller">{item.brand || <Skeleton />}</p>
            <div className="rating__list">
              <img src={rating} alt="rating"></img>
              <img src={rating} alt="rating"></img>
              <img src={rating} alt="rating"></img>
              <img src={rating} alt="rating"></img>
              <img src={rating} alt="rating"></img>
            </div>
            <p className="sold">(10)</p>
          </div>
        </Link>
      </div>
    </>
  ));
}

<Skeleton wrapper={CardProduct} height={100} />;
export default CardProduct;

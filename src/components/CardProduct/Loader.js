import React from 'react';

import Skeleton from 'react-loading-skeleton';
function Loader({ fill }) {
  return [...Array(fill)].map((e, i) => {
    return (
      <div key={i} className="card__product-item">
        <Skeleton height={138} width={'100%'} />
        <div className="card__body">
          <p className="card__text">{<Skeleton />}</p>
          <p className="card__price">{<Skeleton />}</p>
          <p className="card__seller">{<Skeleton />}</p>
          <div className="rating__list">
            <Skeleton count={5} />
          </div>
          <p className="sold">(10)</p>
        </div>
      </div>
    );
  });
}

export default Loader;

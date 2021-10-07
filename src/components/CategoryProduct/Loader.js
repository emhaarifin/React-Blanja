import React from 'react';

import Skeleton from 'react-loading-skeleton';
function Loader({ fill }) {
  return [...Array(fill)].map((e, i) => {
    return (
      <>
        <div style={{ padding: '1rem' }}>
          <Skeleton width={244} height={220} className="card-category" key={i} />
        </div>
      </>
    );
  });
}

export default Loader;

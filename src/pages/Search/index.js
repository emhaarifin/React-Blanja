/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from '../../configs/axiosConfig';
import CardProduct from '../../components/CardProduct/CardProduct';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';

import '../Category/Category.css';

function Index() {
  console.log('A');
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('sortBy=id&sort=ASC');
  const [Refresh, setRefresh] = useState(false);
  const Location = useLocation();
  let Search = ``;

  if (Location.search !== '') {
    Search = `${Location.search}`;
  } else {
    Search = ``;
  }

  useEffect(() => {
    axios
      .get(`/products${Search}&${sort}`)
      .then((response) => {
        const { data } = response.data;

        setProducts(data);
      })
      .catch(console.error());
  }, [Refresh]);
  const handleSort = (e) => {
    setSort(e.target.value);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="d-flex align-items-center flex-wrap justify-content-between mt-5 mb-5">
          <p className="m-0 fw-bold fs-4">{products.length} Produk ditemukan</p>
          <select
            className=""
            onChange={(e) => handleSort(e)}
            style={{ padding: '1rem', background: 'transparent', border: 'none', outline: 'none' }}
          >
            <option selected disabled hidden>
              Urutkan berdasar
            </option>
            <option value="sortBy=price&sort=desc">Harga Tertinggi</option>
            <option value="sortBy=price&sort=asc">Harga Terendah</option>
          </select>
        </div>

        <div className="card-product">
          <CardProduct products={products} />
        </div>
      </div>
    </div>
  );
}

export default Index;

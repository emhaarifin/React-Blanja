import React, { useEffect, useState } from 'react';
import './home.css';
// import { useHistory, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import Navbar from '../../components/Navbar/Navbar';
import { CardProductLoader, CategoryProductLoader } from '../../components';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct';
import CardProduct from '../../components/CardProduct/CardProduct';
import axios from '../../configs/axiosConfig';

function Home() {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingCategory, setLoadingCategory] = useState(false);
  useEffect(() => {
    getAllProducts();
    getAllCategory();

    document.title = 'Penuhi Kebutuhan Fashion di Blanja!';
  }, []);

  const getAllProducts = async () => {
    setLoadingProducts(true);
    try {
      const response = await axios.get(`/products/`);
      const allProducts = response.data.data;

      setProducts(allProducts);
      // setLoadingProducts(false);
    } catch {
      console.error();
    }
  };

  const getAllCategory = async () => {
    setLoadingCategory(true);
    try {
      const response = await axios.get(`/category`);
      const allCategory = response.data.result;
      setCategory(allCategory);
      // setLoadingCategory(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <BannerCarousel />
      <div className="container">
        <div className="category-heading">
          <p className="heading-product">Category</p>
          <p className="subheading-product">What are you currently looking for</p>
        </div>
        {/* <div className="d-flex"> */}
        {loadingCategory ? (
          <div className="d-flex" style={{ overflow: 'hidden' }}>
            <CategoryProductLoader fill={Number(5)} />
          </div>
        ) : (
          <CategoryProduct category={category} />
        )}
        {/* </div> */}
      </div>
      <div className="container">
        <div className="product-heading">
          <p className="heading-product">New</p>
          <p className="subheading-product">You’ve never seen it before!</p>
        </div>
        <div className="card-product">
          {loadingProducts ? <CardProductLoader fill={Number(15)} /> : <CardProduct products={products} />}
        </div>
      </div>
      <div className="container">
        <div className="product-heading">
          <p className="heading-product">Popular</p>
          <p className="subheading-product">Find clothes that are trending recently</p>
        </div>
        <div className="card-product">
          {loadingProducts ? <CardProductLoader fill={Number(15)} /> : <CardProduct products={products} />}
        </div>
      </div>
    </div>
  );
}

export default Home;

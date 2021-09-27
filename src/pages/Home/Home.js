import React, { useEffect, useState } from 'react';
import './home.css';
// import { useHistory, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import Navbar from '../../components/Navbar/Navbar';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct';
import CardProduct from '../../components/CardProduct/CardProduct';
import axios from '../../configs/axiosConfig';

function Home() {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getAllProducts();
    getAllCategory();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`/products/`);
      const allProducts = response.data.data;
      setProducts(allProducts);
    } catch {
      console.error();
    }
  };

  const getAllCategory = async () => {
    try {
      const response = await axios.get(`/category`);
      const allCategory = response.data.result;
      setCategory(allCategory);
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
        <CategoryProduct category={category} />
        {/* </div> */}
      </div>
      <div className="container">
        <div className="product-heading">
          <p className="heading-product">New</p>
          <p className="subheading-product">You’ve never seen it before!</p>
        </div>
        <div className="card-product">
          <CardProduct products={products} />
        </div>
      </div>
      <div className="container">
        <div className="product-heading">
          <p className="heading-product">Popular</p>
          <p className="subheading-product">Find clothes that are trending recently</p>
        </div>
        <div className="card-product">
          <CardProduct products={products} />
        </div>
      </div>
    </div>
  );
}

export default Home;

import axios from "axios";
const HOST = "http://localhost:4000";

export const getAllProducts = () => {
  return {
    type: "GET_PRODUCTS",
    payload: axios.get(`http://localhost:4000/products/`),
  };
};

export const searchProducts = (name) => {
  return {
    type: "SEARCH_PRODUCT",
    payload: axios.get(`${HOST}/products?search=${name}`),
  };
};

import axios from "axios";
// const HOST = "http://localhost:4000";

export const getAllCategory = () => {
  return {
    type: "GET_CATEGORY",
    payload: axios.get(`http://localhost:4000/category/`),
  };
};

export const getCategoryByID = (id, page) => {
  return {
    type: "GET_CATEGORY_BY_ID",
    payload: axios.get(`http://localhost:4000/category/${id}?page=${page}`),
  };
};

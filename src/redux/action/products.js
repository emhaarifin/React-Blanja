import axios from "axios";

// export const getAllProducts = () => {
//   return {
//     type: "GET_PRODUCTS",
//     payload: axios.get(`http://localhost:4000/products/`),
//   };
// };

export const postProduct = (formData, history) => (dispatch, getState) => {
  const product = new FormData();
  product.append("name", formData.name);
  product.append("brand", formData.brand);
  product.append("description", formData.description);
  product.append("stock", formData.stock);
  product.append("categoryId", formData.categoryId);
  product.append("image", formData.image);
  product.append("price", formData.price);
  axios
    .post(`http://localhost:4000/v2/products/`, product, {
      headers: {
        Authorization: `Bearer ${getState().user.user.token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      const userData = result.data.result;
      dispatch({ type: "POST_LOGIN", payload: userData });
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

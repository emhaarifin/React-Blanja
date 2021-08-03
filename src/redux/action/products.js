import axios from "axios";

export const postProduct = (formData, history) => (dispatch) => {
  const token = localStorage.getItem("KEY_TOKEN");
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
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      const theproduct = result.data.result;
      dispatch({ type: "POST_PRODUCT", payload: theproduct });
      alert(result.data.message);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const updateProduct = (formData, id, history) => (dispatch) => {
  const token = localStorage.getItem("KEY_TOKEN");
  const product = new FormData();
  product.append("name", formData.name);
  product.append("brand", formData.brand);
  product.append("description", formData.description);
  product.append("stock", formData.stock);
  product.append("categoryId", formData.categoryId);
  product.append("image", formData.image);
  product.append("price", formData.price);
  axios
    .put(`http://localhost:4000/v2/products/${id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      const theproduct = result.data.result;
      dispatch({ type: "PUT_PRODUCT", payload: theproduct });
      alert(result.data.message);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

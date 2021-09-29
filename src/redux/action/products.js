import axios from '../../../src/configs/axiosConfig';
import swal from 'sweetalert';

export const postProduct = (formData, history) => (dispatch) => {
  const token = localStorage.getItem('KEY_TOKEN');
  const product = new FormData();
  product.append('name', formData.name);
  product.append('brand', formData.brand);
  product.append('description', formData.description);
  product.append('stock', formData.stock);
  product.append('categoryId', formData.categoryId);
  product.append('image', formData.image);
  product.append('price', formData.price);
  axios
    .post(`/products/`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((result) => {
      const theproduct = result.data.result;
      dispatch({ type: 'POST_PRODUCT', payload: theproduct });
      swal('success', result?.data?.message || 'Success add product', 'success');
    })
    .catch((error) => {
      return swal('error', error?.response?.data?.message || 'Add product Failed', 'error');
    });
};

export const updateProduct = (formData, id, history) => (dispatch) => {
  const token = localStorage.getItem('KEY_TOKEN');
  const product = new FormData();
  product.append('name', formData.name);
  product.append('brand', formData.brand);
  product.append('description', formData.description);
  product.append('stock', formData.stock);
  product.append('categoryId', formData.categoryId);
  product.append('image', formData.image);
  product.append('price', formData.price);
  axios
    .put(`/products/${id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((result) => {
      const theproduct = result.data.result;
      dispatch({ type: 'PUT_PRODUCT', payload: theproduct });
      swal('success', result?.data?.message || 'Success update product', ' success');
    })
    .catch((error) => {
      return swal('error', error?.response?.data?.message || 'Update product Failed', 'error');
    });
};

export const getPoductsById = (id) => (dispatch) => {
  axios
    .get(`/products/${id}`)
    .then((result) => {
      const data = result.data.result;
      dispatch({ type: 'GET_PRODUCT_BY_ID', payload: data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addToCart = (productId, id, qty) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      user_id: id,
      id: productId,
      qty: qty,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      id: productId,
    },
  };
};

export const adjustItemQty = (productId, qty) => {
  return {
    type: 'ADJUST_ITEM_QTY',
    payload: {
      id: productId,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: 'LOAD_CURRENT_ITEM',
    payload: item,
  };
};

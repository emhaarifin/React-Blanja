import axios from '../../../src/configs/axiosConfig';
export const getAllOrder = (status) => (dispatch) => {
  axios
    .get(`/order?search=${status}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
      },
    })
    .then((result) => {
      const data = result.data.result;
      dispatch({ type: 'SUKSES_ALL_ORDER', payload: data });
    })
    .catch((error) => {
      console.log(error);
    });
};

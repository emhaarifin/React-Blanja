/* eslint-disable no-sequences */
import axios from '../../configs/axiosConfig';
// import { BASE_URL } from "../../configs/db";
import swal from 'sweetalert';

export const login = (body, toggleState, history) => (dispatch) => {
  axios
    .post(`/auth/login/`, body)
    .then((result) => {
      const roles = result.data.result.roles;
      const userData = result.data.result;
      if (roles === 'custommer' && toggleState === 1) {
        return (
          dispatch({ type: 'POST_LOGIN', payload: userData }),
          localStorage.setItem('KEY_TOKEN', userData.token),
          localStorage.setItem('id', userData.id),
          localStorage.setItem('name', userData.name),
          localStorage.setItem('roles', userData.roles),
          localStorage.setItem('REFRESH_TOKEN', userData.refreshToken),
          history.push('/')
        );
      } else if (roles === 'seller' && toggleState === 2) {
        return (
          dispatch({ type: 'POST_LOGIN', payload: userData }),
          localStorage.setItem('KEY_TOKEN', userData.token),
          localStorage.setItem('id', userData.id),
          localStorage.setItem('name', userData.name),
          localStorage.setItem('roles', userData.roles),
          localStorage.setItem('REFRESH_TOKEN', userData.refreshToken),
          history.push('/')
        );
      } else {
        return swal('error', `Your account not found try login as ${roles}`, 'error');
      }
    })
    .catch((error) => {
      swal('error', error?.response?.data?.message || 'login gagal', 'error');
    });
};

export const registerCust = (body, history) => (dispatch) => {
  axios
    .post(`/auth/register/custommer`, body)
    .then((result) => {
      const userData = result.data.result;
      return (
        swal('success', 'Register Success, Check mail to active your account', 'success'),
        dispatch({ type: 'POST_REGISTER', payload: userData }),
        history.push('/auth/login')
      );
    })
    .catch((error) => {
      return swal('error', error?.response?.data?.message || 'Register Failed', 'error');
    });
};
export const registerSel = (body, history) => (dispatch) => {
  axios
    .post(`/auth/register/seller`, body)
    .then((result) => {
      const userData = result.data.result;
      return (
        console.log(userData),
        swal('success', 'Register Success, Check mail to active your account', 'success'),
        dispatch({ type: 'POST_REGISTER', payload: userData }),
        history.push('/auth/login')
      );
    })
    .catch((error) => {
      return swal('error', error?.response?.data?.message || 'Register Failed', 'error');
    });
};

export const updateProfile = (data, setReset) => async (dispatch) => {
  const newData = new FormData();
  newData.append('phone_number', data.phone_number);
  newData.append('gender', data.gender);
  newData.append('store_name', data.store_name);
  newData.append('name', data.name);
  newData.append('date_of_birth', data.date_of_birth);
  newData.append('store_description', data.store_description);
  newData.append('avatar', data.avatar);
  await axios
    .put(`/auth/profile/update/`, newData, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
      },
    })
    .then(() => {
      console.log(newData, data);
      swal('Sukses bro');
      // const newData = result.data.result;
      dispatch({ type: 'UPDATE_PROFILE' });
      setReset(true);
    })
    .catch((error) => {
      return swal('error', error?.response?.data?.message || 'Update failed', 'error');
    });
};
export const getUserById = (id) => (dispatch) => {
  axios
    .get(`/auth/profile/${id}`)
    .then((result) => {
      const data = result?.data?.result[0];
      return dispatch({ type: 'GET_USER_BY_ID', payload: data });
    })
    .catch((error) => {
      return swal('error', error?.response?.data?.message || 'Gagal', 'error');
    });
};

export const getAddress = () => (dispatch) => {
  axios
    .get(`/address`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
      },
    })
    .then((result) => {
      const data = result?.data?.result;
      return dispatch({ type: 'GET_ADDRESS', payload: data });
    })
    .catch((error) => {
      return swal('error', error?.response?.data?.message || 'Gagal', 'error');
    });
};

export const postAddress = (data) => (dispatch) => {
  axios
    .post(`/address`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
      },
    })
    .then((result) => {
      console.log(result);
      const newData = result?.data?.result;
      console.log(newData);
      dispatch({ type: 'POST_ADDRESS', payload: [newData] });
      return swal('success', 'Success Add Address', 'success');
    })
    .catch((error) => {
      console.log(error);
      return swal('error', error?.response?.data?.message || 'Gagal', 'error');
    });
};

export const updateAddress = (id, data) => async (dispatch) => {
  console.log(id, data);
  await axios
    .put(`/address/${id}`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
      },
    })
    .then((result) => {
      console.log(result);
      const newData = result?.data?.result;
      console.log(newData);
      dispatch({ type: 'POST_ADDRESS', payload: [newData] });
      return swal('success', 'Success Update Shipping Address', 'success');
    })
    .catch((error) => {
      console.log(error);
      return swal('error', error?.response?.data?.message || 'Gagal', 'error');
    });
};

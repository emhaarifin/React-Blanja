/* eslint-disable no-sequences */
import axios from '../../configs/axiosConfig';
// import { BASE_URL } from "../../configs/db";

export const login = (body, toggleState, history) => (dispatch) => {
  axios
    .post(`/auth/login/`, body)
    .then((result) => {
      const roles = result.data.result.roles;
      const userData = result.data.result;
      console.log(roles);

      if (roles === 'custommer' && toggleState === 1) {
        return (
          alert(result.data.message),
          dispatch({ type: 'POST_LOGIN', payload: userData }),
          localStorage.setItem('KEY_TOKEN', userData.token),
          localStorage.setItem('id', userData.id),
          localStorage.setItem('name', userData.name),
          localStorage.setItem('roles', userData.roles),
          history.push('/')
        );
      } else if (roles === 'seller' && toggleState === 2) {
        return (
          alert(result.data.message),
          dispatch({ type: 'POST_LOGIN', payload: userData }),
          localStorage.setItem('KEY_TOKEN', userData.token),
          localStorage.setItem('id', userData.id),
          localStorage.setItem('name', userData.name),
          localStorage.setItem('roles', userData.roles),
          history.push('/')
        );
      } else {
        return alert(`Your account not found try login as ${roles}`);
      }
    })
    .catch((error) => {
      alert(error?.response?.data?.message || 'login gagal');
    });
};

export const registerCust = (body, history) => (dispatch) => {
  axios
    .post(`/auth/register/custommer`, body)
    .then((result) => {
      const userData = result.data.result;
      return (
        alert('Register Success, Check mail to active your account'),
        dispatch({ type: 'POST_REGISTER', payload: userData }),
        history.push('/auth/login')
      );
    })
    .catch((error) => {
      console.log(error.response);
      return alert(error);
    });
};
export const registerSel = (body, history) => (dispatch) => {
  axios
    .post(`/auth/register/seller`, body)
    .then((result) => {
      const userData = result.data.result;
      return (
        console.log(userData),
        alert('Register Success, Check mail to active your account'),
        dispatch({ type: 'POST_REGISTER', payload: userData }),
        history.push('/auth/login')
      );
    })
    .catch((error) => {
      console.log(error.response);
      return alert(error);
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
      alert('Sukses bro');
      // const newData = result.data.result;
      dispatch({ type: 'UPDATE_PROFILE' });
      setReset(true);
    })
    .catch((error) => {
      alert(error?.response?.data?.message);
    });
};
export const getUserById = (id) => (dispatch) => {
  axios
    .get(`/auth/profile/${id}`)
    .then((result) => {
      console.log(result, 'progile');
      const data = result?.data?.result[0];
      dispatch({ type: 'GET_USER_BY_ID', payload: data });
    })
    .catch((error) => {
      alert(error?.response?.data?.message || 'Gagal');
    });
};

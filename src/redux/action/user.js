/* eslint-disable no-sequences */
import axios from 'axios';
// import { BASE_URL } from "../../configs/db";

export const login = (body, toggleState, history) => (dispatch) => {
  axios
    .post(`http://localhost:4000/v2/auth/login/`, body)
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
      alert(error.response.data.message);
    });
};

export const registerCust = (body, history) => (dispatch) => {
  axios
    .post(`http://localhost:4000/v2/auth/register/custommer`, body)
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
    .post(`http://localhost:4000/v2/auth/register/seller`, body)
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

export const updateProfile = (id, data) => (dispatch) => {
  // const submitData = new FormData();
  // data.append
  axios
    .put(`http://localhost:4000/v2/auth/profile/update/${id}`, data)
    .then((result) => {
      const newData = result.data.result;
      dispatch({ type: 'UPDATE_PROFILE', payload: newData });
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
export const getUserById = (id) => (dispatch) => {
  axios
    .get(`http://localhost:4000/v2/auth/profile/${id}`)
    .then((result) => {
      const data = result.data.result[0];
      dispatch({ type: 'GET_USER_BY_ID', payload: data });
    })
    .catch((error) => {
      alert(error);
    });
};

import axios from "axios";
// import { BASE_URL } from "../../configs/db";

export const login = (body, history) => (dispatch, getState) => {
  axios
    .post(`http://localhost:4000/v2/auth/login/`, body)
    .then((result) => {
      const userData = result.data.result;
      dispatch({ type: "POST_LOGIN", payload: userData });
      localStorage.setItem("KEY_TOKEN", userData.token);
      localStorage.setItem("id", userData.id);
      localStorage.setItem("name", userData.name);
      console.log(getState);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const registerCust = (body, history) => (dispatch) => {
  axios
    .post(`http://localhost:4000/v2/auth/register/custommer`, body)
    .then((result) => {
      console.log(result, "tes result post regis");
      const userData = result.data.result;
      dispatch({ type: "POST_REGISTER", payload: userData });
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
export const registerSel = (body, history) => (dispatch) => {
  axios
    .post(`http://localhost:4000/v2/auth/register/seller`, body)
    .then((result) => {
      console.log(result);
      const userData = result.data.result;
      dispatch({ type: "POST_REGISTER", payload: userData });
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const getUserById = (id) => (dispatch) => {
  axios
    .post(`http://localhost:4000/v2/auth/profile/${id}`)
    .then((result) => {
      // dispatch({ type: "GET_USER_BY_ID", payload: });
      console.log(result);
    })
    .catch((error) => {
      alert(error);
    });
};

import axios from "axios";
import { BASE_URL } from "../../configs/db";

export const login = (body, history) => (dispatch) => {
  axios
    .post(`${BASE_URL}/v2/auth/login/`, body)
    .then((result) => {
      const userData = result.data.result;
      dispatch({ type: "POST_LOGIN", payload: userData });
      alert(result.data.message);
      localStorage.setItem("KEY_TOKEN", userData.token);
      localStorage.setItem("id", userData.id);
      localStorage.setItem("name", userData.name);
      history.push("/");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const registerCus = (body, history) => {
  return {
    type: "POST_REGISTER",
    payload: axios
      .post(`${BASE_URL}/v2/auth/register/custommer`, body)
      .then((result) => {
        if (result.status === 200) {
          alert(result.data.message);
        }
      }),
  };
};

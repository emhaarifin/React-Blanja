import axios from "axios";
import { BASE_URL } from "../../configs/db";

export const login = (body, history) => (dispatch) => {
  return {
    type: "POST_LOGIN",
    payload: axios
      .post(`${BASE_URL}/v2/auth/login/`, body)
      .then((result) => {
        if (result.status === 200) {
          alert(result.data.message);
          try {
            localStorage.setItem("KEY_TOKEN", result.data.result.token);
            localStorage.setItem("id", result.daya.result.id);
            localStorage.setItem("name", result.data.result.name);
            history.push("/");
          } catch (error) {
            console.log(error, " cek");
          }
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      }),
  };
};

export const registerCus = (body, history) => {
  return {
    type: "POST_REGISTER",
    payload: axios
      .post(`${BASE_URL}/v2/auth/register/custommer`, body)
      .then((result) => {
        if (result.status === 200) {
          alert(result.data.message);
          // console.log(result);
        }
      }),
  };
};

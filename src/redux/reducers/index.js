import { combineReducers } from "redux";
import productsReducers from "./products";
import userReducers from "./user";

const reducers = combineReducers({
  products: productsReducers,
  user: userReducers,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    localStorage.removeItem("persist:root");
    localStorage.removeItem("KEY_TOKEN");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("roles");
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

export default rootReducer;

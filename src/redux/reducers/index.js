import { combineReducers } from "redux";
import productsReducers from "./products";
import userReducers from "./user";

const reducers = combineReducers({
  products: productsReducers,
  user: userReducers,
});

export default reducers;

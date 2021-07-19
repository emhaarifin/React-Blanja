import { combineReducers } from "redux";
import productsReducers from "./products";

const reducers = combineReducers({
  products: productsReducers,
});

export default reducers;

import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import user from "./user";

// on va segmenter et organiser par catégorie, 
const reducers = combineReducers({
  user,
  cart, 
  products
});

export default reducers;

import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import sales from "./sales";

export default combineReducers({ products, categories, sales });

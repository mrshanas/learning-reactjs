import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunk));

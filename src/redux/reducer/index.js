import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
  productReducer: productReducer,
  cartReducer: cartReducer
});

export default reducer;

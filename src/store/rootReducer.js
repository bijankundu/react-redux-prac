import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  cartItems: cartReducer,
});

export default rootReducer;

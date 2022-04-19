import { ADD_ITEM, REMOVE_ITEM } from "./cartTypes";

const initalState = { cart: {}, totalQty: 0 };

const cartReducer = (state = initalState, action) => {
  let itemObj = {};
  let modifiedCartObj = {};

  switch (action.type) {
    case ADD_ITEM:
      if (action.payload.id in state.cart) {
        itemObj = { ...state.cart[action.payload.id] };
        itemObj.quantity += 1;
      } else {
        itemObj = { ...action.payload, quantity: 1 };
      }

      modifiedCartObj = { ...state.cart };
      modifiedCartObj[itemObj.id] = itemObj;

      return {
        ...state,
        cart: modifiedCartObj,
        totalQty: state.totalQty + 1,
      };

    case REMOVE_ITEM:
      modifiedCartObj = { ...state.cart };

      if (modifiedCartObj[action.payload].quantity === 1) {
        delete modifiedCartObj[action.payload];
      } else {
        modifiedCartObj[action.payload].quantity -= 1;
      }

      return {
        ...state,
        cart: modifiedCartObj,
        totalQty: state.totalQty - 1 <= 0 ? 0 : state.totalQty - 1,
      };

    default:
      return state;
  }
};

export default cartReducer;

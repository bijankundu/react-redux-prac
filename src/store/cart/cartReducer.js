import { ADD_ITEM, REMOVE_ITEM } from "./cartTypes";

const initalState = {};

const cartReducer = (state = initalState, action) => {
  let itemObj = {};
  let modifiedCartObj = {};

  switch (action.type) {
    case ADD_ITEM:
      if (state.cart[action.payload.id]) {
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
      };

    default:
      return state;
  }
};

export default cartReducer;

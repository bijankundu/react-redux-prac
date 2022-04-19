import { ADD_ITEM, REMOVE_ITEM, APPLY_PROMO, CLEAR_PROMO } from "./cartTypes";

const initalState = { cart: {}, totalQty: 0, totalAmt: 0, discountAmt: 0, promoCode: "" };

const cartReducer = (state = initalState, action) => {
  let itemObj = {};
  let modifiedCartObj = {};
  let totalAmt = state.totalAmt;
  let discountAmt = state.discountAmt;

  switch (action.type) {
    case ADD_ITEM:
      if (action.payload.id in state.cart) {
        itemObj = { ...state.cart[action.payload.id] };
        itemObj.quantity += 1;
        totalAmt += Number(itemObj.price);
      } else {
        itemObj = { ...action.payload, quantity: 1 };
        totalAmt += Number(action.payload.price);
      }

      modifiedCartObj = { ...state.cart };
      modifiedCartObj[itemObj.id] = itemObj;

      return {
        ...state,
        cart: modifiedCartObj,
        totalQty: state.totalQty + 1,
        totalAmt,
      };

    case REMOVE_ITEM:
      modifiedCartObj = { ...state.cart };

      totalAmt -= Number(modifiedCartObj[action.payload].price);

      if (modifiedCartObj[action.payload].quantity === 1) {
        delete modifiedCartObj[action.payload];
      } else {
        modifiedCartObj[action.payload].quantity -= 1;
      }

      return {
        ...state,
        cart: modifiedCartObj,
        totalQty: state.totalQty - 1 <= 0 ? 0 : state.totalQty - 1,
        totalAmt,
      };

    case APPLY_PROMO:
      const promoCode = action.payload;
      if (promoCode.toUpperCase() === "VEG25") discountAmt = state.totalAmt * 0.25;
      else {
        Object.keys(state.cart).map((item) => {
          if (state.cart[item].food_type === "nonveg") discountAmt += Number(state.cart[item].price) * 0.5;
        });
      }

      return {
        ...state,
        discountAmt,
        promoCode,
      };

    case CLEAR_PROMO:
      return {
        ...state,
        discountAmt: 0,
        promoCode: "",
      };

    default:
      return state;
  }
};

export default cartReducer;

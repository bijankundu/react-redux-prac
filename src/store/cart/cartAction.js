import { ADD_ITEM, REMOVE_ITEM, APPLY_PROMO, CLEAR_PROMO } from "./cartTypes";

const addItem = (payload = { id: 0 }) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

const deleteItem = (itemId = 0) => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  };
};

const applyPromo = (promoCode = "") => {
  return {
    type: APPLY_PROMO,
    payload: promoCode,
  };
};

const clearPromo = () => {
  return {
    type: CLEAR_PROMO,
  };
};

export { addItem, deleteItem, applyPromo, clearPromo };

import { ADD_ITEM, REMOVE_ITEM } from "./cartTypes";

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

export { addItem, deleteItem };

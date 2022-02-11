import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  TOGGLE_CART_HIDDEN,
} from "./cartTypes";

export const addItem = (cartItem) => ({
  type: ADD_ITEM,
  payload: cartItem,
});

export const removeItem = (cartItem) => ({
  type: REMOVE_ITEM,
  payload: cartItem,
});

export const clearItemFromCart = (cartItem) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: cartItem,
});

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

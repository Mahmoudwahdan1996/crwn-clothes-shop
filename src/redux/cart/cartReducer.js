import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  TOGGLE_CART_HIDDEN,
} from "./cartTypes";
import { addItemToCart, removeItemFromCart } from "./cartUtilites";

const INSIAL_STATE = {
  cartItems: [],
  hidden: true,
};

const cartReducer = (state = INSIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden:!state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;

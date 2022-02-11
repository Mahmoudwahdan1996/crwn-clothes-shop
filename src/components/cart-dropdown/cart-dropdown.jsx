import React from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch ,useSelector} from "react-redux"

import CartItem from "../cart-Item/cart-item";

import { selectCartItems } from "../../redux/cart/cartSelector";
import {toggleCartHidden}from "../../redux/cart/cartActions"

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems= useSelector(selectCartItems);
  const dispatch=useDispatch()
  const navigate =useNavigate()
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};



export default CartDropdown;

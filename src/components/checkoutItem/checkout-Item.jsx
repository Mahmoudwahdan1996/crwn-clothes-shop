import React from "react";
import {  useDispatch } from "react-redux";



import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/cart/cartActions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
  PriceContainer
} from "./checkout-Item.styles";

const CheckoutItem = ({ cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch= useDispatch();

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() =>dispatch( addItem(cartItem))}>&#10095;</div>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

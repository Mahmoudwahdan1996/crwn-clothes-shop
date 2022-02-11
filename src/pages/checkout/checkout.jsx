import React from "react";
import {  useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";

import CheckoutItem from "./../../components/checkoutItem/checkout-Item";

import CustomButton from './../../components/custom-button/custom-button';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems =useSelector(selectCartItems);
  const total =useSelector(selectCartTotal)
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer className='checkout-header'>
        <HeaderBlockContainer className='header-block'>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer className='header-block'>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer className='header-block'>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer className='header-block'>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer className='header-block'>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <TotalContainer>TOTAL: ${total}</TotalContainer>
      

      <CustomButton type='submit'>Bay Now</CustomButton>

    </CheckoutPageContainer>
  );
};


export default Checkout ;

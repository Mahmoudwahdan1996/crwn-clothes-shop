import React, { useState } from "react";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utilits";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelector";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cartIcon/cartIcon";
import CartDropdown from "./../cart-dropdown/cart-dropdown";

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
  OptionDiv,
  StyledBurger,
  IconsContainer,
} from "./header.styles";

const Header = () => {
  const [open, setOpen] = useState(false);
  const currentUser =useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden)
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer open={open} >
        <OptionLink to='/shop'  onClick={() => setOpen(!open)}>SHOP</OptionLink>
        <OptionLink to='/contact'  onClick={() => setOpen(!open)}> CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => {
            auth.signOut()
            setOpen(!open)
          }}>Sign Out</OptionDiv>
        ) : (
          <OptionLink to='/signin' onClick={() => setOpen(!open)}>Sign In</OptionLink>
        )}
        <OptionLink to='/register' onClick={() => setOpen(!open)} >Register</OptionLink>
        <OptionLink to='/checkout' onClick={() => setOpen(!open)} >Check Out</OptionLink>

      </OptionsContainer>

      <IconsContainer>
        <CartIcon onClick={() => setOpen(!open)} />
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </IconsContainer>

      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};


export default Header;

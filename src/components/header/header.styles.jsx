import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  font-weight:bold;
  &:hover {
    color: #09c;
  }
  @media screen and (max-width: 576px) {
    font-size: 2rem;
  } ;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 992px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 768px) {
    height: 50px;
    margin-bottom: 0;
    margin-top:15px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  height: 100%;
  padding: 25px;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #000000c2;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;


export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 85%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #fff;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    padding: 2rem;
    position: absolute;
    top: 70px;
    right: 0;
    z-index: 9999;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    height: calc(100vh - 70px);
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

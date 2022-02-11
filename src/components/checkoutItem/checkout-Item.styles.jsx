import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PriceContainer = styled.span`
  width: 23%;
  display: flex;
  justify-content: center;
   @media screen and (max-width: 768px) {
    width: 15%;
  }
`;

export const QuantityContainer = styled.span`
  width: 23%;
  display: flex;
  justify-content: center;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    div {
      cursor: pointer;
    }
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 15%;
  }
`;

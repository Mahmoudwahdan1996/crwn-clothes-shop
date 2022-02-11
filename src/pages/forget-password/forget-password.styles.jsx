import styled from "styled-components";
import { Link } from "react-router-dom";

export const ForgetContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  border: 1px solid black;
  padding: 20px;

  .send-password {
    margin: 0 auto;
    width: 100%;
  }
`;

export const ForgetTitle = styled.h2`
  text-align: center;
`;

export const SpanForOr = styled.span`
  display: block;
  text-align: center;
  margin: 15px 0;
  font-weight: bold;
  font-size: 18px;
`;

export const ForgetLink = styled(Link)`
  text-align: center;
  display: block;
  margin: 0 0 5px;
  padding: 15px 0;
  background-color: black;
  color: white;
  font-size: 18px;
  font-weight: bold;
  &:hove {
    background-color: white;
    color: black;
  }
`;

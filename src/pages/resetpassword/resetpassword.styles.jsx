import styled from "styled-components";
// import { Link } from "react-router-dom";

export const ResetContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  border: 1px solid black;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: auto;
    margin: 30px 30px;

  }

  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 30px auto;
  }
`;

export const ResetTitle = styled.h2`
  text-align: center;
`;

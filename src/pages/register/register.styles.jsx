import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  form {
    width: 50%;
  }

  @media screen and (max-width: 450px) {
    form {
      width: 80%;
    }
  }
  @media screen and (max-width: 768px) {
    form {
      width: 80%;
    }
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;

  @media screen and (max-width: 768px) {
    width: 85%;
    margin: 20px auto;

    span {
      text-align: center;
      margin-bottom: 20px;
      font-size: 18px;
    }
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    margin: 10px auto;
  }
`;

export const ButtonsBarContainer = styled.div`
  padding: 20px 0;

  .sign-in {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    gap: 20px;
    margin: 10px 0;
    .sign-in {
      width: 50%;
    }
  }
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin: 15px 0;
    gap: 20px;
    .sign-in {
      width: 100%;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }
  @media screen and (max-width: 450px) {
    margin: 15px auto;
  }
`;

import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100% 
  & > div {
    margin: 0 auto 30px;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    width: 100%;
    
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    width: 100%;
    & > div {
      margin: 0 auto 30px;
    }
  }
`;

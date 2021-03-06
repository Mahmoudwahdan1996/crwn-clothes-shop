import React from "react";

import { HomePageContainer } from "./home.styles";

import Directory from "../../components/directory/directory";

const Home = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Home;

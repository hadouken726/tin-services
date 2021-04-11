import React from "react";

import Glass from "../../components/Glass";
import Header from "../../components/Header";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Glass size={80}>
        <Header />
      </Glass>
    </Container>
  );
};

export default Home;

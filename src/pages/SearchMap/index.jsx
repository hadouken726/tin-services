import React from "react";
import Glass from "../../components/Glass";
import { Container, Header, HomeIcon, UserIcon, Content } from "./styles";

import logo from "../../assets/logo.png";

const SearchMap = () => {
  return (
    <Container>
      <Glass size={90}>
        <Header>
          <img src={logo} alt="Tin Services" />
          <div>
            <button>
              <HomeIcon />
            </button>
            <button>
              <UserIcon />
            </button>
          </div>
        </Header>

        <Content></Content>
      </Glass>
    </Container>
  );
};

export default SearchMap;

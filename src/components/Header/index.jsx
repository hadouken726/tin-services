import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import { Container, Content, Button } from "./styles";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Tin Services" />
      <Content>
        <Link className="link active" to="/">
          Home
        </Link>
        <Link className="link" to="/">
          Sobre nós
        </Link>
        <Button>Registre-se</Button>
      </Content>
    </Container>
  );
};

export default Header;

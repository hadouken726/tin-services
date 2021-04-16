import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";

import { Container, Content, Button } from "./styles";

const Header = ({ current }) => {
  const history = useHistory();

  return (
    <Container>
      <img src={logo} alt="Tin Services" draggable="false" />
      <Content>
        <Link className={current === "home" ? "link active" : "link"} to="/">
          Home
        </Link>
        <Link
          className={current === "about" ? "link active" : "link"}
          to="/about"
        >
          Sobre nós
        </Link>
        <Button onClick={() => history.push("/register")}>Registre-se</Button>
      </Content>
    </Container>
  );
};

export default Header;

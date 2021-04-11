import React from "react";

import Glass from "../../components/Glass";

import {
  Container,
  Header,
  Avatar,
  Logo,
  LogoImage,
  LogoAvatar,
} from "./styles";

import imgLogo from "../../assets/logo.svg";

import imgAvatar from "../../assets/avatar-marcelo.svg";
import DashBoardNegAnuncio from "../../components/DashBoardNegAnuncio";

const Dashboard = () => {
  return (
    <Container>
      <Glass>
        <Header>
          <Logo>
            <LogoImage src={imgLogo} draggable="false" />
          </Logo>
          <Avatar>
            <LogoAvatar src={imgAvatar} draggable="false" />
          </Avatar>
        </Header>
        
        <DashBoardNegAnuncio />

      </Glass>
    </Container>
  );
};

export default Dashboard;

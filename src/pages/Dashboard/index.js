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
import DashBoardNegAnuncio from "../../components/DashBoardNegAnuncio";



const Dashboard = () => {
  const imgAvatar = "https://trello-attachments.s3.amazonaws.com/6071a39f1949627993269405/245x247/cef5957b3390caa1e9995afffae634fb/avatar-marcelo.png";
  // const imgAvatar = "https://ca.slack-edge.com/TQZR39SET-U01D5FCB5J6-94ce2bb97a7f-512";
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

import React, { useEffect } from "react";
import { useHistory } from "react-router";
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
import DashBoardNegsPosts from "../../components/DashBoard/DashBoardNegsPosts";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");

  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
    // const user = {
    //   id: userId,
    //   token: token,
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imgAvatar =
    "https://trello-attachments.s3.amazonaws.com/6071a39f1949627993269405/245x247/cef5957b3390caa1e9995afffae634fb/avatar-marcelo.png";
  return (
    <Container>
      <Glass size={95} >
        <Header>
          <Logo>
            <LogoImage src={imgLogo} draggable="false" />
          </Logo>
          <Avatar>
            <LogoAvatar src={imgAvatar} draggable="false" />
          </Avatar>
        </Header>
        <DashBoardNegsPosts/>
        <button>Criar Anúncios</button>
      </Glass>
    </Container>
  );
};

export default Dashboard;


import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Glass from "../../components/Glass";
import GlobalModal from "../../components/GlobalModal";
import CreatePosts from "../../components/CreatePosts";

import {
  Container,
  Header,
  Avatar,
  Logo,
  LogoImage,
  LogoAvatar,
  Button,
} from "./styles";

import imgLogo from "../../assets/logo.svg";
import DashBoardNegsPosts from "../../components/DashBoard/DashBoardNegsPosts";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

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
    <>
    <Container>
      <Glass size={95}>
        <Header>
          <Logo>
            <LogoImage src={imgLogo} draggable="false" />
          </Logo>
          <Avatar>
            <LogoAvatar src={imgAvatar} draggable="false" />
          </Avatar>
        </Header>
        <DashBoardNegsPosts />
        <Button onClick={handleOpenModal} className="secondary">
          Criar Anúncios
        </Button>
      </Glass>
    </Container>
    <GlobalModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
    <CreatePosts />    
  </GlobalModal>
  </>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Glass from "../../components/Glass";
import GlobalModal from "../../components/GlobalModal";
import CreatePosts from "../../components/CreatePosts";
import { useUser } from "../../contexts/User";
import { getId, getToken } from "../../services/auth";

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
import api from "../../services/api";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useUser({});
  const userId = getId();

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`users/${userId}`, {
          headers: { Authorization: "Bearer " + getToken() },
        });
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const imgAvatar = user.urlAvatar;

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

          {user.type === "client" && (
            <Button onClick={handleOpenModal} className="secondary">
              Criar Anúncios
            </Button>
          )}
        </Glass>
      </Container>
      <GlobalModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <CreatePosts />
      </GlobalModal>
    </>
  );
};

export default Dashboard;

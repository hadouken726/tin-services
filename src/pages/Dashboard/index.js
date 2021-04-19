import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Glass from "../../components/Glass";
import GlobalModal from "../../components/GlobalModal";
import CreatePosts from "../../components/CreatePosts";
// import CreateAvaliation from "../../components/CreateAvaliation";

import { useUser } from "../../contexts/User";
import { getId, getToken } from "../../services/auth";

import {
  Container,
  Header,
  // Avatar,
  // Logo,
  // LogoImage,
  // LogoAvatar,
  MapIcon,
  HomeIcon,
  OutIcon,
  UserIcon,
  Button,
} from "./styles";

import imgLogo from "../../assets/logo.svg";
import DashBoardNegsPosts from "../../components/DashBoard/DashBoardNegsPosts";
import api from "../../services/api";

const Dashboard = () => {
  const token = getToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useUser({});
  const userId = getId();

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const history = useHistory();

  const sendTo = (route) => history.push(`/${route}`);

  const logOut = () => {
    localStorage.clear();
    history.push("/");
  };

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
          headers: { Authorization: "Bearer " + token },
        });
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Glass size={90}>
          <Header>
            <img src={imgLogo} draggable="false" alt="Logo" />

            <div>
              <button onClick={() => sendTo("dashboard")}>
                <HomeIcon />
              </button>
              <button onClick={() => sendTo("searchmap")}>
                <MapIcon />
              </button>
              <button>
                <img src={user.urlAvatar} alt="avatar" />
                {/* <UserIcon /> */}
              </button>
              <button onClick={logOut} className="logout">
                <OutIcon />
              </button>
            </div>
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
        <CreatePosts handleCloseModal={handleCloseModal} />
      </GlobalModal>
    </>
  );
};

export default Dashboard;

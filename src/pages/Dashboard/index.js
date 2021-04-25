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
  MapIcon,
  HomeIcon,
  OutIcon,
  Button,
} from "./styles";

import imgLogo from "../../assets/logo.svg";
import DashBoardNegsPosts from "../../components/DashBoard/DashBoardNegsPosts";
import api from "../../services/api";
import EditUserModal from "../../components/EditUserModal";

const Dashboard = () => {
  const token = getToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useUser({});
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const userId = getId();

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenEditModal = () => setEditModalOpen(true);

  const handleCloseEditModal = () => setEditModalOpen(false);

  const history = useHistory();

  const sendTo = (route) => history.push(`/${route}`);

  const handleEditUser = () => {
    handleOpenEditModal();
  };

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
              <button onClick={handleEditUser}>
                <img src={user.urlAvatar} alt="avatar" />
                {/* <UserIcon /> */}
              </button>
              <button onClick={logOut} className="logout">
                <OutIcon />
              </button>
            </div>

            <GlobalModal
              isOpen={isEditModalOpen}
              onRequestClose={handleCloseEditModal}
            >
              <EditUserModal user={user} />
            </GlobalModal>
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

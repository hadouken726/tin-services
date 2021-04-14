import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Glass from "../../components/Glass";
import Header from "../../components/Header";

import GlobalModal from "../../components/GlobalModal";

import homeImg1 from "../../assets/worker2.svg";

import { Container, Content, TextContent, Button } from "./styles";

const Home = () => {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Container>
      <Glass size={90}>
        <Header current="home" />
        <Content>
          <TextContent>
            <p>
              A maneira mais rápida e eficiente de conectar quem precisa de um
              serviço e quem oferece um serviço.
              <span>
                Entre na plataforma e conecte-se com quem pode te ajudar
              </span>
            </p>

            <div>
              <Button onClick={() => history.push("/login")}>Login</Button>
              <button onClick={handleOpenModal} className="secondary">
                Explorar
              </button>
            </div>
          </TextContent>
          <img src={homeImg1} alt="Worker" draggable="false" />
        </Content>
      </Glass>

      <GlobalModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h2>Conteúdo aqui!</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          doloribus doloremque soluta quisquam dolore mollitia quidem sequi ab
          ipsum magni. Deserunt quasi provident in tenetur eos, nam rerum ea
          odit!
        </p>
      </GlobalModal>
    </Container>
  );
};

export default Home;

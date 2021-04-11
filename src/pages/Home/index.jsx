import React from "react";

import Glass from "../../components/Glass";
import Header from "../../components/Header";

import homeImg1 from "../../assets/worker.1.svg";

import { Container, Content, TextContent, Button } from "./styles";

const Home = () => {
  return (
    <Container>
      <Glass size={90}>
        <Header />
        <Content>
          <TextContent>
            <p>
              A maneira mais rápida e eficiente de conectar quem precisa de um
              serviço e quem oferece um serviço.{" "}
              <b>Entre na plataforma e conecte-se com quem pode te ajudar</b>
            </p>

            <div>
              <Button>Login</Button>
              <button>Explorar</button>
            </div>
          </TextContent>
          <img src={homeImg1} alt="Worker" />
        </Content>
      </Glass>
    </Container>
  );
};

export default Home;

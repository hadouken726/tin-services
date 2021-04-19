import React from "react";
import { useHistory } from "react-router-dom";

import Glass from "../../components/Glass";
import Header from "../../components/Header";

import homeImg1 from "../../assets/worker2.svg";

import { Container, Content, TextContent, Button } from "./styles";

const Home = () => {
  const history = useHistory();

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
              <button
                onClick={() => history.push("/about")}
                className="secondary"
              >
                Explorar
              </button>
            </div>
          </TextContent>
          <img src={homeImg1} alt="Worker" draggable="false" />
        </Content>
      </Glass>
    </Container>
  );
};

export default Home;

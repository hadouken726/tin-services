import React, { useState, useEffect } from "react";
import { getToken } from "../../services/auth";
import ReactWhatsapp from "react-whatsapp";

import {
  Container,
  Header,
  Content,
  Description,
  Avaliations,
  DetailsBox,
  ZapIcon,
} from "./styles";

import { categories } from "../../utils/categories";

import api from "../../services/api";
import Stars from "../Stars";

const UserInfoModal = ({ user, clients, providers }) => {
  const [userCategory, setUserCategory] = useState({});
  const [avaliations, setAvaliations] = useState([]);

  useEffect(() => {
    const category = categories.find(
      (category) => category.id === Number(user.categoryId)
    );

    (async () => {
      try {
        const response = await api.get(`avaliations`, {
          headers: { Authorization: "Bearer " + getToken() },
        });

        setAvaliations(response.data);
      } catch (error) {
        console.log(error);
      }
    })();

    setUserCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header>
        <img src={user.urlAvatar} alt="Usr avatar" />
        <div>
          <p>{user.name}</p>
          <span>{userCategory && userCategory.name}</span>
        </div>
      </Header>
      <Content>
        <Description>
          <h4>
            <b>Descrição</b>
          </h4>
          <p>{user.desc}</p>
        </Description>

        <Avaliations>
          <h4>
            <b>Avaliações</b>
          </h4>
          <DetailsBox>
            <div className="avaliations">
              {avaliations.length > 0 &&
                avaliations
                  .filter(
                    (avaliation) => Number(avaliation.evaluatedId) === user.id
                  )
                  .map((avaliation) => (
                    <article key={avaliation.id}>
                      {clients
                        .filter(
                          (client) => client.id === Number(avaliation.userId)
                        )
                        .map((client) => (
                          <p>{client.name}</p>
                        ))}
                      <p>{avaliation.feedback}</p>
                      <Stars score={avaliation.score} />
                    </article>
                  ))}
            </div>
          </DetailsBox>
        </Avaliations>
        <ReactWhatsapp
          className="zap-button"
          number="558688213588"
          // number={user.phone}
          message="Tin - services: Olá, gostaria de solicitar um serviço!"
        >
          Enviar mensagem <ZapIcon />
        </ReactWhatsapp>
      </Content>
    </Container>
  );
};

export default UserInfoModal;

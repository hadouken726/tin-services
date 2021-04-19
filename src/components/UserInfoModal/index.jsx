import React, { useState, useEffect } from "react";
import { getId, getToken } from "../../services/auth";
import ReactWhatsapp from "react-whatsapp";

import {
  Container,
  Header,
  Content,
  Description,
  Avaliations,
  DetailsBox,
  ZapIcon,
  Adverts,
} from "./styles";

import { categories } from "../../utils/categories";

import api from "../../services/api";
import Stars from "../Stars";
import { useHistory } from "react-router-dom";

const UserInfoModal = ({ user, clients, providers }) => {
  const [orders, setOrders] = useState([]);
  const [userCategory, setUserCategory] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const category =
    user.type === "provider"
      ? categories.find((cat) => cat.id == user.categoryId)
      : categories.find((cat) => cat.id == getId());

  const history = useHistory();
  const getOrders = async () => {
    const response = await api.get(`orders`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    setOrders(response.data.filter((order) => order.madeBy == user.id));
  };
  const createOrder = async () => {
    try {
      const response = await api.post("orders", {
        status: "requested",
        changedAt: new Date().toString(),
        madeBy: getId().toString(),
        userId: getId().toString(),
        evaluatedBy: [],
        providerId: user.id.toString(),
        desc: `Gostaria de solicitar um serviço de ${category.name}`,
        categoryId: user.categoryId,
      });
      console.log("order criada com sucesso!!");
      history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const filteredNumber = user.phone
      .split("")
      .filter((digit) => "123456789".includes(digit));

    const orders = getOrders();

    setOrders(orders);

    setPhoneNumber(filteredNumber.join(""));

    setUserCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(orders);
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
              {user.avaliations.length > 0 &&
                user.avaliations.map((avaliation) =>
                  user.type === "provider" ? (
                    <article key={avaliation.id}>
                      <p>
                        {clients.length > 0 &&
                          [...clients].find((u) => avaliation.userId == u.id)
                            .name}
                      </p>
                      <p>{avaliation.feedback}</p>
                      <Stars score={avaliation.score} />
                    </article>
                  ) : (
                    <article key={avaliation.id}>
                      <p>
                        {providers.length > 0 &&
                          [...providers].find((u) => avaliation.userId == u.id)
                            .name}
                      </p>
                      <p>{avaliation.feedback}</p>
                      <Stars score={avaliation.score} />
                    </article>
                  )
                )}
            </div>
          </DetailsBox>
        </Avaliations>

        {user.type === "client" && (
          <Adverts>
            <h4>Anúncios</h4>

            <div>
              {orders.length > 0 && orders.map((order) => <p>{order.desc}</p>)}
            </div>
          </Adverts>
        )}

        <ReactWhatsapp
          className="zap-button"
          // number={`55` + user.phone.replace(/-/g, "")}
          number={"55" + phoneNumber}
          message="Tin - services: Olá, gostaria de solicitar um serviço!"
        >
          Enviar mensagem <ZapIcon />
        </ReactWhatsapp>
        {user.type === "provider" && (
          <button className="ask-service" onClick={createOrder}>
            Solicitar serviço
          </button>
        )}
      </Content>
    </Container>
  );
};

export default UserInfoModal;

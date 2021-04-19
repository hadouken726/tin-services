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
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const category = categories.find(
      (category) => category.id === Number(user.categoryId)
    );

    const filteredNumber = user.phone
      .split("")
      .filter((digit) => "123456789".includes(digit));

    setPhoneNumber(filteredNumber.join(""));

    setUserCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
        <Container>
            <Header>
                <img src={user.urlAvatar} alt="Usr avatar"/>
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
                            user.avaliations
                                .map((avaliation) => (
                                    user.type === "provider" ?
                                        (<article key={avaliation.id}>
                                            <p>{clients.length > 0 && [...clients].find(u => avaliation.userId == u.id).name}</p>
                                            <p>{avaliation.feedback}</p>
                                            <Stars score={avaliation.score}/>
                                        </article>) :
                                        (<article key={avaliation.id}>
                                            <p>{providers.length > 0 && [...providers].find(u => avaliation.userId == u.id).name}</p>
                                            <p>{avaliation.feedback}</p>
                                            <Stars score={avaliation.score}/>
                                        </article>)
                                ))}
                        </div>
                    </DetailsBox>
                </Avaliations>
                <ReactWhatsapp
                    className="zap-button"
                    // number={`55` + user.phone.replace(/-/g, "")}
                    number={"55" + phoneNumber}
                    message="Tin - services: Olá, gostaria de solicitar um serviço!"
                >
                    Enviar mensagem <ZapIcon/>
                </ReactWhatsapp>
            </Content>
        </Container>
    );
};

export default UserInfoModal;

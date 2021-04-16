import { MdShare, MdPermPhoneMsg } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";
import ReactStars from "react-rating-stars-component";

import {
  DivCardDashBoard,
  UserAvatarContainer,
  ProviderAvatar,
  DivName,
  DivDate,
  DivStatus,
  DivStars,
  DivCompartilhar,
  DivClose,
} from "./styled";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { getToken } from "../../../services/auth";

const CardDashBoard = ({ order, type, IsNegociation, user, star, setStar }) => {
  const [provider, setProvider] = useState({})

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const getProvider = (providerId) => {
    (async () => {
      try {
        const { data } = await api.get(`users/${providerId}`, {
          headers: { Authorization: "Bearer " + getToken() },
        });
        console.log(data);
        setProvider(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  // PROVIDER NEGOCIATION
  return type === "provider" && IsNegociation ? (
    // {getProvider(order.providerId)}

    <DivCardDashBoard>
      <UserAvatarContainer>
        <ProviderAvatar src={user.urlAvatar} draggable="false" />
        <h4>{order.userId}</h4>
      </UserAvatarContainer>

      <DivName>
        <h4>{"order.user.name"}</h4>
        <h4>{`Categoria: ${order.categoryId}`}</h4>
      </DivName>

      <DivDate>
        <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
        <h4> </h4>
      </DivDate>

      <DivStatus>
        <h4>{order.status}</h4>
        <h4> </h4>
      </DivStatus>

      <DivStars>
        <ReactStars
          edit={false} // aqui podemos editar com true
          value={3} // aqui traz o valor do score
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
      </DivStars>

      <DivCompartilhar>
        <MdShare color={"#24FF00"} />
      </DivCompartilhar>
    </DivCardDashBoard>
  ) : type === "client" && IsNegociation ? ( // CLIENT EM NEGOCIAÇÃO
    <DivCardDashBoard>
      <UserAvatarContainer>
        <ProviderAvatar src={order.urlAvatar} draggable="false" />
        <h4>{order.providerId}</h4>
      </UserAvatarContainer>

      <DivName>
        <h4 style={{ color: "red" }}>{order.category}</h4>
        <h4>{order.desc}</h4>
      </DivName>

      <DivDate>
        <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
        <h4> </h4>
      </DivDate>

      <DivStatus>
        <h4>{order.status}</h4>
        <h4> </h4>
      </DivStatus>

      <DivClose>
        <CgCloseO color={"#24FF00"} />
      </DivClose>

      <DivCompartilhar>
        <MdPermPhoneMsg color={"#24FF00"} />
      </DivCompartilhar>
    </DivCardDashBoard>
  ) : type === "client" && IsNegociation === false ? ( // CLIENT EM ANUNCIOS
    <h1>Cliente Anuncio</h1>
  ) : (
    // PROVIDER PODE VER POSTS E ENCAMINHAR UMA MENSAGEM AO CLIENTE
    <DivCardDashBoard>
      <UserAvatarContainer>
        <ProviderAvatar src={user.urlAvatar} draggable="false" />
        <h4>{order.userId}</h4>
      </UserAvatarContainer>

      <DivName>
        <h4>{"Tipo de Serviço:"}</h4>
        <h4>{`${order.desc}`}</h4>
      </DivName>

      <DivDate>
        <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
        <h4> </h4>
      </DivDate>

      <DivStatus>
        <h4>{order.status}</h4>
        <h4> </h4>
      </DivStatus>

      <DivStars>
        <ReactStars
          edit={false} // aqui podemos editar com true
          value={0} // aqui traz o valor do score
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
      </DivStars>

      <DivCompartilhar>
        <MdShare color={"#24FF00"} />
      </DivCompartilhar>
    </DivCardDashBoard>
  );
};

export default CardDashBoard;

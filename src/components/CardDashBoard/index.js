import Stars from "../Stars";
import { MdShare, MdPermPhoneMsg } from "react-icons/md";
import { CgCloseO } from "react-icons/cg"

import {
  DivCardDashBoard,
  UserAvatarContainer,
  ProviderAvatar,
  DivName,
  DivDate,
  DivStatus,
  DivStars,
  DivCompartilhar,
} from "./styled";

const CardDashBoard = ({ order = null, type, IsNegociation }) => {

  // PROVIDER EM NEGOCIAÇÕES
  return type === "provider" && IsNegociation ? (
    <DivCardDashBoard>
      <UserAvatarContainer>
        <ProviderAvatar src={order.user.urlAvatar} draggable="false" />
        <h4>{order.user.id}</h4>
      </UserAvatarContainer>

      <DivName>
        <h4>{order.user.name}</h4>
        <h4>{`Categoria: ${order.categoryId}`}</h4>
      </DivName>

      <DivDate>
        <h4>{(new Date(order.changedAt).toDateString())}</h4>
        <h4> </h4>
      </DivDate>

      <DivStatus>
        <h4>{order.status}</h4>
        <h4> </h4>
      </DivStatus>

      <DivStars>
        <Stars />
      </DivStars>

      <DivCompartilhar>
        <MdShare color={"#24FF00"} />
      </DivCompartilhar>
    </DivCardDashBoard>
  ) 
  // CLIENT EM NEGOCIAÇÃO
  : type === "client" && IsNegociation ? (
    <DivCardDashBoard>
      <UserAvatarContainer>
        <ProviderAvatar src={order.urlAvatar} draggable="false" />
        <h4>{order.providerId}</h4>
      </UserAvatarContainer>

      <DivName>
        <h4 style={{color: "red"}}>{"order.provider.name"}</h4>
        <h4>{order.desc}</h4>
      </DivName>

      <DivDate>
        <h4>{(new Date(order.changedAt).toDateString())}</h4>
        <h4> </h4>
      </DivDate>

      <DivStatus>
        <h4>{order.status}</h4>
        <h4> </h4>
      </DivStatus>

      <DivStars>
        <CgCloseO color={"#24FF00"} />
      </DivStars>

      <DivCompartilhar>
        <MdPermPhoneMsg color={"#24FF00"} />
      </DivCompartilhar>
    </DivCardDashBoard>
  ) : type === "client" && IsNegociation === false ? (

    <h1>Cliente Anuncio</h1>)

    : 
    // PROVIDER PODE VER POSTS E ENCAMINHAR UMA MENSAGEM AO CLIENTE
    ( 
      <DivCardDashBoard>
        <UserAvatarContainer>
          <ProviderAvatar src={order.user.urlAvatar} draggable="false" />
          <h4>{order.user.id}</h4>
        </UserAvatarContainer>
  
        <DivName>
          <h4>{"Tipo de Serviço:"}</h4>
          <h4>{`${order.desc}`}</h4>
        </DivName>
  
        <DivDate>
          <h4>{(new Date(order.changedAt).toDateString())}</h4>
          <h4> </h4>
        </DivDate>
  
        <DivStatus>
          <h4>{order.status}</h4>
          <h4> </h4>
        </DivStatus>
  
        <DivStars>
          {/* <Stars /> */}
        </DivStars>
  
        <DivCompartilhar>
          <MdShare color={"#24FF00"} />
        </DivCompartilhar>
      </DivCardDashBoard>
    )
};

export default CardDashBoard;

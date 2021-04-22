import { MdShare, MdPermPhoneMsg } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";
import { FaEdit, FaPhoneSquare } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import axios from "axios";
import { categories } from "../../../utils/categories";
import CreateAvaliation from "../../CreateAvaliation";
import GlobalModal from "../../GlobalModal";
import ShareNegociations from "../../ShareNegociations";
import ReactWhatsapp from "react-whatsapp";
import { ImWhatsapp } from "react-icons/im";
import {
  getProvidersPlusAv,
  getClientsPlusAv,
} from "../../../utils/othersInfo";
import {
    DivCardDashBoard,
    UserAvatarContainer,
    ProviderAvatar,
    DivName,
    DivDate,
    DivStatus,
    DivStars,
    DivCompartilhar,
    DivOption,
    DivEdit,
    DivClose,
    Accept,
    Decline,
    DivNegociatePosts, DivCancel, DivAvaliate,
} from "./styled";

const CardDashBoard = ({ order, type, IsNegociation, user, orders, setOrders}) => {
  const [providers, setProviders] = useState([]);
  const [clients, setClients] = useState([]);
  const [orderState, setOrderState] = useState(order);
  const [showAvModal, setShowAvModal] = useState(false);
  const handleCloseModal = () => setShowAvModal(false);
  const [avaliations, setAvaliations] = useState([]);
  const handleOpenModal = () => setShowAvModal(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseShare = () => {
    setIsOpen(false);
  };
  const handleOpenShare = () => {
    setIsOpen(true);
  };
  const handleCancelOrder = async () => {
    try {
      const changedOrder = { ...order, status: "canceled" };
      const response = await api.patch(`/orders/${order.id}`, changedOrder);
      setOrderState(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAcceptRequest = async () => {
    try {
      const changedOrder = { ...order, status: "opened" };
      const response = await api.patch(`/orders/${order.id}`, changedOrder);
      setOrderState(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRecuseRequest = async () => {
    try {
      const changedOrder = { ...order, status: "recused" };
      const response = await api.patch(`/orders/${order.id}`, changedOrder);
      setOrderState(response.data);
    } catch (err) {
      console.log(err);
    }
  };
    const handleDone = async () => {
        try {
            const changedOrder = { ...order, status: "done" };
            const response = await api.patch(`/orders/${order.id}`, changedOrder);
            setOrderState(response.data);
        } catch (err) {
            console.log(err);
        }
    };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const getClient = (clients, userId) => {
    if (clients) {
      return clients.find((client) => client.id == order.userId);
    }
  };

  const getProvider = (providers, userId) => {
    return providers.find((provider) => provider.id == order.providerId);
  };

  useEffect(() => {
    if (type === "provider") {
      try {
        Promise.all([api.get("clients"), api.get("avaliations")]).then(
          axios.spread((resp_clients, resp_avaliations) => {
            setAvaliations(resp_avaliations.data);
            setClients(
              getClientsPlusAv(resp_clients.data, resp_avaliations.data)
            );
          })
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        Promise.all([api.get("providers"), api.get("avaliations")]).then(
          axios.spread((resp_providers, resp_avaliations) => {
            setAvaliations(resp_avaliations.data);
            setProviders(
              getProvidersPlusAv(resp_providers.data, resp_avaliations.data)
            );
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  // PROVIDER NEGOCIATION
  return type === "provider" && IsNegociation && clients.length > 0 ? (
    <>
      <DivCardDashBoard>
        <UserAvatarContainer>
          <ProviderAvatar
            src={getClient(clients, order.userId).urlAvatar}
            draggable="false"
          />
        </UserAvatarContainer>

        <DivName>
          <h3>{getClient(clients, order.userId).name}</h3>
          <p>{`Categoria: ${
            categories.find((category) => category.id == order.categoryId).name
          }`}</p>
        </DivName>

        <DivDate>
          <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
        </DivDate>

        <DivStatus>
          <h4>{orderState.status}</h4>
        </DivStatus>

        {orderState.status === "requested" ? (
          <DivOption>
            <button title="Aceitar serviço" onClick={handleAcceptRequest}>
              <Accept />
            </button>
            <button title="Recusar serviço" onClick={handleRecuseRequest}>
              <Decline />
            </button>
          </DivOption>
        ) : orderState.status === "done" &&
          !orderState.evaluatedBy.includes(orderState.providerId) ? (
          <DivAvaliate>
            <button onClick={handleOpenModal}>Avaliar cliente</button>
          </DivAvaliate>
        ) : orderState.status === "done" &&
          orderState.evaluatedBy.includes(orderState.providerId) ? (
          <DivStars>
            <ReactStars
              edit={false}
              value={
                avaliations.length > 0 &&
                avaliations.find(
                  (av) =>
                    av.orderId == orderState.id &&
                    av.userId == orderState.providerId
                ).score
              }
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </DivStars>
        ) : null}
        <DivNegociatePosts>
          <ReactWhatsapp
            className="zap-button"
            style={{ color: "#24FF00", width: "65px" }}
            number={"55" + getClient(clients, order.userId).phone}
            message={`Tin - services: Olá, presto serviços em ${
              categories.find((category) => category.id == order.categoryId)
                .name
            },`}
          >
            <ImWhatsapp />
          </ReactWhatsapp>
        </DivNegociatePosts>
      </DivCardDashBoard>
      {showAvModal && (
        <CreateAvaliation
          orderState={orderState}
          setOrderState={setOrderState}
          avaliations={avaliations}
          setAvaliations={setAvaliations}
          type={type}
          providers={providers}
          clients={clients}
          handleCloseModal={handleCloseModal}
          user={user}
        />
      )}
    </>
  ) : type === "client" && IsNegociation && providers.length > 0 ? ( // CLIENT EM NEGOCIAÇÃO - ORDERS
    <>
      <DivCardDashBoard>
        <UserAvatarContainer>
          <ProviderAvatar
            src={getProvider(providers, order.providerId).urlAvatar}
            draggable="false"
          />
        </UserAvatarContainer>

        <DivName>
          {/* <h4 style={{ color: "red" }}>{order.category}</h4> */}
          <h4>{`Categoria: ${
            categories.find((category) => category.id == order.categoryId).name
          }`}</h4>
          <h4>{order.desc}</h4>
        </DivName>

        <DivDate>
          <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
        </DivDate>

        <DivStatus>
          <h4>{orderState.status}</h4>
        </DivStatus>
        {orderState.status === "requested" ? (
          <DivCancel>
            <button onClick={handleCancelOrder}><Decline/></button>
          </DivCancel>
        ) : orderState.status === "opened" ? (
            <DivOption>
                <button title="Definir serviço como concluído" onClick={handleDone}>
                    <Accept />
                </button>
                <button title="Cancelar serviço" onClick={handleCancelOrder}>
                    <Decline />
                </button>
            </DivOption>
        ) : orderState.status === "done" &&
          !orderState.evaluatedBy.includes(orderState.userId) ? (
          <DivAvaliate>
            <button onClick={handleOpenModal}>Avaliar serviço</button>
          </DivAvaliate>
        ) : orderState.status === "done" &&
          orderState.evaluatedBy.includes(orderState.userId) ? (
          <DivStars>
            <ReactStars
              edit={false}
              value={
                avaliations.length > 0 &&
                avaliations.find(
                  (av) =>
                    av.orderId == orderState.id &&
                    av.userId == orderState.userId
                ).score
              }
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </DivStars>
        ) : null}
        <DivCompartilhar>
          <button onClick={handleOpenShare}>
            <MdPermPhoneMsg size={24} color={"#24FF00"} />
          </button>
        </DivCompartilhar>
      </DivCardDashBoard>
      {showAvModal && (
        <CreateAvaliation
          orderState={orderState}
          setOrderState={setOrderState}
          avaliations={avaliations}
          setAvaliations={setAvaliations}
          type={type}
          providers={providers}
          clients={clients}
          handleCloseModal={handleCloseModal}
          user={user}
        />
      )}
      <GlobalModal isOpen={isOpen} onRequestClose={handleCloseShare}>
        <ShareNegociations
          provider={getProvider(providers, order.providerId)}
          client={user}
          categoryName={
            categories.find((category) => category.id == order.categoryId).name
          }
        ></ShareNegociations>
      </GlobalModal>
    </>
  ) : type === "client" && IsNegociation === false && providers.length > 0 ? (
    // CLIENT EM ANUNCIOS
    <DivCardDashBoard>
      <UserAvatarContainer>
        <ProviderAvatar src={user.urlAvatar} draggable="false" />
      </UserAvatarContainer>

      <DivName>
        <h4>{`Categoria: ${
          categories.find((category) => category.id == order.categoryId).name
        }`}</h4>
        <h4>{order.desc}</h4>
      </DivName>

      <DivDate>
        <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
      </DivDate>

      <DivStatus>
        <h4>{order.status}</h4>
      </DivStatus>

      <DivClose>
        <CgCloseO color={"#24FF00"} />
      </DivClose>

      <DivEdit>
        <FaEdit color={"#24FF00"} />
      </DivEdit>
    </DivCardDashBoard>
  ) : (
    // PROVIDER PODE VER POSTS E ENCAMINHAR UMA MENSAGEM AO CLIENTE
    type === "provider" &&
    IsNegociation === false &&
    clients.length > 0 && (
      <DivCardDashBoard>
        <UserAvatarContainer>
          <ProviderAvatar
            src={getClient(clients, order.userId).urlAvatar}
            draggable="false"
          />
        </UserAvatarContainer>

        <DivName>
          <h3>{getClient(clients, order.userId).name}</h3>
          <h4>{`Tipo de Serviço: ${
            categories.find((category) => category.id == order.categoryId).name
          }`}</h4>
        </DivName>

        <DivDate>
          <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
        </DivDate>

        <DivStatus>
          <h4>{order.status}</h4>
        </DivStatus>

        <DivNegociatePosts>
          <ReactWhatsapp
            className="zap-button"
            style={{ color: "#24FF00", width: "65px" }}
            number={"55" + getClient(clients, order.userId).phone}
            message={`Meu nome é ${user.name}, presto serviços em ${
              categories.find((category) => category.id == order.categoryId)
                .name
            }, posso fazer um orçamento sem compromisso para você? Obrigado fico no aguardo.`}
          >
            <ImWhatsapp />
          </ReactWhatsapp>
        </DivNegociatePosts>
      </DivCardDashBoard>
    )
  );
};

export default CardDashBoard;

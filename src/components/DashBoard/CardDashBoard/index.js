import { MdShare, MdPermPhoneMsg } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import axios from "axios";
import { categories } from "../../../utils/categories";

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
  DivClose,
  DivEdit,
} from "./styled";

const CardDashBoard = ({ order, type, IsNegociation, user }) => {
  const [providers, setProviders] = useState([]);
  const [clients, setClients] = useState([]);
  const [orderState,setOrderState] = useState(order)
    const [avaliations, setAvaliations] = useState([])
    const handleCancelOrder = async () => {
        try {
            const changedOrder = {...order, status: "canceled"}
            const response = await api.patch(`/orders/${order.id}`,changedOrder)
            setOrderState(response.data)
        }
        catch (err){console.log(err)}
    }
    const handleAcceptRequest = async () => {
        try {
            const changedOrder = {...order, status: "opened"}
            const response = await api.patch(`/orders/${order.id}`,changedOrder)
            setOrderState(response.data)
        }
        catch (err){console.log(err)}
    }
    const handleRecuseRequest = async () => {
        try {
            const changedOrder = {...order, status: "recused"}
            const response = await api.patch(`/orders/${order.id}`,changedOrder)
            setOrderState(response.data)
        }
        catch (err){console.log(err)}
    }
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
              setAvaliations(resp_avaliations.data)
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
              setAvaliations(resp_avaliations.data)
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

  // useEffect(() => {
  //   if (type === "provider" && IsNegociation && clients.length > 0) {
  //     console.log(
  //       getClient(clients, order.userId).avaliations.find(
  //         (avaliation) => avaliation.evaluatedId === order.userId
  //       )
  //     );
  //   }
  // }, [clients]);

  // PROVIDER NEGOCIATION
    return type === "provider" && IsNegociation && clients.length > 0 ? (
        <DivCardDashBoard>
            <UserAvatarContainer>
                <ProviderAvatar
                    src={getClient(clients, order.userId).urlAvatar}
                    draggable="false"
                />
            </UserAvatarContainer>

            <DivName>
                <h4>{getClient(clients, order.userId).name}</h4>
                <h4>{`Categoria: ${
                    categories.find((category) => category.id == order.categoryId).name
                }`}</h4>
            </DivName>

            <DivDate>
                <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
                <h4></h4>
            </DivDate>

            <DivStatus>
                <h4>{orderState.status}</h4>
                <h4></h4>
            </DivStatus>
            {orderState.status === "requested" &&
            <div>
                <button onClick={handleAcceptRequest}>
                    Aceitar serviço
                </button>
                <button onClick={handleRecuseRequest}>
                    Recusar serviço
                </button>
            </div>
            }

            <DivStars>
                <ReactStars
                    edit={false} // aqui podemos editar com true
                    // value={clients.length > 0  ? Number(getClient(clients, order.userId).avaliations.find(
                    //   (avaliation) => avaliation.evaluatedId === order.userId
                    // ).score): 0}

                    value={1}
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

            <DivCompartilhar>
                <MdShare color={"#24FF00"}/>
            </DivCompartilhar>
        </DivCardDashBoard>
    ) : type === "client" && IsNegociation && providers.length > 0 ? ( // CLIENT EM NEGOCIAÇÃO - ORDERS
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
                <h4></h4>
            </DivDate>

            <DivStatus>
                {/*<select onChange={handleClientStatus} defaultValue={orderState.status} name="select">*/}
                {/*    <option value="requested">requested</option>*/}
                {/*    <option value="opened">opened</option>*/}
                {/*    <option value="done">done</option>*/}
                {/*</select>*/}
                <h4>{orderState.status}</h4>
                <h4></h4>
            </DivStatus>
            {orderState.status === "requested" ?
                (<div>
                    <button onClick={handleCancelOrder}>Cancelar solicitação</button>
                </div>)
                :
                orderState.status === "opened" ?
                    (<div>
                        <button onClick={handleCancelOrder}>Cancelar serviço</button>
                    </div>)
                    :
                    orderState.status === "done" && !orderState.evaluatedBy.includes(orderState.userId) ?
                        (<div>
                            {/*handleOpenAvaliation para abrir modal de avaliação*/}
                            <button >Avaliar serviço</button>
                        </div>)
                        : orderState.status === "done" && orderState.evaluatedBy.includes(orderState.userId) ?
                        (<DivStars>
                            <ReactStars
                                edit={false} // aqui podemos editar com true
                                // value={clients.length > 0  ? Number(getClient(clients, order.userId).avaliations.find(
                                //   (avaliation) => avaliation.evaluatedId === order.userId
                                // ).score): 0}

                                value={avaliations.length > 0 ? avaliations.find(av => av.orderId == orderState.id && av.userId == orderState.userId).score : 0}
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </DivStars>)
                        : null

            }


            <DivClose>
                <div onClick={handleCancelOrder} >
                <CgCloseO color={"#24FF00"}/>
                </div>
            </DivClose>

            <DivCompartilhar>
                <MdPermPhoneMsg color={"#24FF00"}/>
            </DivCompartilhar>
        </DivCardDashBoard>
    ) : type === "client" && IsNegociation === false && providers.length > 0 ? (
        // CLIENT EM ANUNCIOS
        <DivCardDashBoard>
            <UserAvatarContainer>
                <ProviderAvatar src={user.urlAvatar} draggable="false"/>
            </UserAvatarContainer>

            <DivName>
                <h4>{`Categoria: ${
                    categories.find((category) => category.id == order.category).name
                }`}</h4>
                <h4>{order.desc}</h4>
            </DivName>

            <DivDate>
                <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
                <h4></h4>
            </DivDate>

            <DivStatus>
                <h4>{order.status}</h4>
                <h4></h4>
            </DivStatus>

            <DivClose>
                <CgCloseO color={"#24FF00"}/>
            </DivClose>

            <DivEdit>
                <FaEdit color={"#24FF00"}/>
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
                    <h4>{"Tipo de Serviço:"}</h4>
                    <h4>{`${
                        categories.find((category) => category.id == order.category).name
                    }`}</h4>
                </DivName>

                <DivDate>
                    <h4>{new Date(order.changedAt).toLocaleDateString()}</h4>
                    <h4></h4>
                </DivDate>

                <DivStatus>
                    <h4>{order.status}</h4>
                    <h4></h4>
                </DivStatus>

                <DivClose>
                    <CgCloseO color={"#24FF00"}/>
                </DivClose>

                <DivEdit>
                    <FaEdit color={"#24FF00"}/>
                </DivEdit>
            </DivCardDashBoard>
        )
    );
};

export default CardDashBoard;

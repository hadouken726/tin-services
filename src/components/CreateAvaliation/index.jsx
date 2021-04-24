import React, { useEffect, useState } from "react";
import { getId, getToken } from "../../services/auth";
import api from "../../services/api";
import { useUser } from "../../contexts/User";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import { categories } from "../../utils/categories";
import {
  Container,
  UserAvatarContainer,
  ProviderAvatar,
  DivBox,
  Button,
  DivStars,
  DivName,
  Header,
} from "./styled";

const CreateAvaliation = ({
  handleCloseModal,
  user,
  orderState,
  setOrderState,
  type,
  providers,
  clients,
  avaliations,
  setAvaliations,
}) => {
  const [score, setScore] = useState(0);
  const { setUser } = useUser({});
  const userId = getId();
  const { register, handleSubmit } = useForm();
  const status = "active";
  const changedAt = new Date().toString();

  const ratingChanged = (newRating) => {
    setScore(newRating);
  };

  const handleForm = async (data) => {
    try {
      let response = {};
      if (type === "provider") {
        response = await Promise.all([
          api.post(`avaliations`, {
            ...data,
            orderId: orderState.id.toString(),
            userId: user.id.toString(),
            evaluatedId: orderState.providerId.toString(),
            score,
          }),
          api.patch(`orders/${orderState.id}`, {
            ...orderState,
            evaluatedBy: [...orderState.evaluatedBy, orderState.providerId],
          }),
        ]);
        setAvaliations([...avaliations, response[0].data]);
        setOrderState(response[1].data);
        console.log(data);
        console.log("Avaliação enviada com sucesso !");
        handleCloseModal();
      } else {
        response = await Promise.all([
          api.post(`avaliations`, {
            ...data,
            orderId: orderState.id.toString(),
            userId: user.id.toString(),
            evaluatedId: orderState.providerId.toString(),
            score,
          }),
          api.patch(`orders/${orderState.id}`, {
            ...orderState,
            evaluatedBy: [...orderState.evaluatedBy, orderState.userId],
          }),
        ]);
        setAvaliations([...avaliations, response[0].data]);
        setOrderState(response[1].data);
        console.log(data);
        console.log("Avaliação enviada com sucesso !");
        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return type === "provider" ? (
    <Container>
      <DivBox>
        <Header>
          <UserAvatarContainer>
            <ProviderAvatar
              src={
                clients.find((client) => orderState.userId == client.id)
                  .urlAvatar
              }
              draggable="false"
            />
          </UserAvatarContainer>
          <DivName>
            <h4>
              {clients.find((client) => orderState.userId == client.id).name}
            </h4>
            <h4>{`Categoria: ${
              categories.find(
                (category) => category.id == orderState.categoryId
              ).name
            }`}</h4>
          </DivName>
        </Header>

        <form onSubmit={handleSubmit(handleForm)}>
          <h1>Avaliação</h1>
          <h2>Pontuação</h2>
          <DivStars>
            <ReactStars
              edit={true}
              value={score}
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

          <h2>Descrição</h2>

          <textarea
            style={{ width: "450px", height: "200px" }}
            placeholder={"Dê um feedback sobre o ..."}
            id={"feedback"}
            {...register("feedback", { required: true })}
            rows={6}
            required
          />
          <br />
          <Button type="submit">Enviar avaliação</Button>
        </form>
      </DivBox>
    </Container>
  ) : (
    <Container>
      <DivBox>
        <Header>
          <UserAvatarContainer>
            <ProviderAvatar
              src={
                providers.find((prov) => orderState.providerId == prov.id)
                  .urlAvatar
              }
              draggable="false"
            />
          </UserAvatarContainer>
          <DivName>
            <h4>
              {providers.find((prov) => orderState.providerId == prov.id).name}
            </h4>
            <h4>{`Categoria: ${
              categories.find(
                (category) => category.id == orderState.categoryId
              ).name
            }`}</h4>
          </DivName>
        </Header>

        <form onSubmit={handleSubmit(handleForm)}>
          <h1>Avaliação</h1>
          <h2>Pontuação</h2>
          <DivStars>
            <ReactStars
              edit={true}
              value={score}
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

          <h2>Descrição</h2>

          <textarea
            style={{ width: "450px", height: "200px" }}
            placeholder={"Dê um feedback sobre o ..."}
            id={"feedback"}
            {...register("feedback", { required: true })}
            rows={6}
            required
          />
          <br />
          <Button type="submit">Enviar avaliação</Button>
        </form>
      </DivBox>
    </Container>
  );
};
export default CreateAvaliation;

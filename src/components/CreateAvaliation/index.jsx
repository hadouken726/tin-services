import React, { useEffect, useState } from "react";
import { Container, DivBox, Button, DivStars } from "./styled";
import { getId, getToken } from "../../services/auth";
import api from "../../services/api";
import { useUser } from "../../contexts/User";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";

export default function CreateAvaliacao({ handleCloseModal }) {
  const [score, setScore] = useState(0);
  const { setUser } = useUser({});
  const userId = getId();
  const evaluatedId = userId;
  const { register, handleSubmit } = useForm();
  const status = "active";
  const changedAt = new Date().toString();

  const ratingChanged = (newRating) => {
    setScore(newRating)
  };

//   {
//     "score": 4,
//     "feedback": "",
//     "orderId": 2,
//     "userId": 1,      <------------  order
//     "evaluatedId": 2
//   }

  const handleForm = (data) => {
    (async () => {
      try {
        await api.post(`avaliations/`, [{ ...data, userId, status, changedAt }]);
  const evaluatedId = userId;
        console.log({ ...data, userId, evaluatedId, score, status, changedAt });
        console.log("Avaliação enviada com sucesso !");
        handleCloseModal()
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.post(`users/${userId}`, {
          headers: { Authorization: "Bearer " + getToken() },
        });
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <DivBox>
        <form onSubmit={handleSubmit(handleForm)}>
          <h1>Avaliação</h1>
          <h2>Pontuação</h2>

          <DivStars>
            <ReactStars
              edit={true}
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

          <h2>Descrição</h2>

          <textarea
            style={{ width: "450px", height: "200px" }}
            placeholder={"Dê um feedback sobre o ..."}
            id={"feedback"}
            {...register("feedback", { required: true })}
            rows={6}
            required
          ></textarea>
          <br />
          <Button type="submit" >Enviar avaliação</Button>
        </form>
      </DivBox>
    </Container>
  );
}

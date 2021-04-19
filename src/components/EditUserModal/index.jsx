import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container, AvatarIcon } from "./styles";
import { getToken } from "../../services/auth";

import api from "../../services/api";

const EditUserModal = ({ user }) => {
  const schema = yup.object().shape({
    urlAvatar: yup.string("Somente texto").url().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async (data) => {
    try {
      await api.patch(`users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h2>Editar perfil</h2>
      <p>Olá {user.name}</p>

      <form onSubmit={handleSubmit(handleData)}>
        <section>
          <div className="icon-box">
            <AvatarIcon />
          </div>
          <input {...register("urlAvatar")} type="text" />
        </section>
        <p>{errors.urlAvatar?.message}</p>
        <button type="submit">Editar</button>
      </form>
    </Container>
  );
};

export default EditUserModal;

import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container, AvatarIcon } from "./styles";
import { getToken } from "../../services/auth";

import api from "../../services/api";
import { useState } from "react";

const EditUserModal = ({ user }) => {
  const [url, setUrl] = useState(user.urlAvatar);
  const [lat, setLat] = useState(user.lat);
  const [lng, setLng] = useState(user.lng);

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
      <p>Olá {user.name} </p>

      <form onSubmit={handleSubmit(handleData)}>
        <section>
          <div className="icon-box">
            <AvatarIcon size={45} />
          </div>
          <input
            {...register("urlAvatar")}
            name="urlAvater"
            value={url}
            type="text"
            placeholder="Editar url do avatar:"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <input
            {...register("lat")}
            name="lat"
            value={lat}
            type="text"
            placeholder="Editar a latitude de sua geolocalização"
            onChange={(e) => {
              setLat(e.target.value);
            }}
          />
          <input
            {...register("lng")}
            name="lng"
            value={lng}
            type="text"
            placeholder="Editar a longitude de sua geolocalização"
            onChange={(e) => {
              setLng(e.target.value);
            }}
          />
        </section>
        <p>{errors.urlAvatar?.message}</p>
        <button type="submit">Editar</button>
      </form>
    </Container>
  );
};

export default EditUserModal;

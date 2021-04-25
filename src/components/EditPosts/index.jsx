import React, { useEffect, useState } from "react";
import { Container, DivBox, Button } from "./styled";
import { getId, getToken } from "../../services/auth";
import api from "../../services/api";
import { useUser } from "../../contexts/User";
import { categories } from "../../utils/categories";
import { useForm } from "react-hook-form";

export default function EditPosts({
  handleCloseModal,
  desc,
  categoryId,
  orderId,
}) {
  const { register, handleSubmit } = useForm();

  const handleForm = (data) => {
    (async () => {
      try {
        await api.patch(`posts/${orderId}`, { ...data }, {
            headers: { Authorization: "Bearer " + getToken() },
          });
        handleCloseModal();
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <Container>
      <DivBox>
        <form onSubmit={handleSubmit(handleForm)}>
          <h1>Anúncio</h1>
          <h3>Categoria</h3>

          <div id="appearance-select">
            <select {...register("categoryId")}>
              {categories.map((category) =>
                categoryId == category.id ? (
                  <option
                    className="option"
                    key={category.id}
                    value={category.id}
                    selected
                  >
                    {category.name}
                  </option>
                ) : (
                  <option
                    className="option"
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                )
              )}
            </select>
          </div>

          <h2>Tipo de Serviço</h2>

          <textarea
            style={{ width: "450px", height: "200px" }}
            placeholder={"Digite um Anúncio..."}
            id={"desc"}
            {...register("desc", { required: true })}
            rows={6}
            required
          >{desc}</textarea>
          <br />
          <Button type="submit">Alterar anúncio</Button>
        </form>
      </DivBox>
    </Container>
  );
}

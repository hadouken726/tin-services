import React, { useEffect } from "react";
import { Container, DivBox, Button } from "./styled";
import { getId, getToken } from "../../services/auth";
import api from "../../services/api";
import { useUser } from "../../contexts/User";
import { categories } from "../../utils/categories";
import { useForm } from "react-hook-form";

export default function ComboBox() {
  const { setUser } = useUser({});
  const userId = getId();
  const { register, handleSubmit } = useForm();
  const status = "active";
  const changedAt = new Date().toString();

  const handleForm = (data) => {
    (async () => {
      try {
        await api.post(`posts/`, { ...data, userId, status, changedAt });
        console.log(data);
        console.log("Anúncio enviado com sucesso !");
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`users/${userId}`, {
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
          <h1>Anúncio</h1>
          <h3>Categoria</h3>

          <div id="appearance-select">
            <select {...register("category")}>
              {categories.map((category) => (
                <option key={category.id} value="1">
                  {category.name}
                </option>
              ))}
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
          ></textarea>
          <br />
          <Button type="submit">Enviar anúncio</Button>
        </form>
      </DivBox>
    </Container>
  );
}

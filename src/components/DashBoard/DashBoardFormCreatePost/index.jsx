import React from "react";
import Glass from "../../Glass";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../../services/api";

import { DivContainer, Titulo, ComboBox, SubTitulo, Description } from "styled-components";


/* 
EXEMPLO A SEGUIR
posts:
[
  {
    "id": 8,
    "userId": 8,
    "category": 1,
    "desc": "Preciso de um jardineiro, plantar uma duzia de rosas.",
    "status": "active",
    "changedAt": "Mon Feb 7 2021 19:45:16 GMT-0300 (Horário Padrão de Brasília)"
  }
]

*/

function DashBoardFormCreatePost() {
  const schema = yup.object().shape({
    desc: yup
      .string()
      .min(1, "Campo texto, podendo ter de 1 a 120 caracteres.")
      .max(120, "Campo texto, podendo ter de 1 a 120 caracteres.")
      .required("Campo obrigatório"),
  });

  const {
    posts,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const response = await api.post("posts", data);
  };

  return (
    <DivContainer>
      <Glass size={40}>
        <Titulo> Anúncio</Titulo>

        <ComboBox>

        </ComboBox>

        <SubTitulo>Tipo de Serviço</SubTitulo>

        <Description>
          <textarea></textarea>
        </Description>
      </Glass>
    </DivContainer>
  );
}

export default DashBoardFormCreatePost;

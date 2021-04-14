import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";

import Glass from "../../components/Glass";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiLogIn, FiAlertTriangle } from "react-icons/fi";

import loginImg from "../../assets/login.svg";

import api from "../../services/api";

import {
  Container,
  Content,
  Form,
  InputBox,
  Input,
  IconBox,
  Button,
} from "./styles";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string("Somente texto").email().required("Campo obrigatório"),
    password: yup
      .string()
      .min(5, "Mínimo de 8 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const response = await api.post("login", data);
    const token = response.data.accessToken;
    const { sub } = jwt_decode(token);

    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("id", JSON.stringify(sub));
  };

  return (
    <Container>
      <Glass size={90}>
        <Header />
        <Content>
          <img src={loginImg} alt="Login" draggable="false" />
          <Form onSubmit={handleSubmit(handleForm)}>
            <p>Faça seu login</p>
            <InputBox>
              <IconBox>
                {errors.email ? <FiAlertTriangle color="red" /> : <FiMail />}
              </IconBox>
              <Input
                type="email"
                {...register("email")}
                placeholder={errors.email ? errors.email.message : "Seu e-mail"}
              />
            </InputBox>

            <InputBox>
              <IconBox>
                {errors.email ? <FiAlertTriangle color="red" /> : <FiLock />}
              </IconBox>
              <Input
                type="password"
                {...register("password")}
                placeholder={errors.email ? errors.email.message : "Sua senha"}
              />
            </InputBox>

            <Button type="submit">Login</Button>

            <Link className="callLink" to="/register">
              <FiLogIn />
              Não tem registro? Vem por aqui!
            </Link>
          </Form>
        </Content>
      </Glass>
    </Container>
  );
};

export default Login;

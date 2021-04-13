import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Glass from "../../components/Glass";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiLogIn, FiAlertTriangle } from "react-icons/fi";

import loginImg from "../../assets/login.svg";

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
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => console.log(data, errors);

  return (
    <Container>
      <Glass size={90}>
        <Header />
        <Content>
          <img src={loginImg} alt="Login" />
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

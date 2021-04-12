import React from "react";

import Glass from "../../components/Glass";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";

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
  return (
    <Container>
      <Glass size={90}>
        <Header />
        <Content>
          <img src={loginImg} alt="Login" />
          <Form>
            <p>Faça seu login</p>

            <InputBox>
              <IconBox>
                <FiMail />
              </IconBox>
              <Input type="email" placeholder="Seu e-mail" />
            </InputBox>

            <InputBox>
              <IconBox>
                <FiLock />
              </IconBox>
              <Input type="password" placeholder="Sua senha" />
            </InputBox>

            <Button>Login</Button>
            <Link className="callLink">
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

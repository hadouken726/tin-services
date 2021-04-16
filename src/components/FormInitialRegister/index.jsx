import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import {
  Form,
  Input,
  InputBox,
  Option,
  SelectBox,
  Container,
  SwitchUserType,
  LinkButton,
  ErrorMessage,
} from "./styles";

import { useHistory } from "react-router-dom";
import { categories } from "../../utils/categories";

import PrimaryButton from "../../components/PrimaryButton";

const FormInitialRegister = () => {
  const [isProvider, setIsProvider] = useState(false);
  const history = useHistory();

  let schema = yup.object().shape({
    name: yup.string().required("Verifique seu nome!"),
    cpfCnpj: yup
      .string()
      .matches(
        /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/g,
        "Digite seu CPF ou CNPJ!"
      )
      .required("Campo obrigatório!"),
    phone: yup
      .string()
      .matches(/\([1-9]\d\)\s9?\d{4}-\d{4}|\s9?\d{11}/g, "Telefone inválido!")
      .required("Campo obrigatório!"),
    email: yup.string().email("Email inválido!").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    console.log(data);
    localStorage.setItem("formData", JSON.stringify(data));
    history.push("/completeregister");
  };

  const switchUserType = (bol) => {
    setIsProvider(bol);
  };

  return (
    <Container>
      <SwitchUserType>
        <LinkButton
          className={isProvider === false ? "link active" : "link"}
          onClick={() => switchUserType(false)}
        >
          Cliente
        </LinkButton>
        <LinkButton
          className={isProvider === true ? "link active" : "link"}
          onClick={() => switchUserType(true)}
        >
          Profissional
        </LinkButton>
      </SwitchUserType>

      <Form onSubmit={handleSubmit(handleData)}>
        <InputBox>
          <Input
            name="name"
            placeholder="Digite seu nome completo."
            {...register("name")}
          />
        </InputBox>
        {errors.name && (
          <ErrorMessage id="alertError">{errors.name.message}</ErrorMessage>
        )}
        <InputBox>
          <Input
            name="cpfCnpj"
            placeholder="Digite seu CPF ou CNPJ."
            {...register("cpfCnpj")}
          />
        </InputBox>
        {errors.cpfCnpj && (
          <ErrorMessage id="alertError">{errors.cpfCnpj.message}</ErrorMessage>
        )}
        <InputBox>
          <Input
            name="phone"
            placeholder="Digite seu telefone"
            {...register("phone")}
          />
        </InputBox>
        {errors.phone && (
          <ErrorMessage id="alertError">{errors.phone.message}</ErrorMessage>
        )}
        {isProvider && (
          <SelectBox>
            {categories.map((category) => (
              <Option
                name="categoryId"
                value={category.id}
                key={category.id}
                {...register("categoryId")}
              >
                {category.name}
              </Option>
            ))}
          </SelectBox>
        )}
        <InputBox>
          <Input name="email" placeholder="Email" {...register("email")} />
        </InputBox>
        {errors.email && (
          <ErrorMessage id="alertError">{errors.email.message}</ErrorMessage>
        )}
        <InputBox>
          <Input
            name="password"
            placeholder="Digite sua senha."
            {...register("password")}
          />
        </InputBox>
        {errors.password && (
          <ErrorMessage id="alertError">{errors.password.message}</ErrorMessage>
        )}
        <PrimaryButton name="Enviar" type="submit" />
      </Form>
    </Container>
  );
};

export default FormInitialRegister;

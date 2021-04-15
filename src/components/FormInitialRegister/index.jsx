import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Form, Input, InputBox, SelectBox } from "./styles";
import PrimaryButton from "../../components/PrimaryButton";

const FormInitialRegister = () => {
  const [initialDataRegister, setInitialDataRegister] = useState({});
  const [isProvider, setIsProvider] = useState(false);

  let schema = yup.object().shape({
    Nome: yup.string().required("Campo obrigatório!"),
    cpfCnpj: yup
      .string()
      .matches(
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g
      )
      .required("Campo obrigatório!"),
    email: yup
      .string()
      .email(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
      ),
    password: yup.string().required("Campo obrigatório!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setInitialDataRegister(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <InputBox>
        <Input name="name" placeholder="Nome" />
      </InputBox>
      <InputBox>
        <Input name="cpfCnpj" placeholder="CPF ou CNPJ" />
      </InputBox>
      {/* {isProvider && (
        <InputBox>
          <SelectBox>
            {categories.map((category) => (
              <option value={category.name} key={category.id} />
            ))}
          </SelectBox>
        </InputBox>
      )} */}
      <InputBox>
        <Input name="email" placeholder="Email" />
      </InputBox>
      <InputBox>
        <Input name="password" placeholder="Senha" />
      </InputBox>
      {/* Primary Button */}
    </Form>
  );
};

export default FormInitialRegister;

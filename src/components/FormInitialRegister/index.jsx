import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Form, Input, InputBox } from "./styles";
import { useHistory } from "react-router-dom";

import PrimaryButton from "../../components/PrimaryButton";

const FormInitialRegister = () => {
  const [initialDataRegister, setInitialDataRegister] = useState({});
  const [isProvider, setIsProvider] = useState(false);
  const history = useHistory();

  let schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    cpfCnpj: yup.string().required("Campo obrigatório!"),
    email: yup.string(),
    password: yup.string().required("Campo obrigatório!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    console.log(data);
    localStorage.setItem("formData", JSON.stringify(data));
    history.push("/completeregister");
  };

  return (
    <Form onSubmit={handleSubmit(handleData)}>
      <InputBox>
        <Input name="name" placeholder="Nome" {...register("name")} />
      </InputBox>
      <InputBox>
        <Input
          name="cpfCnpj"
          placeholder="CPF ou CNPJ"
          {...register("cpfCnpj")}
        />
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
        <Input name="email" placeholder="Email" {...register("email")} />
      </InputBox>
      <InputBox>
        <Input name="password" placeholder="Senha" {...register("password")} />
      </InputBox>
      <PrimaryButton name="Enviar" type="submit" />
    </Form>
  );
};

export default FormInitialRegister;

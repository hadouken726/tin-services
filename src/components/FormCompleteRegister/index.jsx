import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { Form, Input, InputBox } from "./styles";
import api from "../../services/api";

const FormCompleteRegister = () => {
  const [currentZipCode, setCurrentZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [adressData, setAdressData] = useState({});
  const getData = JSON.parse(localStorage.getItem("formData"));

  let zipCodeSchema = yup.object().shape({
    zipcode: yup
      .string()
      .matches(/[0-9]{5}[\d]{3}/g, "CEP inválido!")
      .required("Campo obrigatório!"),
  });

  let schema = yup.object().shape({
    street: yup.string().required("Campo obrigatório!"),
    number: yup.string().required("Campo obrigatório!"),
    complement: yup.string().required("Campo obrigatório!"),
    neighborhood: yup.string().required("Campo obrigatório!"),
    city: yup.string().required("Campo obrigatório!"),
    state: yup.string().required("Campo obrigatório!"),
  });

  const getAdressData = (cep) => {
    zipCodeSchema
      .validate({ zipcode: cep })
      .then(async (_) => {
        await axios
          .get(`https://api.pagar.me/1/zipcodes/${cep}`)
          .then((response) => {
            setAdressData(response.data);
            setValue("street", response.data.street);
            setValue("neighborhood", response.data.neighborhood);
            setValue("city", response.data.city);
            setValue("state", response.data.state);
          })
          .catch("Erro!");
      })
      .catch(function (err) {
        setZipCodeError(err.errors[0]);
      });
  };

  const { register, setValue, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async (data) => {
    console.log(data);
    await api
      .post("/register", { ...getData, ...data })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    localStorage.removeItem("formData");
  };

  return (
    <Form onSubmit={handleSubmit(handleData)}>
      <p>Complete seu registro</p>
      <InputBox>
        <Input
          placeholder="CEP"
          name="zipcode"
          value={currentZipCode}
          onChange={(e) => setCurrentZipCode(e.target.value)}
          onBlur={() => getAdressData(currentZipCode)}
        />
      </InputBox>
      <InputBox>
        <Input
          name="street"
          value={adressData.street}
          placeholder="Rua"
          {...register("street")}
        />
      </InputBox>
      <InputBox>
        <Input name="number" placeholder="Número" {...register("number")} />
      </InputBox>
      <InputBox>
        <Input
          name="complement"
          placeholder="Complemento"
          {...register("complement")}
        />
      </InputBox>
      <InputBox>
        <Input
          name="neighborhood"
          value={adressData.neighborhood}
          placeholder="Bairro"
          {...register("neighborhood")}
        />
      </InputBox>
      <InputBox>
        <Input
          name="city"
          value={adressData.city}
          placeholder="Cidade"
          {...register("city")}
        />
      </InputBox>
      <InputBox>
        <Input
          name="state"
          value={adressData.state}
          placeholder="Estado"
          {...register("state")}
        />
      </InputBox>
      <button type="submit">Enviar</button>
    </Form>
  );
};

export default FormCompleteRegister;

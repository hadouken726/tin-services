import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { Form, Input, InputBox } from "./styles";

const FormCompleteRegister = () => {
  // const [isSuccess, setIsSuccess] = useState(true);
  const [currentZipCode, setCurrentZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [adressData, setAdressData] = useState({});

  let zipCodeSchema = yup.object().shape({
    zipcode: yup
      .string()
      .matches(/[0-9]{5}[\d]{3}/g, "CEP inválido!")
      .required("Campo obrigatório!"),
  });

  let schema = yup.object().shape({
    street: yup.string().required("Campo obrigatório!"),
    number: yup.number().positive().integer().required("Campo obrigatório!"),
    complement: yup.string().required("Campo obrigatório!"),
    neighborhood: yup.string().required("Campo obrigatório!"),
    state: yup.string().required("Campo obrigatório!"),
    country: yup.string().required("Campo obrigatório!"),
  });

  const getAdressData = (cep) => {
    zipCodeSchema
      .validate({ zipcode: cep })
      .then((_) => {
        axios
          .get(`https://api.pagar.me/1/zipcodes/${cep}`)
          .then((response) => {
            setAdressData(response.data);
          })
          .catch("Erro!");
      })
      .catch(function (err) {
        setZipCodeError(err.errors[0]);
      });
  };

  const { register, handleSubmit, errors  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    console.log("Data ==>", data);
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
        <Input name="street" value={adressData.street} placeholder="Rua" />
      </InputBox>
      <InputBox>
        <Input name="number" placeholder="Número" />
      </InputBox>
      <InputBox>
        <Input name="complement" placeholder="Complemento" />
      </InputBox>
      <InputBox>
        <Input
          name="neighborhood"
          value={adressData.neighborhood}
          placeholder="Bairro"
        />
      </InputBox>
      <InputBox>
        <Input name="city" value={adressData.city} placeholder="Cidade" />
      </InputBox>
      <InputBox>
        <Input name="state" value={adressData.state} placeholder="Estado" />
      </InputBox>
      {/* Primary Button */}
    </Form>
  );
};

export default FormCompleteRegister;

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, Form, Input, InputBox } from "./styles";
import api from "../../services/api";
import PrimaryButton from "../PrimaryButton";
import { useHistory } from "react-router";

import GlobalModal from "../../components/GlobalModal";
import ConfirmMessageModal from "../ConfirmMessageModal";

const FormCompleteRegister = () => {
  const history = useHistory();

  const [currentZipCode, setCurrentZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [adressData, setAdressData] = useState({});
  const getData = JSON.parse(localStorage.getItem("formData"));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    history.push("/login");
  };

  let zipCodeSchema = yup.object().shape({
    zipcode: yup
      .string()
      .matches(/[0-9]{5}[\d]{3}|[0-9]{5}-[\d]{3}/g, "CEP inválido!")
      .required("Campo obrigatório!"),
  });

  let schema = yup.object().shape({
    street: yup.string().required("Campo obrigatório!"),
    number: yup
      .string()
      .matches(/[0-9]\d+/g, "Digite somente números, sem espaços!")
      .required("Campo obrigatório!"),
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
        console.log(`O CEP ${zipCodeError} é inválido!`);
      });
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async (data) => {
    console.log(data);
    await api
      .post("/register", { ...getData, ...data })
      .then(() => handleOpenModal())
      .catch((err) => console.log(err));
    localStorage.removeItem("formData");
  };

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        history.push("/login");
        handleCloseModal();
      }, 2500);
    }
  }, [isModalOpen]);

  return (
    <div>
      <Form onSubmit={handleSubmit(handleData)}>
        <p>Complete seu registro</p>
        <InputBox>
          <Input
            placeholder={errors.zipcode ? errors.zipcode?.message : "CEP"}
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
        {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
        <InputBox>
          <Input
            name="complement"
            placeholder={
              errors.complement
                ? errors.complement?.message
                : "Digite o complemento."
            }
            {...register("complement")}
          />
        </InputBox>
        <InputBox>
          <Input
            name="neighborhood"
            value={adressData.neighborhood}
            placeholder={
              errors.neighborhood ? errors.neighborhood?.message : "Bairro"
            }
            {...register("neighborhood")}
          />
        </InputBox>
        <InputBox>
          <Input
            name="city"
            value={adressData.city}
            placeholder={errors.city ? errors.city?.message : "Cidade"}
            {...register("city")}
          />
        </InputBox>
        <InputBox>
          <Input
            name="state"
            value={adressData.state}
            placeholder={errors.state ? errors.state?.message : "Estado"}
            {...register("state")}
          />
        </InputBox>
        <PrimaryButton name="Enviar" type="submit" />
      </Form>
      <GlobalModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <ConfirmMessageModal />
      </GlobalModal>
    </div>
  );
};

export default FormCompleteRegister;

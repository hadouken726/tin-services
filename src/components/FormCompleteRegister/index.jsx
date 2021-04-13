import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import axios from "axios";

const FormCompleteRegister = () => {
  // const [isSuccess, setIsSuccess] = useState(true);
  const [currentZipCode, setCurrentZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");

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
          .then((response) => console.log(response))
          .catch("Erro!");
      })
      .catch(function (err) {
        setZipCodeError(err.errors[0]);
      });
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    console.log("Data ==>", data);
    // console.log("Zip Code ==>", data.zipcode);
    // setCurrentZipCode(data.zipcode);
    // console.log("currentZipCode! ==>", currentZipCode);
    // setIsSuccess(true);
  };

  useEffect(() => {
    console.log(currentZipCode);
  }, [currentZipCode]);

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <div>
        <input
          placeholder="CEP"
          name="zipcode"
          value={currentZipCode}
          onChange={(e) => setCurrentZipCode(e.target.value)}
          onBlur={() => getAdressData(currentZipCode)}
        />
      </div>
    </form>
  );
};

export default FormCompleteRegister;

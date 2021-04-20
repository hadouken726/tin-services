import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

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
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [isProvider, setIsProvider] = useState(false);
    const history = useHistory();

    const getUserGeolocation = () => {
        fetch(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then((response) => response.json())
            .then((data) => {
                setLat(data.latitude);
                setLng(data.longitude);
            });
    };

    useEffect(() => {
        if (lat === 0) {
            getUserGeolocation();
        }
    }, [lat]);

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
            .matches(/\(\d{2}\)\s\d{4,5}\-\d{4}/g, "Telefone inválido!")
            .required("Campo obrigatório!"),
        email: yup.string().email("Email inválido!").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório!"),
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleData = (data) => {
        let type = isProvider ? "provider" : "client";
        localStorage.setItem(
            "formData",
            JSON.stringify({...data, type, lat, lng})
        );
        console.log({...data, type, lat, lng});
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
                        placeholder={
                            isProvider ? "Digite seu CPF ou CNPJ." : "Digite seu CPF"
                        }
                        {...register("cpfCnpj")}
                    />
                </InputBox>
                {errors.cpfCnpj && (
                    <ErrorMessage id="alertError">{errors.cpfCnpj.message}</ErrorMessage>
                )}
                <InputBox>
                    <Input
                        name="phone"
                        placeholder="(XX) XXXXX-XXXX"
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
                        type="password"
                    />
                </InputBox>
                {errors.password && (
                    <ErrorMessage id="alertError">{errors.password.message}</ErrorMessage>
                )}
                <PrimaryButton name="Enviar" type="submit"/>
            </Form>
        </Container>
    );
};

export default FormInitialRegister;

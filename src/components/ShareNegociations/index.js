import { useEffect, useState } from "react";
import { Input, InputBox, Button, Container } from "./styled";
import ReactWhatsapp from "react-whatsapp";
import { ImWhatsapp } from "react-icons/im";

const ShareNegociations = ({ client, provider, categoryName }) => {
  const [value, setValue] = useState("");
  const filteredNumber = value
    .split("")
    .filter((digit) => "123456789".includes(digit))
    .join("");

  const desc = `Com a perspectiva de aumentar a qualidade de entrega de serviço na comunidade. Estou lhe indicando o(a) ${provider.name}, ${categoryName}, fone:${value}`;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <h1>Compartilhar com amigos</h1>
      <h2>{provider.name}</h2>
      <h2>{categoryName}</h2>
      <InputBox>
        <Input
          name="phone"
          placeholder="(XX) XXXXX-XXXX"
          value={value}
          onChange={handleChange}
        />
      </InputBox>
      <ReactWhatsapp
        className="zap-button"
        number={"55" + value}
        message={desc}
      >
        Compartilhar <ImWhatsapp />
      </ReactWhatsapp>
    </Container>
  );
};

export default ShareNegociations;

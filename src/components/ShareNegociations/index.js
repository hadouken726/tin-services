import { useState } from "react";
import { Input, InputBox, Button, Container } from "./styled";

const ShareNegociations = ({ provider, category }) => {
  const [value, setValue] = useState;

  const desc = `Com a perspectiva de aumentar a qualidade de entrega de serviço na comunidade. Estou lhe indicando o(a) ${provider.name}, ${category}, fone:{phone}`;

  const handleChange = (e) =>{
      setValue(e)
  }

  const handleWhatsApp = () =>{
    console.log(value)
    console.log(desc)
}

  return (
    <Container>
      <InputBox>
        <Input
          type="number"
          name="phone"
          placeholder="(XX) XXXXX-XXXX"
          value={value}
          onChange={handleChange}
        />
      </InputBox>
      <Button name="Enviar" onclick={handleWhatsApp} />
    </Container>
  );
}


export default ShareNegociations;
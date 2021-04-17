import CompletedSteps from "../../assets/completedSteps.svg";
import { Container, Image, Message } from "./styles";

const ConfirmMessageModal = () => {
  return (
    <Container>
      <Image src={CompletedSteps} alt="Completed Steps" />
      <Message>Cadastro realizado com sucesso!</Message>
    </Container>
  );
};
export default ConfirmMessageModal;

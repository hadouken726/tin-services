import FormInitialRegister from "../../components/FormInitialRegister";
import Glass from "../../components/Glass";
import { Container, Content } from "./styles";
import Header from "../../components/Header";
import addUser from "../../assets/addUser.svg";

const InitialRegister = () => {
  return (
    <Container>
      <Glass size={90}>
        <Header />
        <Content>
          <img src={addUser} alt="" />
          <FormInitialRegister />
        </Content>
      </Glass>
    </Container>
  );
};

export default InitialRegister;

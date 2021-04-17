import FormCompleteRegister from "../../components/FormCompleteRegister";
import Glass from "../../components/Glass";
import { Container, Content } from "./styles";
import Header from "../../components/Header";
import addUser from "../../assets/addUser.svg";

const CompleteRegister = () => {

  return (
    <Container>
      <Glass size={90}>
        <Header />
        <Content>
          <img src={addUser} alt="" />
          <FormCompleteRegister />
        </Content>
      </Glass>
    </Container>
  );
};

export default CompleteRegister;

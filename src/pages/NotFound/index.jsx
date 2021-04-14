import { Container } from "./styled";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import Glass from "../../components/Glass";
import img from "../../assets/error404.svg";

const NotFound = () => {
  const history = useHistory();
  const storagedToken = localStorage.getItem("token") || "";

  const sendTo = () => {
    if (!storagedToken) {
      history.push("/login");
    } else {
      history.push("/dashboard");
    }
  };

  return (
    <Container>
      <Glass size={95}>
        <header>
          <h1>Ooops... nada por aqui...</h1>
          <Link className="fi-log" onClick={sendTo}>
            <FiLogIn />
          </Link>
        </header>
        <img src={img} alt="404 error" />
      </Glass>
    </Container>
  );
};

export default NotFound;

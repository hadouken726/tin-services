import { Main } from "./styled";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import Glass from "../../components/Glass";

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
    <Glass size={90}>
      <Main>
        <header>
          <h1>Ooops... nada por aqui dev</h1>
          <Link className="fi-log" onClick={sendTo}>
            <FiLogIn />
          </Link>
        </header>
        <img src="./assets/not-found.svg" alt="404 error" />
      </Main>
    </Glass>
  );
};

export default NotFound;

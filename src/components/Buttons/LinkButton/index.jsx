import { Link } from "react-router-dom";

const LinkButton = ({ current, name, route }) => {
  return (
    <Link className={current === "home" ? "link active" : "link"} to={route}>
      {name}
    </Link>
  );
};

export default LinkButton;

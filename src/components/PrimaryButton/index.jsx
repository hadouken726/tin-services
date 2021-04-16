import { Button } from "./styles";

const PrimaryButton = ({ name, action }) => {
  return <Button onClick={action}>{name}</Button>;
};

export default PrimaryButton;

import { Button } from "./styles";

const PrimaryButton = ({ children, action }) => {
  return <Button onClick={action}>{children}</Button>;
};

export default PrimaryButton;

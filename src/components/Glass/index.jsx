import React from "react";

import { Container } from "./styles";

const Glass = ({ children, size }) => {
  return <Container size={size}>{children}</Container>;
};

export default Glass;

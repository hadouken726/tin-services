import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => `${props.size}%`};
  height: ${(props) => `${props.size}%`};
  background: linear-gradient(
    103.6deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(42px);

  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  padding: 80px;

  border-radius: 16px;
`;

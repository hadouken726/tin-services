import styled from "styled-components";
import { FiHome, FiUser } from "react-icons/fi";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 9rem;

    button {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--glass-bg);
      background-color: var(--blue-400);
      opacity: 0.6;
      border-top: 2px solid rgba(255, 255, 255, 0.5);
      border-left: 2px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
      transition: all 200ms ease-in;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const HomeIcon = styled(FiHome)`
  color: var(--blue-400);
  font-size: 2.5rem;
`;

export const UserIcon = styled(FiUser)`
  color: var(--blue-400);
  font-size: 2.5rem;
`;

export const Content = styled.div``;

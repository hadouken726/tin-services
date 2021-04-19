import styled from "styled-components";
import { RiFileUserLine } from "react-icons/ri";

export const Container = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--blue-400);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--blue-400);
  }

  form {
    margin-top: 2rem;

    section {
      display: flex;
      align-items: center;
      height: 3rem;

      div.icon-box {
        width: 3rem;
        height: 3rem;
        margin-right: 0.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--glass-bg);
        border-top: 2px solid rgba(255, 255, 255, 0.5);
        border-left: 2px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
      }

      input {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        background: var(--glass-bg);
        border-top: 2px solid rgba(255, 255, 255, 0.5);
        border-left: 2px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
        padding: 0.5rem 1rem;
        color: var(--blue-400);
        font-size: 1rem;
      }
    }

    p {
      margin: 0 auto;
      margin-top: 1rem;
      color: red;
    }

    button {
      display: block;
      margin: 0 auto;
      margin-top: 2rem;
      background-color: var(--blue-400);
      padding: 1rem 1.5rem;
      border-radius: 2rem;
      font-size: 1.2rem;
      color: var(--white);
      font-weight: bold;
    }
  }
`;

export const AvatarIcon = styled(RiFileUserLine)`
  font-size: 1.5rem;
  color: var(--blue-400);
`;

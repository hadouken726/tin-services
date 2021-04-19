import styled from "styled-components";
import { ImWhatsapp } from "react-icons/im";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: var(--blue-400);

  img {
    width: 5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  div {
    p {
      font-size: 1.5rem;
      font-weight: bold;
    }

    span {
      font-size: 1.2rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  button.zap-button {
    display: block;
    font-size: 1rem;
    background-color: #2ecc71;
    padding: 1rem 2rem;
    border-radius: 2rem;
    color: var(--white);
    font-weight: bold;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Description = styled.div`
  width: 100%;
  text-align: justify;
  margin-bottom: 1rem;
  background: var(--glass-bg);
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  background-color: var(--blue-400);
  opacity: 0.8;
  font-weight: bold;
  padding: 1rem;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: var(--blue-400);
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const Avaliations = styled.div`
  width: 100%;
  text-align: justify;
  background: var(--glass-bg);
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  background-color: var(--blue-400);
  opacity: 0.8;
  border-radius: 1rem;
  padding: 1rem;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: var(--blue-400);
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  align-items: center;

  div.avaliations {
    width: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      background: transparent;
    }

    article {
      border-radius: 1rem;
      width: 100%;
      margin-bottom: 1rem;
      font-weight: bold;
      padding: 1rem;
      border-left: 5px solid var(--blue-400);
      background: var(--glass-bg);
      color: var(--blue-400);
    }
  }
`;

export const Button = styled.button``;

export const ZapIcon = styled(ImWhatsapp)`
  margin-left: 0.5rem;
  font-size: 2rem;
  color: #fff;
`;

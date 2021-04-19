import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  border: 1px solid var(--white);
  margin: 0.8rem 0;
  padding: 0.5rem 1rem;
  border-radius: 2rem;

  @media (max-width: 1190px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 2rem;
  background-color: transparent;
  font-size: 1rem;
  width: 100%;
  color: #eeee;
`;

export const Button = styled.button`
  background-color: var(--blue-400);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  transition: filter 200ms ease-in;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1180px) {
    display: none;
  }
`;
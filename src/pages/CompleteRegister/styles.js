import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1190px) {
    width: 100%;
  }

  img {
    width: 30rem;

    @media (max-width: 1190px) {
      display: none;
    }
  }
`;

export const Form = styled.form`
  margin-left: auto;
  width: 30%;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1190px) {
    width: 100%;
    margin: 0 auto;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  .callLink {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    transition: filter 200ms ease-in;

    @media (max-width: 1190px) {
      width: 100%;
      margin: 0 auto;
      font-size: 0.8rem;
    }

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      margin-right: 0.5rem;
      color: var(--blue-400);
      font-size: 2rem;
    }
  }
`;

export const InputBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  border: 1px solid var(--white);
  margin: 1rem 0;
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
  &:valid {
    background-color: transparent;
  }
`;

export const IconBox = styled.div`
  margin-right: 0.5rem;
`;

export const Button = styled.button`
  margin: 1rem 0;
  background-color: var(--blue-400);
  width: 12rem;
  height: 3rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  color: var(--white);
  transition: filter 200ms ease-in;

  @media (max-width: 1190px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

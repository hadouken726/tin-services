import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SwitchUserType = styled.div`
  margin-left: auto;
  width: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const LinkButton = styled.button`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  background-color: transparent;
  transition: filter 200ms ease-in;
  color: #eee;

  @media (max-width: 1180px) {
    font-size: 1rem;
  }

  @media (max-width: 1180px) {
    justify-content: center;
  }

  .link {
    margin: 0 1.5rem;

    &:hover {
      filter: brightness(0.9);
    }

    &.active {
      position: relative;

      &.active::after {
        content: "";
        position: absolute;
        bottom: -1rem;
        left: 0;
        width: 100%;
        height: 0.3rem;
        background-color: var(--blue-400);
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
    }
  }
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

export const Form = styled.form`
  margin-left: auto;
  width: 45%;
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

export const SelectBox = styled.select`
  width: 80%;
  height: 3rem;
  display: flex;
  align-items: center;
  border: 1px solid var(--white);
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background-color: transparent;
  color: #eeeeee;
  font-size: 1rem;
  outline: none;

  @media (max-width: 1190px) {
    width: 100%;
  }
`;

export const IconBox = styled.div`
  margin-right: 0.5rem;
`;

export const Option = styled.option`
  flex: 1;
  height: 2rem;
  background-color: rgb(0, 0, 0, 0.7);
  font-size: 1rem;
  width: 100%;
  color: #000;
`;

export const ErrorMessage = styled.span`
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: red;
  font-style: italic;
`;

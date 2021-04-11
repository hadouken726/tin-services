import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: flex-end;
  img {
    margin-left: 8rem;
    width: 40rem;

    @media (max-width: 1300px) {
      display: none;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const TextContent = styled.div`
  font-size: 2rem;
  line-height: 2.8rem;
  width: 50%;
  margin-top: 3rem;

  @media (max-width: 1300px) {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-top: 1rem;
  }

  span {
    display: inline-block;
    font-size: 2rem;
    font-weight: 500;

    @media (max-width: 1300px) {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      line-height: 1.5rem;
      margin-top: 0.5rem;
    }
  }

  div {
    margin-top: 8rem;

    display: flex;
    align-items: center;

    @media (max-width: 1300px) {
      margin-top: 4rem;
      width: 100%;
      flex-direction: column;
    }

    button.secondary {
      background-color: transparent;
      color: var(--white);
      border: 2px solid var(--blue-400);
      padding: 1rem 2rem;
      width: 18rem;
      border-radius: 2rem;
      font-size: 1.5rem;
      transition: filter 200ms ease-in;

      &:hover {
        filter: brightness(0.9);
        background-color: var(--blue-400);
      }

      @media (max-width: 1300px) {
        width: 100%;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: var(--blue-400);
  width: 18rem;
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: filter 200ms ease-in;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1300px) {
    width: 100%;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

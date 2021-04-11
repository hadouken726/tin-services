import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: center;

    > img {
      max-width: 90%;
      margin-bottom: 1rem;
    }
  }
`;

export const Content = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  transition: filter 200ms ease-in;

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

import styled from "styled-components";
import { shade } from "polished";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      180deg,
      var(--dark-primary) 0%,
      var(--dark-primary) 52.34%,
      var(--soft-primary) 100%
    ),
    linear-gradient(0deg, var(--text), var(--text));

  header {
    width: 75%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 64px;

    h1 {
      font-size: 48px;
      color: var(--text);
      font-weight: bold;
      letter-spacing: 2px;
      color: #fff;

      @media (max-width: 1030px) {
        font-size: 2rem;
      }

      @media (max-width: 430px) {
        font-size: 0.8rem;
      }
    }

    .fi-log {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      color: var(--blue400);
      transition: all 200ms ease-in;
      &:hover {
        background-color: ${shade(0.4, "#2656B5")};
      }

      @media (max-width: 930px) {
        width: 2rem;
        height: 2rem;
      }

      > svg {
        width: 40px;
        height: 40px;
      }
    }
  }

  img {
    width: 900px;

    @media (max-width: 930px) {
      width: 80%;
    }
  }
`;

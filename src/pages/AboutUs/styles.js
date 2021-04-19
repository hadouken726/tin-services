import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Mission = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  h2 {
    width: 50%;
    text-align: center;
    font-size: 3rem;
    margin: 3rem 0;
  }

  &.benefits {
    flex-direction: column;
  }

  div.textBox {
    width: 50%;
    height: 100%;

    h1 {
      font-size: 3rem;
      margin: 1rem 0;
    }

    p {
      font-size: 2.5rem;
      line-height: 3rem;
      margin-top: 5rem;
    }
  }

  div.imageBox {
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  div.cardsBox {
    display: flex;
  }
`;

export const Card = styled.article`
  width: 15rem;
  height: 18rem;
  margin: 0 1rem;
  transition: 200ms;
  cursor: zoom-in;

  .tilt:hover {
    border-radius: 16px;
  }

  &:hover div.benefit {
    transform: translateY(0);
    opacity: 1;
  }

  div.benefit {
    width: 100%;
    height: 100%;
    transform: translateY(100px);
    opacity: 1;
    border-radius: 16px;
    transition: 500ms;
    text-align: center;

    img {
      width: 10rem;
      height: 10rem;
    }

    span {
      display: inline-block;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`;

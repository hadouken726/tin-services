import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 20px; */

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: -10px;

    h1,
    h2 {
      color: #1e438d;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 2.5rem;
      font-style: bolder;
    }

    h2 {
      margin-top: 15px;
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 3px;
    }

    p {
      color: red;
    }

    textarea {
      width: 25%;
      background-color: rgba(255, 255, 255, 0.04);
      border-radius: 15px;
      padding-top: 10px;
      padding-left: 25px;
      color: #fff;
      overflow: hidden;
      outline: none;
      /* border: none; */
    }

    textarea::name {
      margin-top: 10px;
    }

    textarea::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const DivBox = styled.div``;

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

export const DivStars = styled.div`
  
`;

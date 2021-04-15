import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 20%;
  padding: 20px;

  background: linear-gradient(
    103.6deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(42px);

  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  padding: 2.5rem;

  border-radius: 16px;

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

    h1,h2{
        color: #1e438d;
    }
    
    textarea{
        width: 25%;
        background-color: rgba(255, 255, 255, 0.04);
        border-radius: 15px;
        padding: 0 20px 0 20px;
        color: #fff

    }

    textarea::placeholder{
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

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --blue-400: #2656B5;
    --glass-bg: linear-gradient(
    103.6deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
    );
    --main-bg: linear-gradient(to right bottom, #17141f, #1c2027);
  }

  html {
    width: 100vw;
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    background: var(--main-bg);
    color: #fff;

    &, * {
      box-sizing: border-box;
    }
  }

  input,
  button {
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 90%;
    max-width: 800px;
    background: var(--glass-bg);
    padding: 2rem;
    position: relative;
    border-radius: 0.25rem;
    outline: none;
    border: none;

    backdrop-filter: blur(42px);

    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    padding: 2.5rem;

    border-radius: 16px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .close-react-modal {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 200ms;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default GlobalStyle;

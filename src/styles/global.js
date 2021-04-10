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
`;

export default GlobalStyle;

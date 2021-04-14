import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  align-items: center;
  border-radius: 16px;
`;

export const TextContent = styled.div`
  width: 27.5rem;
  height: 100%;

  background: linear-gradient(
    103.6deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(42px);
  /* Note: backdrop-filter has minimal browser support */

  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  /* backdrop-filter: blur(10px); */
  padding: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  font-size: 40px;
  line-height: 42px;

  header img {
    width: 60px;
  }

  footer {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    line-height: 24px;
  }
`;

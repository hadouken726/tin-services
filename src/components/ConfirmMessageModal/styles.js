import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 80%;
  height: 70%;

  margin: 0 auto;

  border-radius: 16px;

  overflow-y: scroll;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  margin: 2rem;
`;

export const Message = styled.p`
  font-size: 30px;
  color: var(--white);
`;
